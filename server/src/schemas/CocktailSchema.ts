export const COCKTAIL_CREATE_SCHEMA = {
    "type": "object",
    "properties": {
        "name": { "type": "string", "minLength": 3 },
        "recipe": { "type": "string", "minLength": 3 },
        "image": { "type": "string" },
        "ingredients": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "ingredient": { "type": "string" },
                    "amount": { "type": "number" },
                },
                "required": ["ingredient", "amount"]
            },
        }
    },
    "required": ["name", "recipe", "ingredients"]
};

export const COCKTAIL_UPDATE_SCHEMA ={
    "type": "object",
    "properties": {
        "id":{"type":"string"},
        "name": { "type": "string", "minLength": 3 },
        "recipe": { "type": "string", "minLength": 3 },
        "image": { "type": "string" },
        "ingredients": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "ingredient": { "type": "string" },
                    "amount": { "type": "number" },
                },
                "required": ["ingredient", "amount"]
            },
        }
    },
    "required": ["id","name", "recipe", "ingredients"]
}