export const CATEGORY_CREATE_SCHEMA = {
    "type": "object",
    "properties": {
        "name": { "type": "string", "minLength": 3 },
    },
    "required": ["name"]
};

export const CATEGORY_UPDATE_SCHEMA = {
    "type": "object",
    "properties": {
        "id": { "type": "string" },
        "name": { "type": "string", "minLength": 3 },
    },
    "required": ["id", "name"]
}