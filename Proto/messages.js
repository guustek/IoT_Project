/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const DeviceInfo = $root.DeviceInfo = (() => {

    /**
     * Properties of a DeviceInfo.
     * @exports IDeviceInfo
     * @interface IDeviceInfo
     * @property {number|null} [id] DeviceInfo id
     * @property {string|null} [name] DeviceInfo name
     */

    /**
     * Constructs a new DeviceInfo.
     * @exports DeviceInfo
     * @classdesc Represents a DeviceInfo.
     * @implements IDeviceInfo
     * @constructor
     * @param {IDeviceInfo=} [properties] Properties to set
     */
    function DeviceInfo(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeviceInfo id.
     * @member {number} id
     * @memberof DeviceInfo
     * @instance
     */
    DeviceInfo.prototype.id = 0;

    /**
     * DeviceInfo name.
     * @member {string} name
     * @memberof DeviceInfo
     * @instance
     */
    DeviceInfo.prototype.name = "";

    /**
     * Creates a new DeviceInfo instance using the specified properties.
     * @function create
     * @memberof DeviceInfo
     * @static
     * @param {IDeviceInfo=} [properties] Properties to set
     * @returns {DeviceInfo} DeviceInfo instance
     */
    DeviceInfo.create = function create(properties) {
        return new DeviceInfo(properties);
    };

    /**
     * Encodes the specified DeviceInfo message. Does not implicitly {@link DeviceInfo.verify|verify} messages.
     * @function encode
     * @memberof DeviceInfo
     * @static
     * @param {IDeviceInfo} message DeviceInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified DeviceInfo message, length delimited. Does not implicitly {@link DeviceInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeviceInfo
     * @static
     * @param {IDeviceInfo} message DeviceInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeviceInfo message from the specified reader or buffer.
     * @function decode
     * @memberof DeviceInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeviceInfo} DeviceInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceInfo();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int32();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeviceInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeviceInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeviceInfo} DeviceInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeviceInfo message.
     * @function verify
     * @memberof DeviceInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeviceInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a DeviceInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeviceInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeviceInfo} DeviceInfo
     */
    DeviceInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.DeviceInfo)
            return object;
        let message = new $root.DeviceInfo();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a DeviceInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeviceInfo
     * @static
     * @param {DeviceInfo} message DeviceInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeviceInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.id = 0;
            object.name = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this DeviceInfo to JSON.
     * @function toJSON
     * @memberof DeviceInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeviceInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DeviceInfo
     * @function getTypeUrl
     * @memberof DeviceInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DeviceInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DeviceInfo";
    };

    return DeviceInfo;
})();

/**
 * TouchValue enum.
 * @exports TouchValue
 * @enum {number}
 * @property {number} NONE=0 NONE value
 * @property {number} LOW=1 LOW value
 * @property {number} HIGH=2 HIGH value
 */
export const TouchValue = $root.TouchValue = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NONE"] = 0;
    values[valuesById[1] = "LOW"] = 1;
    values[valuesById[2] = "HIGH"] = 2;
    return values;
})();

