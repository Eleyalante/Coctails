export const SETTINGS_CREATE_SCHEMA = {
    "type": "object",
    "properties": {
        "appName": { "type": "string", "minLength": 3 },
        "color":{"type":"string", "minLength": 7, "maxLength":7},
        "image": {"type":"string"},
    },
    "required": ["appName","color"]
};

export const SETTINGS_UPDATE_SCHEMA = {
    "type": "object",
    "properties": {
        "id": { "type": "string" },
        "appName": { "type": "string", "minLength": 3 },
        "color":{"type":"string", "minLength": 7, "maxLength":7},
        "image": {"type":"string"},
    },
    "required": ["id", "appName","color"]
}