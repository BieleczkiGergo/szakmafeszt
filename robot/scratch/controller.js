
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
        fetch(`http://${url}/s`, {method : "post"});

    }

    forward({url}) {
        fetch(`http://${url}/fd`, {method : "post"});
        
    }

    backward({url}) {
        fetch(`http://${url}/bd`, {method : "post"});

    }

    left({url}) {
        fetch(`http://${url}/ld`, {method : "post"});

    }

    right({url}) {
        fetch(`http://${url}/rd`, {method : "post"});

    }

}

Scratch.extensions.register(new ScratchController());
