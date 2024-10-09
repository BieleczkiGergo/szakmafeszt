
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
        fetch(url + "/s", {method : "post"});

    }

    forward({url}) {
        fetch(url + "/fd", {method : "post"});
        
    }

    backward({url}) {
        fetch(url + "/bd", {method : "post"});

    }

    left({url}) {
        fetch(url + "/ld", {method : "post"});

    }

    right({url}) {
        fetch(url + "/rd", {method : "post"});

    }

}

Scratch.extensions.register(new ScratchController());
