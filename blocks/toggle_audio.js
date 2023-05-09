module.exports = {
    name: "Toggle Audio",

    description: "Toggles the audio (Play/Pause).",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "server",
            "name": "Server",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The server to control the bot audio.",
            "types": ["object", "unspecified"],
            "required": true
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
            "id": "error",
            "name": "Error",
            "description": "Type: Object, List\n\nDescription: Error.",
            "types": ["text"]
        }
    ],

    code(cache) {
        const server = this.GetInputValue("server", cache);
        const voice = server.voice;
        const dispatcher = voice.connection.dispatcher;
        const result = dispatcher.paused;

        console.log(result)

            if (result == True) { 
                dispatcher.resume();
                
            }else if (result == False) {
                dispatcher.pause();               
            }

        this.StoreOutputValue(error.message, "error", cache);
        this.RunNextBlock("action", cache);
     }          
}