module.exports = {
    name: "Send Message (Component)",

    description: "Sends a message with a button or menu. This Block is made by @JU & @EXCORDO, fixed by Beastlybear2017",

    category: "Component Stuff",

    async init(DBB){
        const disbut = await DBB.Core.require('discord-buttons-fixed');
        disbut(DBB.DiscordJS.client);
    },

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The text channel or DM channel to send this message.",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "text",
            "name": "Text",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The text to put in the message. (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
        {
            "id": "embed",
            "name": "Embed",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The embed to put in the message. (OPTIONAL)",
            "types": ["object", "list", "unspecified"]
        },
        {
            "id": "attachment",
            "name": "Attachment",
            "description": "Acceptable Types: Object, Text, Unspecified\n\nDescription: The attachment to put in the message. Supports Image, file path and URL. (OPTIONAL)",
            "types": ["object", "text", "unspecified"]
        },
        {
            "id": "buttons",
            "name": "Component",
            "description": "Acceptable Types: List, Object, Unspecified\n\nDescription: To add Buttons to the Message. (OPTIONAL)\nCan be a single menu, singel button, a single Button ROW (use Block to convert) or Multiple Button Rows (a List of ButtonRows)",
            "types": ["object", "list", "unspecified"]
        },
        {
            "id": "split_message",
            "name": "Split Message",
            "description": "Acceptable Types: Boolean, Unspecified\n\nDescription: Whether to split the message text into multiple messages if it exceeds the characters limit (2000). (OPTIONAL)",
            "types": ["boolean", "unspecified"]
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
            "id": "message",
            "name": "Message",
            "description": "Type: Object, List\n\nDescription: The message obtained. If \"Split Message\" is enabled, this will return a list containing all message objects instead of a single one.",
            "types": ["object", "list"]
        },
        {
            "id": "error",
            "name": "Error",
            "description": "Type: Object, List\n\nDescription: Error.",
            "types": ["text"]
        }
    ],

    code(cache) {
        const channel = this.GetInputValue("channel", cache);
        const text = this.GetInputValue("text", cache);
        const embed = this.GetInputValue("embed", cache);
		const buttons = this.GetInputValue("buttons", cache);
        const attachment = this.GetInputValue("attachment", cache);
        const split_message = Boolean(this.GetInputValue("split_message", cache));

        channel.send(text, {
            embed,
            ...(Array.isArray(buttons) ? {components: buttons} : {component: buttons}),
            files: attachment ? [attachment] : null,
            split: split_message ? {char: ""} : false
        }).then(msg => {
            this.StoreOutputValue(split_message ? (Array.isArray(msg) ? msg : [msg]) : msg, "message", cache);
            this.RunNextBlock("action", cache);
        }).catch(error => {
            this.StoreOutputValue(error.message, "error", cache);
            this.RunNextBlock("action", cache);
        });
    }
}