class ScratchTest {
    constructor() {

    }

    getInfo() {
        return {
            "id" : "Test",
            "name" : "Test",
            "blocks" : [
                {
                    "opcode" : "test",
                    "blockType" : "command",
                    "text" : "alert [text]",
                    "arguments" : {
                        "text" : {
                            "type" : "string",
                            "defaultvalue" : "Henlo, world!",

                        }
                    },

                },

            ]
        }
    }

    test({text}) {
        console.log(`Alerting you!   ${text}`);
    
    }
}

Scratch.extensions.register(new ScratchTest());
