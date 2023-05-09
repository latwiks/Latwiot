module.exports = {
    name: "Run JavaScript Code MOD1",

    description: "Runs a JavaScript Code.",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "javascript_code",
            "name": "JavaScript Code",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The JavaScript code to run.",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "value1",
            "name": "Value 1",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The value 1 to use inside the code. (OPTIONAL)",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"]
        },
        {
            "id": "value2",
            "name": "Value 2",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The value 2 to use inside the code. (OPTIONAL)",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"]
        },
        {
            "id": "value3",
            "name": "Value 3",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The value 3 to use inside the code. (OPTIONAL)",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"]
        },
        {
            "id": "value4",
            "name": "Value 4",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The value 4 to use inside the code. (OPTIONAL)",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"]
        },
        {
            "id": "value5",
            "name": "Value 5",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The value 5 to use inside the code. (OPTIONAL)",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"]
        },
        {
            "id": "value6",
            "name": "Value 6",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The value 6 to use inside the code. (OPTIONAL)",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"]
        }
    ],

    options: [
        {
            "id": "block_behavior",
            "name": "Block Behavior",
            "description": "Description: Whether the block must execute the next blocks automatically.",
            "type": "SELECT",
            "options": {
                "yes": "Execute Following Block(s) Automatically",
                "no": "Do Not Execute Following Block(s) Automatically"
            }
        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks. If you selected the option \"Do Not Execute Following Block(s) Automatically\", this output will only work if you trigger manually.",
            "types": ["action"]
        },
        {
            "id": "return_value",
            "name": "Return Value",
            "description": "Type: Unspecified\n\nDescription: The value returned from the end of the code if possible.",
            "types": ["unspecified"]
        },
        {
            "id": "time_taken",
            "name": "Time Taken",
            "description": "Type: Number\n\nDescription: The time taken to execute all code in milliseconds.",
            "types": ["number"]
        },
        {
            "id": "value1",
            "name": "Value 1",
            "description": "Type: Unspecified\n\nDescription: The value 1 returned from the code if possible.",
            "types": ["unspecified"]
        },
        {
            "id": "value2",
            "name": "Value 2",
            "description": "Type: Unspecified\n\nDescription: The value 2 returned from the code if possible.",
            "types": ["unspecified"]
        },
        {
            "id": "value3",
            "name": "Value 3",
            "description": "Type: Unspecified\n\nDescription: The value 3 returned from the code if possible.",
            "types": ["unspecified"]
        },
        {
            "id": "value4",
            "name": "Value 4",
            "description": "Type: Unspecified\n\nDescription: The value 4 returned from the code if possible.",
            "types": ["unspecified"]
        },
	  {
            "id": "value5",
            "name": "Value 5",
            "description": "Type: Unspecified\n\nDescription: The value 5 returned from the code if possible.",
            "types": ["unspecified"]
        },
        {
            "id": "value6",
            "name": "Value 6",
            "description": "Type: Unspecified\n\nDescription: The value 6 returned from the code if possible.",
            "types": ["unspecified"]
        },
        {
            "id": "value7",
            "name": "Value 7",
            "description": "Type: Unspecified\n\nDescription: The value 7 returned from the code if possible.",
            "types": ["unspecified"]
        },
        {
            "id": "value8",
            "name": "Value 8",
            "description": "Type: Unspecified\n\nDescription: The value 8 returned from the code if possible.",
            "types": ["unspecified"]
        },
        {
            "id": "value9",
            "name": "Value 9",
            "description": "Type: Unspecified\n\nDescription: The value 9 returned from the code if possible.",
            "types": ["unspecified"]
        },
        {
            "id": "value10",
            "name": "Value 10",
            "description": "Type: Unspecified\n\nDescription: The value 10 returned from the code if possible.",
            "types": ["unspecified"]
        },
        {
            "id": "value11",
            "name": "Value 11",
            "description": "Type: Unspecified\n\nDescription: The value 11 returned from the code if possible.",
            "types": ["unspecified"]
        },
        {
            "id": "error_message",
            "name": "Error Message",
            "description": "Acceptable Types: Text\n\nDescription: The error message if there is a problem with the code.",
            "types": ["text"]
        }
    ],

    code(cache) {
        const evaluation = javascript_code => {
            const value1 = this.GetInputValue("value1", cache);
            const value2 = this.GetInputValue("value2", cache);
            const value3 = this.GetInputValue("value3", cache);
            const value4 = this.GetInputValue("value4", cache);
            const value5 = this.GetInputValue("value5", cache);
            const value6 = this.GetInputValue("value6", cache);

            const client = this.client;

            try {
                return [false, eval(javascript_code)];
            } catch(error) {
                return [true, error + ""];
            }
        }

        (() => {
            const javascript_code = this.GetInputValue("javascript_code", cache) + "";

            const {performance} = require("perf_hooks");

            const t0 = performance.now();
            const res = evaluation(javascript_code);
            const t1 = performance.now();

            const block_behavior = this.GetOptionValue("block_behavior", cache) + "" == "yes";
            this.StoreOutputValue(res[1], res[0] ? "error_message" : "return_value", cache);
            this.StoreOutputValue((t1 - t0).toFixed(4), "time_taken", cache);
            if(res[0] || block_behavior) this.RunNextBlock("action", cache);
        })();
    }
}