const calcScreenCurrent = document.querySelector(".current-operand");
const calcScreenPrev = document.querySelector(".previous-operand");
const numBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");

let currentValue = "";
let prevValue = "";
let operator = "";

//12 + 7 - 5 * 3 = 42


numBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", function (e) {
        currentValue += e.target.innerHTML;
        calcScreenCurrent.textContent = currentValue;
        currentValue = +(currentValue);
    })
});

operatorBtns.forEach((opBtn => {
    opBtn.addEventListener("click", function (e) {
        if (currentValue !== "" && prevValue !== "") {
            currentValue = operate(operator, prevValue, currentValue);
        }

        operator = e.target.innerHTML;
        prevValue = +(currentValue);
        currentValue = "";
        calcScreenPrev.textContent = `${prevValue} ${operator}`;
        calcScreenCurrent.textContent = "";
    })
}));

equalsBtn.addEventListener("click", function (e) {
    currentValue = operate(operator, prevValue, currentValue);
    calcScreenCurrent.textContent = currentValue;
    calcScreenPrev.textContent = "";
})

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