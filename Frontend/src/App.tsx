import React, {useEffect, useRef, useState} from "react";
import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
} from "recharts";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import moment from "moment";
import {BmeSensorReading, GasSensorReading, PhotoRequest, TouchSensorReading} from "./proto/messages";
import mqtt from "mqtt";

const touchSensorTopic = "project/esp8266/touch";
const gasSensorTopic = "project/esp8266/gas";
const photoTopic = "project/esp8266/photo";
const bmeSensorTopic = "project/esp32/bme";

const pi_host = "";

const client = mqtt.connect(`mqtt://${pi_host}:9001`);

client.on("connect", () => {
    subscribe(client, touchSensorTopic);
    subscribe(client, gasSensorTopic);
    subscribe(client, bmeSensorTopic);
    subscribe(client, photoTopic);
});




let isMessageHandlerRegistered = false;

const App: React.FC = () => {
    const [imageSrc, setImageSrc] = useState('');
    const [open, setOpen] = useState(false);

    const touchReadingsRef = useRef<TouchSensorReading[]>([]);
    const gasReadingsRef = useRef<GasSensorReading[]>([]);
    const bmeReadingsRef = useRef<BmeSensorReading[]>([]);
    const [, setTouchReadings] = useState<TouchSensorReading[]>([]);
    const [, setGasReadings] = useState<GasSensorReading[]>([]);
    const [, setBmeReadings] = useState<BmeSensorReading[]>([]);

    const maxDataPoints = 120; // maximum number of data points to display

    const fetchImage = async () => {
        const res = await fetch(`http://${pi_host}:5000/capture`);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImageSrc(imageObjectURL);
        setOpen(true);
    };

    const closePopup = () => {
        setOpen(false);
    };

    const addDataPoint = (dataRef, setData, newReading) => {
        dataRef.current = [...dataRef.current, newReading].slice(-maxDataPoints);
        setData(dataRef.current);
    };

    useEffect(() => {

        //mock
        // const interval = setInterval(generateMockData, 1000);
        // return () => clearInterval(interval);

        if (isMessageHandlerRegistered) {
            return;
        }

        client.on("message", (topicName, payload) => {
            try {
                if (topicName === touchSensorTopic) {
                    const reading = TouchSensorReading.decode(payload);
                    addDataPoint(touchReadingsRef, setTouchReadings, reading);
                }

                if (topicName === gasSensorTopic) {
                    const reading = GasSensorReading.decode(payload);
                    addDataPoint(gasReadingsRef, setGasReadings, reading);
                }

                if (topicName === bmeSensorTopic) {
                    const reading = BmeSensorReading.decode(payload);
                    addDataPoint(bmeReadingsRef, setBmeReadings, reading);
                }

                if (topicName === photoTopic) {
                    const message = PhotoRequest.decode(payload);
                    const formattedMessage = {
                        deviceInfo: message.deviceInfo,
                        time: formatDate(message.timestamp?.seconds),
                        count: message.count
                    }
                    console.log("Photo request: ", formattedMessage);
                    fetchImage();
                }
            } catch (error) {
                console.error(error);
            }
        });
        isMessageHandlerRegistered = true;
    }, []);


    // const generateMockData = () => {
    //     const timestamp = Math.floor(Date.now() / 1000);
    //
    //     // Generate mock touch sensor reading every 5 seconds
    //     if (timestamp % 5 === 0) {
    //         const touchReading = {
    //             touchValue: Math.random() > 0.5 ? 2 : 1,
    //             timestamp: { seconds: timestamp }
    //         };
    //         addDataPoint(touchReadingsRef, setTouchReadings, touchReading);
    //     }
    //
    //     const gasBaseValue = 500;
    //     // Generate mock gas sensor reading with little variation
    //     const gasReading = {
    //         gasValue: gasBaseValue + Math.floor(Math.random() * 10 - 5), // Variation of ±5 around the base value
    //         timestamp: { seconds: timestamp }
    //     };
    //     addDataPoint(gasReadingsRef, setGasReadings, gasReading);
    //
    //     // Generate mock BME sensor reading
    //     const bmeReading = {
    //         temperatureValue: (Math.random() * 3 + 22).toFixed(2), // Temperature between 22 and 25
    //         pressureValue: (Math.random() * 50 + 950).toFixed(2),
    //         humidityValue: (Math.random() * 10 + 50).toFixed(2), // Humidity between 50 and 60
    //         timestamp: { seconds: timestamp }
    //     };
    //     addDataPoint(bmeReadingsRef, setBmeReadings, bmeReading);
    // };

    return (
        <>
            <div>
                <Dialog open={open} onClose={closePopup}>
                    <DialogTitle>Captured Image</DialogTitle>
                    <DialogContent>
                        <img src={imageSrc} alt="Captured" style={{maxWidth: '100%', maxHeight: '300px'}}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closePopup} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

            <h3>Sensor Readings (ESP8266 & ESP32)</h3>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <h4>Touch Sensor Readings (ESP8266)</h4>
                    <LineChart
                        width={800}
                        height={400}
                        data={touchReadingsRef.current}
                        margin={{top: 10, right: 30, left: 100, bottom: 10}}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis
                            dataKey="timestamp.seconds"
                            tickFormatter={formatDate}
                            interval="preserveEnd"
                        />
                        <YAxis
                            type="number"
                            domain={[1, 2]}
                            ticks={[1, 2]}
                            tickFormatter={(value) => (value === 2 ? 'HIGH' : 'LOW')}
                        />
                        <Tooltip
                            labelFormatter={formatTooltipLabel}
                            formatter={(value) => (value === 2 ? 'HIGH' : 'LOW')}
                        />
                        <Legend/>
                        <Line
                            type="monotone"
                            dataKey="touchValue"
                            stroke="#FF5733"
                            strokeWidth={2}
                            name="Touch Value (HIGH/LOW)"
                            isAnimationActive={false}
                        />
                    </LineChart>
                </div>
                <div>
                    <h4>Gas Sensor Readings (ESP8266)</h4>
                    <LineChart
                        width={800}
                        height={400}
                        data={gasReadingsRef.current}
                        margin={{top: 10, right: 100, left: 30, bottom: 10}}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis
                            dataKey="timestamp.seconds"
                            tickFormatter={formatDate}
                            interval="preserveEnd"
                            minTickGap={50}
                        />
                        <YAxis/>
                        <Tooltip labelFormatter={formatTooltipLabel}/>
                        <Legend/>
                        <Line
                            type="monotone"
                            dataKey="gasValue"
                            stroke="#33A1FF"
                            strokeWidth={2}
                            name="Gas Value (PPM)"
                            isAnimationActive={false}
                        />
                    </LineChart>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                <div>
                    <h4>BME680 Sensor Readings (ESP32)</h4>
                    <LineChart
                        width={1200}
                        height={500}
                        data={bmeReadingsRef.current}
                        margin={{top: 10, right: 30, left: 20, bottom: 10}}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis
                            dataKey="timestamp.seconds"
                            tickFormatter={formatDate}
                            interval="preserveEnd"
                            minTickGap={50}
                        />
                        <YAxis/>
                        <Tooltip labelFormatter={formatTooltipLabel}/>
                        <Legend/>
                        <Line
                            type="monotone"
                            dataKey="temperatureValue"
                            stroke="#FF5733"
                            strokeWidth={2}
                            name="Temperature (°C)"
                            isAnimationActive={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="pressureValue"
                            stroke="#33A1FF"
                            strokeWidth={2}
                            name="Pressure (hPa)"
                            isAnimationActive={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="humidityValue"
                            stroke="#82ca9d"
                            strokeWidth={2}
                            name="Humidity (%)"
                            isAnimationActive={false}
                        />
                    </LineChart>
                </div>
            </div>
        </>
    );
};


function subscribe(client: mqtt.MqttClient, topicName: string) {
    client.subscribe(topicName, (err) => {
        if (!err) {
            console.log(`Subscribed to ${topicName}`);
        } else {
            console.log(`Error when subscribing to ${topicName}`);
        }
    });
}

const formatDate = (seconds: number) => {
    return moment.unix(seconds).format('YYYY-MM-DD HH:mm:ss');
};

const formatTooltipLabel = (label: number) => {
    return moment.unix(label).format('YYYY-MM-DD HH:mm:ss');
};

export default App;