module.exports = {
    name: "Number 2x",

    description: "Creates 2 numbers to use in your blocks.",

    category: "Inputs",

    auto_execute: true,

    inputs: [],

    options: [
        {
            "id": "number1",
            "name": "Number 1",
            "description": "Description: The number to set.",
            "type": "NUMBER"
        },
        {
            "id": "number2",
            "name": "Number 2",
            "description": "Description: The number to set.",
            "type": "NUMBER"
        }
    ],

    outputs: [
        {
            "id": "number1",
            "name": "Number 1",
            "description": "Type: Number\n\nDescription: The number.",
            "types": ["number"]
        },
        {
            "id": "number2",
            "name": "Number 2",
            "description": "Type: Number\n\nDescription: The number.",
            "types": ["number"]
        }
    ],

    code(cache) {
        this.StoreOutputValue(parseFloat(this.GetOptionValue("number1", cache)), "number1", cache, "inputBlock");
        this.StoreOutputValue(parseFloat(this.GetOptionValue("number2", cache)), "number2", cache, "inputBlock");
    }
}