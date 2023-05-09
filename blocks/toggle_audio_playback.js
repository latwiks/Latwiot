module.exports = {
    name: "Toggle Audio Playback",

    description: "Toggles the bot audio (Play/Pause) depending on if audio is playing or not.",

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
        }
    ],

    code(cache) {
        const server = this.GetInputValue("server", cache);
        const voice = server.voice;
        const connection = voice && voice.connection;
        const dispatcher = connection && connection.dispatcher;
        const result = dispatcher && dispatcher.paused;

            if (result == true) { 
                dispatcher.resume();
                
            }else if (result == false) {
                dispatcher.pause();
                dispatcher.resume();
                dispatcher.pause();
            }
            
        this.RunNextBlock("action", cache);
     }          
}