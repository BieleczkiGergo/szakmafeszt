
class ScratchController {
    constructor() {

    }

    getInfo(){
        return {
            "id" : "SSBController",
            "name" : "SSB controller",
            "blocks" : [
                {
                    "opcode" : "stop",
                    "blockType" : "command",
                    "text" : "robot stop [url]",
                    "arguments" : {
                        "url" : {
                            "type" : "string",
                            "defaultvalue" : "localhost",

                        },
    
                    },
    
                },
                {
                    "opcode" : "forward",
                    "blockType" : "command",
                    "text" : "robot move forward [url]",
                    "arguments" : {
                        "url" : {
                            "type" : "string",
                            "defaultvalue" : "localhost",

                        },

                    },

                },
                {
                    "opcode" : "backward",
                    "blockType" : "command",
                    "text" : "robot move backward [url]",
                    "arguments" : {
                        "url" : {
                            "type" : "string",
                            "defaultvalue" : "localhost",

                        },

                    },

                },
                {
                    "opcode" : "left",
                    "blockType" : "command",
                    "text" : "robot turn left [url]",
                    "arguments" : {
                        "url" : {
                            "type" : "string",
                            "defaultvalue" : "localhost",

                        },

                    },
                },
                {
                    "opcode" : "right",
                    "blockType" : "command",
                    "text" : "robot turn right [url]",
                    "arguments" : {
                        "url" : {
                            "type" : "string",
                            "defaultvalue" : "localhost",

                        },

                    },

                },

            ],

        }
    }

    stop({url}) {
        console.log(`attempting to fetch resource at http://${url}/s`);
        fetch(`http://${url}/s`, {method : "post"});

    }

    forward({url}) {
        console.log(`attempting to fetch resource at http://${url}/fd`);
        fetch(`http://${url}/fd`, {method : "post"});
        
    }

    backward({url}) {
        console.log(`attempting to fetch resource at http://${url}/bd`);
        fetch(`http://${url}/bd`, {method : "post"});

    }

    left({url}) {
        console.log(`attempting to fetch resource at http://${url}/ld`);
        fetch(`http://${url}/ld`, {method : "post"});

    }

    right({url}) {
        console.log(`attempting to fetch resource at http://${url}/rd`);
        fetch(`http://${url}/rd`, {method : "post"});

    }

}

Scratch.extensions.register(new ScratchController());
