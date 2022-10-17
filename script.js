const calcScreenCurrent = document.querySelector(".current-operand");
const numBtns = document.querySelectorAll(".number");

let displayValue = 0;

numBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        displayValue = e.target.innerHTML;
        calcScreenCurrent.textContent = e.target.innerHTML;
    })
})

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
    return num.reduce((acc, cur) => {
        return acc + cur;
    })
};

function subtract(...num) {
    return num.reduce((acc, cur) => {
        return acc - cur;
    })
};

function multiply(...num) {
    return num.reduce((acc, cur) => {
        return acc * cur;
    })
};

function divide(...num) {
    return num.reduce((acc, cur) => {
        return acc / cur;
    })
};