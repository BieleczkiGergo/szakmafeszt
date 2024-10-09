
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
                    "text" : "robot stop",
                    "arguments" : {
    
                    },
    
                },
                {
                    "opcode" : "forward",
                    "blockType" : "command",
                    "text" : "robot move forward",
                    "arguments" : {

                    },

                },
                {
                    "opcode" : "backward",
                    "blockType" : "command",
                    "text" : "robot move backward",
                    "arguments" : {

                    },

                },
                {
                    "opcode" : "left",
                    "blockType" : "command",
                    "text" : "robot turn left",
                    "arguments" : {

                    },
                },
                {
                    "opcode" : "right",
                    "blockType" : "command",
                    "text" : "robot turn right",
                    "arguments" : {

                    },

                },
                {
                    "opcode" : "seturl",
                    "blockType" : "command",
                    "text" : "set robot url [url]",
                    "arguments" : {
                        "url" : {
                            "type" : "string",
                            "defaultvalue" : "10.42.0.1"

                        },
                    },

                },

            ],

        }
    }

    stop() {
        fetch(this.url + "/s", {"method" : "post"});

    }

    forward() {
        fetch(this.url + "/fd", {"method" : "post"});
        
    }

    backward() {
        fetch(this.url + "/bd", {"method" : "post"});

    }

    left() {
        fetch(this.url + "/ld", {"method" : "post"});

    }

    right() {
        fetch(this.url + "/rd", {"method" : "post"});

    }

    seturl({url}){
        fetch(url + "/s", {"method" : "post"})
        .then((resp) => {
            this.url = url;

        }).catch((err) => {
            alert("could't find the robot");

        });

    }

}

ScratchController.extensions.register(new ScratchController());
