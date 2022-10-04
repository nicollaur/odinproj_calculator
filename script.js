let currentValue = "";
let prevValue = "";
let operator = "";


document.addEventListener("DOMContentLoaded", function () {
    //Store all components of HTML
    let clear = document.querySelector(".all-clear");
    let equal = document.querySelector(".equals");
    let decimal = document.querySelector(".decimal");
    let del = document.querySelector(".delete");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let prevScreen = document.querySelector(".previous-operand");
    let currentScreen = document.querySelector(".current-operand");

    numbers.forEach((number) => number.addEventListener("click", function (e) {
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function (e) {
        handleOperator(e.target.textContent);
        prevScreen.textContent = prevValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function () {
        prevValue = "";
        currentValue = "";
        operator = "";
        prevScreen.textContent = "Calc of";
        currentScreen.textContent = "DOOM";
    })

    equal.addEventListener("click", function () {
        if (currentValue != "" && prevValue != "") {
            calculate();
            prevScreen.textContent = "";
            currentScreen.textContent = prevValue;
        }
    })

    decimal.addEventListener("click", function () {
        addDecimal();
    })

    del.addEventListener("click", function () {
        currentScreen.textContent = currentScreen.textContent.slice(0, -1);
        currentValue = currentScreen.textContent;
        if (currentScreen.textContent === "") {
            currentValue = "";
            currentScreen.textContent = "DOOM";
        }
    })
});

function handleNumber(num) {
    currentValue += num;
}

function handleOperator(op) {
    operator = op;
    prevValue = currentValue;
    currentValue = "";
}

function calculate() {
    prevValue = +(prevValue);
    currentValue = +(currentValue);

    if (operator === "+") {
        prevValue += currentValue;
    } else if (operator === "-") {
        prevValue -= currentValue;
    } else if (operator === "x") {
        prevValue *= currentValue;
    } else if (operator === "÷") {
        prevValue /= currentValue;
    }

    prevValue = roundNumber(prevValue);
    prevValue = prevValue.toString();
    currentValue = prevValue.toString();
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

function addDecimal() {
    if (!currentValue.includes(".")) {
        currentValue += ".";
    }
}





// function operate(operator, num1, num2) {
//     if (operator === "+") {
//         return add(num1, num2);
//     } else if (operator === "-") {
//         return subtract(num1, num2);
//     } else if (operator === "x") {
//         return multiply(num1, num2);
//     } else if (operator === "÷") {
//         return divide(num1, num2);
//     }
// };

// function add(...num) {
//     return num.reduce((a, b) => a + b)
// };

// function subtract(...num) {
//     return num.reduce((a, b) => a - b)
// };

// function multiply(...num) {
//     return num.reduce((a, b) => a * b)
// };

// function divide(...num) {
//     return num.reduce((a, b) => a / b)
// };