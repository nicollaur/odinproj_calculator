const calcScreenCurrent = document.querySelector(".current-operand");
const calcScreenPrev = document.querySelector(".previous-operand");
const numBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");

let displayValue = 0;
let operator = "";

numBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", function (e) {
        displayValue = e.target.innerHTML;
        calcScreenCurrent.textContent = e.target.innerHTML;
    })
});

operatorBtns.forEach((opBtn => {
    opBtn.addEventListener("click", function (e) {
        operator = e.target.innerHTML;
        calcScreenPrev.textContent = `${displayValue}${operator}`;
        calcScreenCurrent.textContent = "";
    })
}))

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "÷") {
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