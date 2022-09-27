const allBtns = document.querySelectorAll("button");
let allBtnsValue = allBtns.value;

for (let btn of allBtns) {
    btn.addEventListener("click", function () {
        console.log("clicked");
    })
}



function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
};

function add(...num) {
    return num.reduce((a, b) => a + b)
};

function subtract(...num) {
    return num.reduce((a, b) => a - b)
};

function multiply(...num) {
    return num.reduce((a, b) => a * b)
};

function divide(...num) {
    return num.reduce((a, b) => a / b)
};