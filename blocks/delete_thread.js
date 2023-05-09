module.exports = {
    name: "Delete Thread",

    description: "Deletes a thread.",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "channel",
            "name": "Channel",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The channel the thread is in.",
            "types": ["object", "unspecified"],
            "required": true
        },        
        {
            "id": "threadid",
            "name": "Thread",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The thread to delete.",
            "types": ["object", "unspecified"],
            "required": true
        },        
        {
            "id": "reason",
            "name": "Reason",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The reason for deleting this thread. This will appear in Audit Log of the server.",
            "types": ["text", "unspecified"],
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
        const { PermissionsBitField, Permissions, ThreadAutoArchiveDuration, ChannelType, message } = require("discord.js");
        const threadid = this.GetInputValue("threadid", cache);
        const channel = this.GetInputValue("channel", cache);
        const thread = channel.threads.cache.find(x => x.name === threadid);
        const reason = this.GetInputValue("reason", cache);

        thread.delete(reason).then(() => {
            this.RunNextBlock("action", cache);               
        });
    }
}
