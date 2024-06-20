import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a DeviceInfo. */
export interface IDeviceInfo {

    /** DeviceInfo id */
    id?: (number|null);

    /** DeviceInfo name */
    name?: (string|null);
}

/** Represents a DeviceInfo. */
export class DeviceInfo implements IDeviceInfo {

    /**
     * Constructs a new DeviceInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceInfo);

    /** DeviceInfo id. */
    public id: number;

    /** DeviceInfo name. */
    public name: string;

    /**
     * Creates a new DeviceInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceInfo instance
     */
    public static create(properties?: IDeviceInfo): DeviceInfo;

    /**
     * Encodes the specified DeviceInfo message. Does not implicitly {@link DeviceInfo.verify|verify} messages.
     * @param message DeviceInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceInfo message, length delimited. Does not implicitly {@link DeviceInfo.verify|verify} messages.
     * @param message DeviceInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceInfo;

    /**
     * Decodes a DeviceInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceInfo;

    /**
     * Verifies a DeviceInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceInfo
     */
    public static fromObject(object: { [k: string]: any }): DeviceInfo;

    /**
     * Creates a plain object from a DeviceInfo message. Also converts values to other types if specified.
     * @param message DeviceInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DeviceInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** TouchValue enum. */
export enum TouchValue {
    NONE = 0,
    LOW = 1,
    HIGH = 2
}

/** Represents a TouchSensorReading. */
export class TouchSensorReading implements ITouchSensorReading {

    /**
     * Constructs a new TouchSensorReading.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITouchSensorReading);

    /** TouchSensorReading deviceInfo. */
    public deviceInfo?: (IDeviceInfo|null);

    /** TouchSensorReading timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** TouchSensorReading touchValue. */
    public touchValue: TouchValue;

    /**
     * Creates a new TouchSensorReading instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TouchSensorReading instance
     */
    public static create(properties?: ITouchSensorReading): TouchSensorReading;

    /**
     * Encodes the specified TouchSensorReading message. Does not implicitly {@link TouchSensorReading.verify|verify} messages.
     * @param message TouchSensorReading message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITouchSensorReading, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TouchSensorReading message, length delimited. Does not implicitly {@link TouchSensorReading.verify|verify} messages.
     * @param message TouchSensorReading message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITouchSensorReading, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TouchSensorReading message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TouchSensorReading
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TouchSensorReading;

    /**
     * Decodes a TouchSensorReading message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TouchSensorReading
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TouchSensorReading;

    /**
     * Verifies a TouchSensorReading message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TouchSensorReading message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TouchSensorReading
     */
    public static fromObject(object: { [k: string]: any }): TouchSensorReading;

    /**
     * Creates a plain object from a TouchSensorReading message. Also converts values to other types if specified.
     * @param message TouchSensorReading
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TouchSensorReading, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TouchSensorReading to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TouchSensorReading
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a GasSensorReading. */
export class GasSensorReading implements IGasSensorReading {

    /**
     * Constructs a new GasSensorReading.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGasSensorReading);

    /** GasSensorReading deviceInfo. */
    public deviceInfo?: (IDeviceInfo|null);

    /** GasSensorReading timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** GasSensorReading gasValue. */
    public gasValue: number;

    /**
     * Creates a new GasSensorReading instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GasSensorReading instance
     */
    public static create(properties?: IGasSensorReading): GasSensorReading;

    /**
     * Encodes the specified GasSensorReading message. Does not implicitly {@link GasSensorReading.verify|verify} messages.
     * @param message GasSensorReading message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGasSensorReading, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GasSensorReading message, length delimited. Does not implicitly {@link GasSensorReading.verify|verify} messages.
     * @param message GasSensorReading message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGasSensorReading, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GasSensorReading message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GasSensorReading
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GasSensorReading;

    /**
     * Decodes a GasSensorReading message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GasSensorReading
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GasSensorReading;

    /**
     * Verifies a GasSensorReading message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GasSensorReading message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GasSensorReading
     */
    public static fromObject(object: { [k: string]: any }): GasSensorReading;

    /**
     * Creates a plain object from a GasSensorReading message. Also converts values to other types if specified.
     * @param message GasSensorReading
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GasSensorReading, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GasSensorReading to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GasSensorReading
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BmeSensorReading. */
export class BmeSensorReading implements IBmeSensorReading {

    /**
     * Constructs a new BmeSensorReading.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBmeSensorReading);

    /** BmeSensorReading deviceInfo. */
    public deviceInfo?: (IDeviceInfo|null);

    /** BmeSensorReading timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** BmeSensorReading temperatureValue. */
    public temperatureValue: number;

    /** BmeSensorReading pressureValue. */
    public pressureValue: number;

    /** BmeSensorReading humidityValue. */
    public humidityValue: number;

    /**
     * Creates a new BmeSensorReading instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BmeSensorReading instance
     */
    public static create(properties?: IBmeSensorReading): BmeSensorReading;

    /**
     * Encodes the specified BmeSensorReading message. Does not implicitly {@link BmeSensorReading.verify|verify} messages.
     * @param message BmeSensorReading message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBmeSensorReading, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BmeSensorReading message, length delimited. Does not implicitly {@link BmeSensorReading.verify|verify} messages.
     * @param message BmeSensorReading message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBmeSensorReading, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BmeSensorReading message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BmeSensorReading
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BmeSensorReading;

    /**
     * Decodes a BmeSensorReading message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BmeSensorReading
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BmeSensorReading;

    /**
     * Verifies a BmeSensorReading message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BmeSensorReading message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BmeSensorReading
     */
    public static fromObject(object: { [k: string]: any }): BmeSensorReading;

    /**
     * Creates a plain object from a BmeSensorReading message. Also converts values to other types if specified.
     * @param message BmeSensorReading
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BmeSensorReading, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BmeSensorReading to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BmeSensorReading
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PhotoRequest. */
export class PhotoRequest implements IPhotoRequest {

    /**
     * Constructs a new PhotoRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPhotoRequest);

    /** PhotoRequest deviceInfo. */
    public deviceInfo?: (IDeviceInfo|null);

    /** PhotoRequest timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** PhotoRequest count. */
    public count: number;

    /**
     * Creates a new PhotoRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PhotoRequest instance
     */
    public static create(properties?: IPhotoRequest): PhotoRequest;

    /**
     * Encodes the specified PhotoRequest message. Does not implicitly {@link PhotoRequest.verify|verify} messages.
     * @param message PhotoRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPhotoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PhotoRequest message, length delimited. Does not implicitly {@link PhotoRequest.verify|verify} messages.
     * @param message PhotoRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPhotoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PhotoRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PhotoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PhotoRequest;

    /**
     * Decodes a PhotoRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PhotoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PhotoRequest;

    /**
     * Verifies a PhotoRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PhotoRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PhotoRequest
     */
    public static fromObject(object: { [k: string]: any }): PhotoRequest;

    /**
     * Creates a plain object from a PhotoRequest message. Also converts values to other types if specified.
     * @param message PhotoRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PhotoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PhotoRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PhotoRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
