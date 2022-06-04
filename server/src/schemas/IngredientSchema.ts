export const INGREDIENT_CREATE_SCHEMA = {
    "type": "object",
    "properties": {
        "name": { "type": "string", "minLength": 3 },
        "unit": { "type": "string", "minLength": 1 },
        "image": { "type": "string" },
    },
    "required": ["name", "unit"]
};

export const INGREDIENT_UPDATE_SCHEMA = {
    "type": "object",
    "properties": {
        "id": { "type": "string" },
        "name": { "type": "string", "minLength": 3 },
        "unit": { "type": "string", "minLength": 1 },
        "image": { "type": "string" },
    },
    "required": ["id", "name", "unit"]
}