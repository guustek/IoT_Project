#include <Arduino.h>

#include "EspMQTTClient.h"

#include <WiFiUdp.h>
#include <NTPClient.h>

#include "pb_decode.h"
#include "pb_encode.h"
#include "proto/messages.pb.h"

//bme
#include <Wire.h>
#include <SPI.h>
#include <Adafruit_Sensor.h>
#include "Adafruit_BME680.h"

#define BME_SCK 13
#define BME_MISO 12
#define BME_MOSI 11
#define BME_CS 10

#define SEALEVELPRESSURE_HPA (1013.25)

Adafruit_BME680 bme; // I2C
//Adafruit_BME680 bme(BME_CS); // hardware SPI
//Adafruit_BME680 bme(BME_CS, BME_MOSI, BME_MISO,  BME_SCK);

const char *const ssid = "";
const char *const password = "";
const char *const mqtt_server = "";

EspMQTTClient client(ssid, password, mqtt_server);

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org");

const char *const bme_topic = "project/esp32/bme";

const DeviceInfo device_info = {2, "ESP32"};

bool decodeMessage(const uint8_t *buffer, void *destStruct, const pb_msgdesc_t *msgDescription, size_t msgSize);

bool encodeMessage(uint8_t *buffer, const size_t bufferSize, void *srcStruct, const pb_msgdesc_t *msgDescription);

void publishBmeSensorReading(int32_t temperature, uint32_t pressure, int32_t humidity);

void setup() {
    Serial.begin(9600);
    Serial.println();

    if (!bme.begin()) {
        Serial.println("Could not find a valid BME680 sensor, check wiring!");
    }

    bme.setTemperatureOversampling(BME680_OS_8X);
    bme.setHumidityOversampling(BME680_OS_2X);
    bme.setPressureOversampling(BME680_OS_4X);
    bme.setIIRFilterSize(BME680_FILTER_SIZE_3);
    bme.setGasHeater(320, 150); // 320*C for 150 ms
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

    if(!client.isConnected()) {
        return;
    }

    Serial.println();

    if (!bme.performReading()) {
        Serial.println("Failed to perform reading.");
        return;
    }
    int temperature_value = bme.temperature;
    uint32_t pressure_value = bme.pressure / 100;
    float humidity_value = bme.humidity;

    Serial.printf("Temperature: %d C\n", temperature_value);
    Serial.printf("Pressure: %d Pa\n", pressure_value);
    Serial.printf("Humidity: %d %%\n", humidity_value);

    publishBmeSensorReading(temperature_value, pressure_value, humidity_value);
}

//    int32_t temperature_value = random(30);
//    uint32_t pressure_value = random(1000);
//    int32_t humidity_value = random(100);

void publishBmeSensorReading(int32_t temperature, uint32_t pressure, int32_t humidity) {
    uint8_t buffer[256] = {0};

    BmeSensorReading data = BmeSensorReading_init_default;
    data.device_info = device_info;
    data.has_device_info = true;

    data.timestamp = google_protobuf_Timestamp_init_default;
    timeClient.update();
    data.timestamp.seconds = timeClient.getEpochTime();
    data.has_timestamp = true;

    data.temperature_value = temperature;
    data.pressure_value = pressure;
    data.humidity_value = humidity;

    if (!encodeMessage(buffer, sizeof(buffer), &data, &BmeSensorReading_msg)) {
        return;
    }
    client.publish(bme_topic, (char *) buffer);
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