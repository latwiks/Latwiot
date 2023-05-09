module.exports = {
    name: "Create Thread",

    description: "Creates a new thread.",

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
            "id": "threadname",
            "name": "Thread Name",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The name for this thread.",
            "types": ["text", "unspecified"],
            "required": true
        },        
        {
            "id": "reason",
            "name": "Reason",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The reason for creating this thread. This will appear in Audit Log of the server.",
            "types": ["text", "unspecified"],
        }
    ],

    options: [
        {
            "id": "thread_type",
            "name": "Thread Type",
            "description": "Description: The type of thread to create.",
            "type": "SELECT",
            "options": {
                "private": "Private",
                "public": "Public",
            }
        },
        {
            "id": "archive_time",
            "name": "Archive Time",
            "description": "Description: The time before the thread is automatically archived",
            "type": "SELECT",
            "options": {
                "60": "1 Hour",
                "1440": "1 Day",
                "4320": "3 Days",
                "10080": "1 Week"
            }
        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "thread",
            "name": "Thread",
            "description": "Type: Object\n\nDescription: This thread created.",
            "types": ["object"]
        }
    ],

    code(cache) {
        const { PermissionsBitField, Permissions, ThreadAutoArchiveDuration, ChannelType, message } = require("discord.js");
        const channel = this.GetInputValue("channel", cache);
        const name = this.GetInputValue("threadname", cache);
        const reason = this.GetInputValue("reason", cache);
        const thread_types = this.GetOptionValue("thread_type", cache);
        const autoArchiveDuration = this.GetOptionValue("archive_time", cache);
        let data

        if (thread_types === "private"){ 
            const { ChannelType } = require("discord.js");

            data = {
            name: name,
            autoArchiveDuration: autoArchiveDuration,
            type: ChannelType.PrivateThread,
            reason: reason,
            };
        }

        else { data = {
            name: name,
            autoArchiveDuration: autoArchiveDuration,
            reason: reason,
            };
        };

        channel.threads.create(data).then(thread => {
            this.StoreOutputValue(thread.id, "thread", cache);
            this.RunNextBlock("action", cache);                             
        });
    }
}