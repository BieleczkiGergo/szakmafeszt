
class ScratchController {
    constructor(url="10.42.0.1") {
        this.url = url;

    }

    getInfo(){
        return {
            "id" : "SSBController",
            "name" : "SSB controller",
            "blocks" : [
                {
                    "opcode" : "stop",
                    "blockType" : "command",
                    "text" : "robot [url] stop",
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
                    "text" : "robot [url] move forward",
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
                    "text" : "robot [url] move backward",
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
                    "text" : "robot [url] turn left",
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
                    "text" : "robot turn right",
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
        fetch(url + "/s", {"method" : "post"});

    }

    forward({url}) {
        fetch(url + "/fd", {"method" : "post"});
        
    }

    backward({url}) {
        fetch(url + "/bd", {"method" : "post"});

    }

    left({url}) {
        fetch(url + "/ld", {"method" : "post"});

    }

    right({url}) {
        fetch(url + "/rd", {"method" : "post"});

    }

}

Scratch.extensions.register(new ScratchController());
