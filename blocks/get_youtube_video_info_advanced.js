module.exports = {
    name: "Get YouTube Video Info (Advanced)",

    description: "Gets the YouTube video information.",

    category: "Internet Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "search_value",
            "name": "Search Value",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The value to search for the video.",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "result_number",
            "name": "Result Number",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The number of the resulting video. Starts at \"1\". Default: \"1\". (OPTIONAL)",
            "types": ["number", "unspecified"]
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "result",
            "name": "Result",
            "description": "Type: Unspecified\n\nDescription: The information obtained from the YouTube video.",
            "types": ["unspecified"]
        }
    ],

    async code(cache) {
        const search_value = this.GetInputValue("search_value", cache) + "";
        const result_number = parseInt(this.GetInputValue("result_number", cache, false, 1));

        const ytsr = await this.require("ytsr");

        const res = await ytsr(search_value, {limit: result_number});

        this.StoreOutputValue(res, "result", cache);
        this.RunNextBlock("action", cache);
    }
}