export const TouchSensorReading = $root.TouchSensorReading = (() => {

    /**
     * Properties of a TouchSensorReading.
     * @exports ITouchSensorReading
     * @interface ITouchSensorReading
     * @property {IDeviceInfo|null} [deviceInfo] TouchSensorReading deviceInfo
     * @property {google.protobuf.ITimestamp|null} [timestamp] TouchSensorReading timestamp
     * @property {TouchValue|null} [touchValue] TouchSensorReading touchValue
     */

    /**
     * Constructs a new TouchSensorReading.
     * @exports TouchSensorReading
     * @classdesc Represents a TouchSensorReading.
     * @implements ITouchSensorReading
     * @constructor
     * @param {ITouchSensorReading=} [properties] Properties to set
     */
    function TouchSensorReading(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TouchSensorReading deviceInfo.
     * @member {IDeviceInfo|null|undefined} deviceInfo
     * @memberof TouchSensorReading
     * @instance
     */
    TouchSensorReading.prototype.deviceInfo = null;

    /**
     * TouchSensorReading timestamp.
     * @member {google.protobuf.ITimestamp|null|undefined} timestamp
     * @memberof TouchSensorReading
     * @instance
     */
    TouchSensorReading.prototype.timestamp = null;

    /**
     * TouchSensorReading touchValue.
     * @member {TouchValue} touchValue
     * @memberof TouchSensorReading
     * @instance
     */
    TouchSensorReading.prototype.touchValue = 0;

    /**
     * Creates a new TouchSensorReading instance using the specified properties.
     * @function create
     * @memberof TouchSensorReading
     * @static
     * @param {ITouchSensorReading=} [properties] Properties to set
     * @returns {TouchSensorReading} TouchSensorReading instance
     */
    TouchSensorReading.create = function create(properties) {
        return new TouchSensorReading(properties);
    };

    /**
     * Encodes the specified TouchSensorReading message. Does not implicitly {@link TouchSensorReading.verify|verify} messages.
     * @function encode
     * @memberof TouchSensorReading
     * @static
     * @param {ITouchSensorReading} message TouchSensorReading message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TouchSensorReading.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceInfo != null && Object.hasOwnProperty.call(message, "deviceInfo"))
            $root.DeviceInfo.encode(message.deviceInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.touchValue != null && Object.hasOwnProperty.call(message, "touchValue"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.touchValue);
        return writer;
    };

    /**
     * Encodes the specified TouchSensorReading message, length delimited. Does not implicitly {@link TouchSensorReading.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TouchSensorReading
     * @static
     * @param {ITouchSensorReading} message TouchSensorReading message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TouchSensorReading.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TouchSensorReading message from the specified reader or buffer.
     * @function decode
     * @memberof TouchSensorReading
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TouchSensorReading} TouchSensorReading
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TouchSensorReading.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TouchSensorReading();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.deviceInfo = $root.DeviceInfo.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.touchValue = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TouchSensorReading message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TouchSensorReading
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TouchSensorReading} TouchSensorReading
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TouchSensorReading.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TouchSensorReading message.
     * @function verify
     * @memberof TouchSensorReading
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TouchSensorReading.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deviceInfo != null && message.hasOwnProperty("deviceInfo")) {
            let error = $root.DeviceInfo.verify(message.deviceInfo);
            if (error)
                return "deviceInfo." + error;
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
            let error = $root.google.protobuf.Timestamp.verify(message.timestamp);
            if (error)
                return "timestamp." + error;
        }
        if (message.touchValue != null && message.hasOwnProperty("touchValue"))
            switch (message.touchValue) {
            default:
                return "touchValue: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        return null;
    };

    /**
     * Creates a TouchSensorReading message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TouchSensorReading
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TouchSensorReading} TouchSensorReading
     */
    TouchSensorReading.fromObject = function fromObject(object) {
        if (object instanceof $root.TouchSensorReading)
            return object;
        let message = new $root.TouchSensorReading();
        if (object.deviceInfo != null) {
            if (typeof object.deviceInfo !== "object")
                throw TypeError(".TouchSensorReading.deviceInfo: object expected");
            message.deviceInfo = $root.DeviceInfo.fromObject(object.deviceInfo);
        }
        if (object.timestamp != null) {
            if (typeof object.timestamp !== "object")
                throw TypeError(".TouchSensorReading.timestamp: object expected");
            message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
        }
        switch (object.touchValue) {
        default:
            if (typeof object.touchValue === "number") {
                message.touchValue = object.touchValue;
                break;
            }
            break;
        case "NONE":
        case 0:
            message.touchValue = 0;
            break;
        case "LOW":
        case 1:
            message.touchValue = 1;
            break;
        case "HIGH":
        case 2:
            message.touchValue = 2;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a TouchSensorReading message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TouchSensorReading
     * @static
     * @param {TouchSensorReading} message TouchSensorReading
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TouchSensorReading.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.deviceInfo = null;
            object.timestamp = null;
            object.touchValue = options.enums === String ? "NONE" : 0;
        }
        if (message.deviceInfo != null && message.hasOwnProperty("deviceInfo"))
            object.deviceInfo = $root.DeviceInfo.toObject(message.deviceInfo, options);
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
        if (message.touchValue != null && message.hasOwnProperty("touchValue"))
            object.touchValue = options.enums === String ? $root.TouchValue[message.touchValue] === undefined ? message.touchValue : $root.TouchValue[message.touchValue] : message.touchValue;
        return object;
    };

    /**
     * Converts this TouchSensorReading to JSON.
     * @function toJSON
     * @memberof TouchSensorReading
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TouchSensorReading.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TouchSensorReading
     * @function getTypeUrl
     * @memberof TouchSensorReading
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TouchSensorReading.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TouchSensorReading";
    };

    return TouchSensorReading;
})();

export const GasSensorReading = $root.GasSensorReading = (() => {

    /**
     * Properties of a GasSensorReading.
     * @exports IGasSensorReading
     * @interface IGasSensorReading
     * @property {IDeviceInfo|null} [deviceInfo] GasSensorReading deviceInfo
     * @property {google.protobuf.ITimestamp|null} [timestamp] GasSensorReading timestamp
     * @property {number|null} [gasValue] GasSensorReading gasValue
     */

    /**
     * Constructs a new GasSensorReading.
     * @exports GasSensorReading
     * @classdesc Represents a GasSensorReading.
     * @implements IGasSensorReading
     * @constructor
     * @param {IGasSensorReading=} [properties] Properties to set
     */
    function GasSensorReading(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GasSensorReading deviceInfo.
     * @member {IDeviceInfo|null|undefined} deviceInfo
     * @memberof GasSensorReading
     * @instance
     */
    GasSensorReading.prototype.deviceInfo = null;

    /**
     * GasSensorReading timestamp.
     * @member {google.protobuf.ITimestamp|null|undefined} timestamp
     * @memberof GasSensorReading
     * @instance
     */
    GasSensorReading.prototype.timestamp = null;

    /**
     * GasSensorReading gasValue.
     * @member {number} gasValue
     * @memberof GasSensorReading
     * @instance
     */
    GasSensorReading.prototype.gasValue = 0;

    /**
     * Creates a new GasSensorReading instance using the specified properties.
     * @function create
     * @memberof GasSensorReading
     * @static
     * @param {IGasSensorReading=} [properties] Properties to set
     * @returns {GasSensorReading} GasSensorReading instance
     */
    GasSensorReading.create = function create(properties) {
        return new GasSensorReading(properties);
    };

    /**
     * Encodes the specified GasSensorReading message. Does not implicitly {@link GasSensorReading.verify|verify} messages.
     * @function encode
     * @memberof GasSensorReading
     * @static
     * @param {IGasSensorReading} message GasSensorReading message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GasSensorReading.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceInfo != null && Object.hasOwnProperty.call(message, "deviceInfo"))
            $root.DeviceInfo.encode(message.deviceInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.gasValue != null && Object.hasOwnProperty.call(message, "gasValue"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gasValue);
        return writer;
    };

    /**
     * Encodes the specified GasSensorReading message, length delimited. Does not implicitly {@link GasSensorReading.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GasSensorReading
     * @static
     * @param {IGasSensorReading} message GasSensorReading message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GasSensorReading.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GasSensorReading message from the specified reader or buffer.
     * @function decode
     * @memberof GasSensorReading
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GasSensorReading} GasSensorReading
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GasSensorReading.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GasSensorReading();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.deviceInfo = $root.DeviceInfo.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.gasValue = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GasSensorReading message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GasSensorReading
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GasSensorReading} GasSensorReading
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GasSensorReading.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GasSensorReading message.
     * @function verify
     * @memberof GasSensorReading
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GasSensorReading.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deviceInfo != null && message.hasOwnProperty("deviceInfo")) {
            let error = $root.DeviceInfo.verify(message.deviceInfo);
            if (error)
                return "deviceInfo." + error;
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
            let error = $root.google.protobuf.Timestamp.verify(message.timestamp);
            if (error)
                return "timestamp." + error;
        }
        if (message.gasValue != null && message.hasOwnProperty("gasValue"))
            if (!$util.isInteger(message.gasValue))
                return "gasValue: integer expected";
        return null;
    };

    /**
     * Creates a GasSensorReading message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GasSensorReading
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GasSensorReading} GasSensorReading
     */
    GasSensorReading.fromObject = function fromObject(object) {
        if (object instanceof $root.GasSensorReading)
            return object;
        let message = new $root.GasSensorReading();
        if (object.deviceInfo != null) {
            if (typeof object.deviceInfo !== "object")
                throw TypeError(".GasSensorReading.deviceInfo: object expected");
            message.deviceInfo = $root.DeviceInfo.fromObject(object.deviceInfo);
        }
        if (object.timestamp != null) {
            if (typeof object.timestamp !== "object")
                throw TypeError(".GasSensorReading.timestamp: object expected");
            message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
        }
        if (object.gasValue != null)
            message.gasValue = object.gasValue | 0;
        return message;
    };

    /**
     * Creates a plain object from a GasSensorReading message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GasSensorReading
     * @static
     * @param {GasSensorReading} message GasSensorReading
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GasSensorReading.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.deviceInfo = null;
            object.timestamp = null;
            object.gasValue = 0;
        }
        if (message.deviceInfo != null && message.hasOwnProperty("deviceInfo"))
            object.deviceInfo = $root.DeviceInfo.toObject(message.deviceInfo, options);
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
        if (message.gasValue != null && message.hasOwnProperty("gasValue"))
            object.gasValue = message.gasValue;
        return object;
    };

    /**
     * Converts this GasSensorReading to JSON.
     * @function toJSON
     * @memberof GasSensorReading
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GasSensorReading.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GasSensorReading
     * @function getTypeUrl
     * @memberof GasSensorReading
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GasSensorReading.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GasSensorReading";
    };

    return GasSensorReading;
})();

export const BmeSensorReading = $root.BmeSensorReading = (() => {

    /**
     * Properties of a BmeSensorReading.
     * @exports IBmeSensorReading
     * @interface IBmeSensorReading
     * @property {IDeviceInfo|null} [deviceInfo] BmeSensorReading deviceInfo
     * @property {google.protobuf.ITimestamp|null} [timestamp] BmeSensorReading timestamp
     * @property {number|null} [temperatureValue] BmeSensorReading temperatureValue
     * @property {number|null} [pressureValue] BmeSensorReading pressureValue
     * @property {number|null} [humidityValue] BmeSensorReading humidityValue
     */

    /**
     * Constructs a new BmeSensorReading.
     * @exports BmeSensorReading
     * @classdesc Represents a BmeSensorReading.
     * @implements IBmeSensorReading
     * @constructor
     * @param {IBmeSensorReading=} [properties] Properties to set
     */
    function BmeSensorReading(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BmeSensorReading deviceInfo.
     * @member {IDeviceInfo|null|undefined} deviceInfo
     * @memberof BmeSensorReading
     * @instance
     */
    BmeSensorReading.prototype.deviceInfo = null;

    /**
     * BmeSensorReading timestamp.
     * @member {google.protobuf.ITimestamp|null|undefined} timestamp
     * @memberof BmeSensorReading
     * @instance
     */
    BmeSensorReading.prototype.timestamp = null;

    /**
     * BmeSensorReading temperatureValue.
     * @member {number} temperatureValue
     * @memberof BmeSensorReading
     * @instance
     */
    BmeSensorReading.prototype.temperatureValue = 0;

    /**
     * BmeSensorReading pressureValue.
     * @member {number} pressureValue
     * @memberof BmeSensorReading
     * @instance
     */
    BmeSensorReading.prototype.pressureValue = 0;

    /**
     * BmeSensorReading humidityValue.
     * @member {number} humidityValue
     * @memberof BmeSensorReading
     * @instance
     */
    BmeSensorReading.prototype.humidityValue = 0;

    /**
     * Creates a new BmeSensorReading instance using the specified properties.
     * @function create
     * @memberof BmeSensorReading
     * @static
     * @param {IBmeSensorReading=} [properties] Properties to set
     * @returns {BmeSensorReading} BmeSensorReading instance
     */
    BmeSensorReading.create = function create(properties) {
        return new BmeSensorReading(properties);
    };

    /**
     * Encodes the specified BmeSensorReading message. Does not implicitly {@link BmeSensorReading.verify|verify} messages.
     * @function encode
     * @memberof BmeSensorReading
     * @static
     * @param {IBmeSensorReading} message BmeSensorReading message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BmeSensorReading.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceInfo != null && Object.hasOwnProperty.call(message, "deviceInfo"))
            $root.DeviceInfo.encode(message.deviceInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.temperatureValue != null && Object.hasOwnProperty.call(message, "temperatureValue"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.temperatureValue);
        if (message.pressureValue != null && Object.hasOwnProperty.call(message, "pressureValue"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.pressureValue);
        if (message.humidityValue != null && Object.hasOwnProperty.call(message, "humidityValue"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.humidityValue);
        return writer;
    };

    /**
     * Encodes the specified BmeSensorReading message, length delimited. Does not implicitly {@link BmeSensorReading.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BmeSensorReading
     * @static
     * @param {IBmeSensorReading} message BmeSensorReading message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BmeSensorReading.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BmeSensorReading message from the specified reader or buffer.
     * @function decode
     * @memberof BmeSensorReading
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BmeSensorReading} BmeSensorReading
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BmeSensorReading.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BmeSensorReading();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.deviceInfo = $root.DeviceInfo.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.temperatureValue = reader.int32();
                    break;
                }
            case 4: {
                    message.pressureValue = reader.uint32();
                    break;
                }
            case 5: {
                    message.humidityValue = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BmeSensorReading message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BmeSensorReading
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BmeSensorReading} BmeSensorReading
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BmeSensorReading.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BmeSensorReading message.
     * @function verify
     * @memberof BmeSensorReading
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BmeSensorReading.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deviceInfo != null && message.hasOwnProperty("deviceInfo")) {
            let error = $root.DeviceInfo.verify(message.deviceInfo);
            if (error)
                return "deviceInfo." + error;
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
            let error = $root.google.protobuf.Timestamp.verify(message.timestamp);
            if (error)
                return "timestamp." + error;
        }
        if (message.temperatureValue != null && message.hasOwnProperty("temperatureValue"))
            if (!$util.isInteger(message.temperatureValue))
                return "temperatureValue: integer expected";
        if (message.pressureValue != null && message.hasOwnProperty("pressureValue"))
            if (!$util.isInteger(message.pressureValue))
                return "pressureValue: integer expected";
        if (message.humidityValue != null && message.hasOwnProperty("humidityValue"))
            if (!$util.isInteger(message.humidityValue))
                return "humidityValue: integer expected";
        return null;
    };

    /**
     * Creates a BmeSensorReading message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BmeSensorReading
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BmeSensorReading} BmeSensorReading
     */
    BmeSensorReading.fromObject = function fromObject(object) {
        if (object instanceof $root.BmeSensorReading)
            return object;
        let message = new $root.BmeSensorReading();
        if (object.deviceInfo != null) {
            if (typeof object.deviceInfo !== "object")
                throw TypeError(".BmeSensorReading.deviceInfo: object expected");
            message.deviceInfo = $root.DeviceInfo.fromObject(object.deviceInfo);
        }
        if (object.timestamp != null) {
            if (typeof object.timestamp !== "object")
                throw TypeError(".BmeSensorReading.timestamp: object expected");
            message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
        }
        if (object.temperatureValue != null)
            message.temperatureValue = object.temperatureValue | 0;
        if (object.pressureValue != null)
            message.pressureValue = object.pressureValue >>> 0;
        if (object.humidityValue != null)
            message.humidityValue = object.humidityValue | 0;
        return message;
    };

    /**
     * Creates a plain object from a BmeSensorReading message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BmeSensorReading
     * @static
     * @param {BmeSensorReading} message BmeSensorReading
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BmeSensorReading.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.deviceInfo = null;
            object.timestamp = null;
            object.temperatureValue = 0;
            object.pressureValue = 0;
            object.humidityValue = 0;
        }
        if (message.deviceInfo != null && message.hasOwnProperty("deviceInfo"))
            object.deviceInfo = $root.DeviceInfo.toObject(message.deviceInfo, options);
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
        if (message.temperatureValue != null && message.hasOwnProperty("temperatureValue"))
            object.temperatureValue = message.temperatureValue;
        if (message.pressureValue != null && message.hasOwnProperty("pressureValue"))
            object.pressureValue = message.pressureValue;
        if (message.humidityValue != null && message.hasOwnProperty("humidityValue"))
            object.humidityValue = message.humidityValue;
        return object;
    };

    /**
     * Converts this BmeSensorReading to JSON.
     * @function toJSON
     * @memberof BmeSensorReading
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BmeSensorReading.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for BmeSensorReading
     * @function getTypeUrl
     * @memberof BmeSensorReading
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    BmeSensorReading.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/BmeSensorReading";
    };

    return BmeSensorReading;
})();

export const PhotoRequest = $root.PhotoRequest = (() => {

    /**
     * Properties of a PhotoRequest.
     * @exports IPhotoRequest
     * @interface IPhotoRequest
     * @property {IDeviceInfo|null} [deviceInfo] PhotoRequest deviceInfo
     * @property {google.protobuf.ITimestamp|null} [timestamp] PhotoRequest timestamp
     * @property {number|null} [count] PhotoRequest count
     */

    /**
     * Constructs a new PhotoRequest.
     * @exports PhotoRequest
     * @classdesc Represents a PhotoRequest.
     * @implements IPhotoRequest
     * @constructor
     * @param {IPhotoRequest=} [properties] Properties to set
     */
    function PhotoRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PhotoRequest deviceInfo.
     * @member {IDeviceInfo|null|undefined} deviceInfo
     * @memberof PhotoRequest
     * @instance
     */
    PhotoRequest.prototype.deviceInfo = null;

    /**
     * PhotoRequest timestamp.
     * @member {google.protobuf.ITimestamp|null|undefined} timestamp
     * @memberof PhotoRequest
     * @instance
     */
    PhotoRequest.prototype.timestamp = null;

    /**
     * PhotoRequest count.
     * @member {number} count
     * @memberof PhotoRequest
     * @instance
     */
    PhotoRequest.prototype.count = 0;

    /**
     * Creates a new PhotoRequest instance using the specified properties.
     * @function create
     * @memberof PhotoRequest
     * @static
     * @param {IPhotoRequest=} [properties] Properties to set
     * @returns {PhotoRequest} PhotoRequest instance
     */
    PhotoRequest.create = function create(properties) {
        return new PhotoRequest(properties);
    };

    /**
     * Encodes the specified PhotoRequest message. Does not implicitly {@link PhotoRequest.verify|verify} messages.
     * @function encode
     * @memberof PhotoRequest
     * @static
     * @param {IPhotoRequest} message PhotoRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PhotoRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceInfo != null && Object.hasOwnProperty.call(message, "deviceInfo"))
            $root.DeviceInfo.encode(message.deviceInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.count);
        return writer;
    };

    /**
     * Encodes the specified PhotoRequest message, length delimited. Does not implicitly {@link PhotoRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PhotoRequest
     * @static
     * @param {IPhotoRequest} message PhotoRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PhotoRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PhotoRequest message from the specified reader or buffer.
     * @function decode
     * @memberof PhotoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PhotoRequest} PhotoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PhotoRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PhotoRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.deviceInfo = $root.DeviceInfo.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.count = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PhotoRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PhotoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PhotoRequest} PhotoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PhotoRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PhotoRequest message.
     * @function verify
     * @memberof PhotoRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PhotoRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deviceInfo != null && message.hasOwnProperty("deviceInfo")) {
            let error = $root.DeviceInfo.verify(message.deviceInfo);
            if (error)
                return "deviceInfo." + error;
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
            let error = $root.google.protobuf.Timestamp.verify(message.timestamp);
            if (error)
                return "timestamp." + error;
        }
        if (message.count != null && message.hasOwnProperty("count"))
            if (!$util.isInteger(message.count))
                return "count: integer expected";
        return null;
    };

    /**
     * Creates a PhotoRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PhotoRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PhotoRequest} PhotoRequest
     */
    PhotoRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.PhotoRequest)
            return object;
        let message = new $root.PhotoRequest();
        if (object.deviceInfo != null) {
            if (typeof object.deviceInfo !== "object")
                throw TypeError(".PhotoRequest.deviceInfo: object expected");
            message.deviceInfo = $root.DeviceInfo.fromObject(object.deviceInfo);
        }
        if (object.timestamp != null) {
            if (typeof object.timestamp !== "object")
                throw TypeError(".PhotoRequest.timestamp: object expected");
            message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
        }
        if (object.count != null)
            message.count = object.count | 0;
        return message;
    };

    /**
     * Creates a plain object from a PhotoRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PhotoRequest
     * @static
     * @param {PhotoRequest} message PhotoRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PhotoRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.deviceInfo = null;
            object.timestamp = null;
            object.count = 0;
        }
        if (message.deviceInfo != null && message.hasOwnProperty("deviceInfo"))
            object.deviceInfo = $root.DeviceInfo.toObject(message.deviceInfo, options);
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
        if (message.count != null && message.hasOwnProperty("count"))
            object.count = message.count;
        return object;
    };

    /**
     * Converts this PhotoRequest to JSON.
     * @function toJSON
     * @memberof PhotoRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PhotoRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PhotoRequest
     * @function getTypeUrl
     * @memberof PhotoRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PhotoRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PhotoRequest";
    };

    return PhotoRequest;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
