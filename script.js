let total = 0;

function add(...num) {
    return num.reduce((acc, cur) => {
        return acc + cur;
    })
}

function subtract(...num) {
    return num.reduce((acc, cur) => {
        return acc - cur;
    })
}

function multiply(...num) {
    return num.reduce((acc, cur) => {
        return acc * cur;
    })
}

function divide(...num) {
    return num.reduce((acc, cur) => {
        return acc / cur;
    })
}