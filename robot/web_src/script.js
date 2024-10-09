const buttons = [["left", "l", "a"], ["right", "r", "d"], ["forward", "f", "w"], ["backward", "b", "s"]];

function register_button(id, direction, key) {
    const element = document.getElementById(id);

    element.addEventListener("mouseup", (event) => {
        fetch(direction + "u", {method: "post"})
        .then((val) => {
            console.log("up, response arrived");

        }).catch((reason) => {
            console.log("up, failed");

        });

    });
    

    element.addEventListener("mousedown", (event) => {
        fetch(direction + "d", {method: "post"})
        .then((val) => {
            console.log("down, response arrived");

        }).catch((reason) => {
            console.log("down, failed");

        });

    });
}

const actions = buttons.map((item) => {
    register_button(...item);

});
