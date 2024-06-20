#include <Arduino.h>

#include "EspMQTTClient.h"

#include <WiFiUdp.h>
#include <NTPClient.h>

#include "pb_decode.h"
#include "pb_encode.h"
#include "proto/messages.pb.h"

const char *const ssid = "";
const char *const password = "";
const char *const mqtt_server = "";

EspMQTTClient client(ssid, password, mqtt_server);

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org");

const char *const touch_topic = "project/esp8266/touch";
const char *const gas_topic = "project/esp8266/gas";
const char *const photo_topic = "project/esp8266/photo";

const DeviceInfo device_info = {1, "ESP8266"};

bool decodeMessage(const uint8_t *buffer, void *destStruct, const pb_msgdesc_t *msgDescription, size_t msgSize);

bool encodeMessage(uint8_t *buffer, const size_t bufferSize, void *srcStruct, const pb_msgdesc_t *msgDescription);

void publishTouchSensorReading(int32_t touchValue);

void publishGasSensorReading(int32_t gasValue);

void publishPhotoRequest();

void setup() {
    Serial.begin(9600);
    Serial.println();

    // Touch sensor setup
    pinMode(D5, INPUT);

    // Gas sensor setup
    pinMode(A0, INPUT);
}

void onConnectionEstablished() {
    Serial.println();
    Serial.println("Connected to MQTT");

    timeClient.begin();
    Serial.println("NTP Client started");
}

void loop() {
    delay(1000);

    client.loop();

    if (!client.isConnected()) {
        return;
    }

    Serial.println();

    // Read touch sensor value
    int touchValue = digitalRead(D5);
    Serial.print("Touch Sensor: ");
    Serial.println(touchValue);
    publishTouchSensorReading(touchValue);

    if (touchValue == HIGH ) {
        publishPhotoRequest();
    }

    // Read gas sensor value
    int gasValue = analogRead(A0);
    Serial.print("Gas Sensor (PPM): ");
    Serial.println(gasValue);
    publishGasSensorReading(gasValue);
}

bool decodeMessage(const uint8_t *buffer, void *destStruct, const pb_msgdesc_t *msgDescription, size_t msgSize) {
    if (pb_istream_t stream = pb_istream_from_buffer(buffer, msgSize);
            !pb_decode(&stream, msgDescription, destStruct)) {
        Serial.printf("Decoding failed: %s\n", PB_GET_ERROR(&stream));
        Serial.println();
        return false;
    }
    return true;
}

bool encodeMessage(uint8_t *buffer, const size_t bufferSize, void *srcStruct, const pb_msgdesc_t *msgDescription) {
    if (pb_ostream_t stream = pb_ostream_from_buffer(buffer, bufferSize);
            !pb_encode(&stream, msgDescription, srcStruct)) {
        Serial.printf("Encoding failed: %s\n\n", PB_GET_ERROR(&stream));
        Serial.println();
        return false;
    }
    return true;
}

void publishTouchSensorReading(int32_t touchValue) {
    uint8_t buffer[256] = {0};

    TouchSensorReading data = TouchSensorReading_init_default;
    data.device_info = device_info;
    data.has_device_info = true;

    data.timestamp = google_protobuf_Timestamp_init_default;
    timeClient.update();
    data.timestamp.seconds = timeClient.getEpochTime();
    data.has_timestamp = true;

    data.touch_value = touchValue == HIGH ? TouchValue_HIGH : TouchValue_LOW;

    if (!encodeMessage(buffer, sizeof(buffer), &data, &TouchSensorReading_msg)) {
        return;
    }
    client.publish(touch_topic, (char *) buffer);
}

void publishGasSensorReading(int32_t gasValue) {
    uint8_t buffer[256] = {0};
    GasSensorReading data = GasSensorReading_init_default;
    data.device_info = device_info;
    data.has_device_info = true;

    data.timestamp = google_protobuf_Timestamp_init_default;
    timeClient.update();
    data.timestamp.seconds = timeClient.getEpochTime();
    data.has_timestamp = true;

    data.gas_value = gasValue;

    if (!encodeMessage(buffer, sizeof(buffer), &data, &GasSensorReading_msg)) {
        return;
    }
    client.publish(gas_topic, (char *) buffer);
}


int count = 0;

void publishPhotoRequest() {
    uint8_t buffer[256] = {0};
    PhotoRequest data = PhotoRequest_init_default;
    data.device_info = device_info;
    data.has_device_info = true;

    data.timestamp = google_protobuf_Timestamp_init_default;
    timeClient.update();
    data.timestamp.seconds = timeClient.getEpochTime();
    data.has_timestamp = true;

    count++;
    data.count = count;

    if (!encodeMessage(buffer, sizeof(buffer), &data, &PhotoRequest_msg)) {
        return;
    }
    client.publish(photo_topic, (char *) buffer);
}