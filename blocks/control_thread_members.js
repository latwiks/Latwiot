module.exports = {
    name: "Control Thread Members",

    description: "Adds or Remove member(s) to a thread.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The channel to create the thread in.",
            "types": ["object", "unspecified"],
            "required": true
        },        
        {
            "id": "threadid",
            "name": "Thread",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The thread to control member(s) in.",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "members",
            "name": "Members",
            "description": "Acceptable Types: Text, List, Unspecified\n\nDescription: The member(s) to control in the thread.",
            "types": ["text", "list", "unspecified"],
            "required": true
        }
    ],

    options: [
        {
            "id": "addrem",
            "name": "Add or Remove members?",
            "description": "Description: Whether to add or remove a member.",
            "type": "SELECT",
            "options": {
                "add": "Add",
                "remove": "Remove",
            }
        }
    ],

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
        const members = this.GetInputValue("members", cache);
        const addrem = this.GetOptionValue("addrem", cache);
        const thread = channel.threads.cache.find(x => x.name === threadid);
        
        if(addrem === "add") {
            thread.members.add(members).then(thread => {
                this.RunNextBlock("action", cache);               
            });
        }

        else {
            thread.members.remove(members).then(() => {
                this.RunNextBlock("action", cache);               
            });
        };
    }
}