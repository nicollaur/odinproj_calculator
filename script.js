const calcScreenCurrent = document.querySelector(".current-operand");
const calcScreenPrev = document.querySelector(".previous-operand");
const numBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const decimalBtn = document.querySelector(".decimal");
const allClearBtn = document.querySelector(".all-clear");
const deleteBtn = document.querySelector(".delete");

let currentValue = "";
let prevValue = "";
let operator = "";

equalsBtn.disabled = true;

numBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", function (e) {
        decimalBtn.disabled = false;
        currentValue += e.target.innerHTML;
        calcScreenCurrent.textContent = currentValue;
        currentValue = +(currentValue);

        if (currentValue !== "" && prevValue !== "") {
            equalsBtn.disabled = false;
        }
    })
});

decimalBtn.addEventListener("click", function (e) {
    if (calcScreenCurrent.textContent.includes(".")) {
        decimalBtn.disabled = true;
    } else {
        currentValue += e.target.innerHTML;
        calcScreenCurrent.textContent = currentValue;
    }
});

operatorBtns.forEach((opBtn => {
    opBtn.addEventListener("click", function (e) {
        //allows operator btn to perform equations independently of equals btn
        if (currentValue !== "" && prevValue !== "") {
            currentValue = roundDecimal(operate(operator, prevValue, currentValue));
        }

        operator = e.target.innerHTML;
        prevValue = +(currentValue);
        currentValue = "";
        calcScreenPrev.textContent = `${prevValue} ${operator}`;
        calcScreenCurrent.textContent = "";
    })
}));

equalsBtn.addEventListener("click", function (e) {
    if (currentValue === 0 && operator === "÷") {
        calcScreenCurrent.textContent = "oOoOoO";
    } else {
        currentValue = roundDecimal(operate(operator, prevValue, currentValue));
        calcScreenCurrent.textContent = currentValue;
        calcScreenPrev.textContent = "";
        prevValue = "";
    }
});

allClearBtn.addEventListener("click", function () {
    currentValue = "";
    prevValue = "";
    operator = "";
    calcScreenPrev.textContent = "CALC OF"
    calcScreenCurrent.textContent = "DOOM";
});

deleteBtn.addEventListener("click", function () {

    calcScreenCurrent.textContent = calcScreenCurrent.textContent
        .toString()
        .slice(0, -1);

    currentValue = calcScreenCurrent.textContent;
    currentValue = +(currentValue);

    //below was original code; created a bug that left currentValue as 0 if everything was deleted
    // currentValue = currentValue.toString();
    // currentValue = currentValue.replace(/\d$/, '');
    // currentValue = +(currentValue);
    // calcScreenCurrent.textContent = currentValue;
});

//keyboard support
document.addEventListener("keyup", (event) => {
    let name = event.key;
    let code = event.code;

    if (name >= 0 || name <= 9) {
        decimalBtn.disabled = false;
        currentValue += name;
        calcScreenCurrent.textContent = currentValue;
        currentValue = +(currentValue);

        if (currentValue !== "" && prevValue !== "") {
            equalsBtn.disabled = false;
        }
    } else if (
        name === "+" ||
        name === "-" ||
        name === "*" ||
        name === "÷"
    ) {
        if (currentValue !== "" && prevValue !== "") {
            currentValue = roundDecimal(operate(operator, prevValue, currentValue));
        }

        operator = name;
        prevValue = +(currentValue);
        currentValue = "";
        calcScreenPrev.textContent = `${prevValue} ${operator}`;
        calcScreenCurrent.textContent = "";
    } else if (name === "=") {
        if (currentValue === 0 && operator === "÷") {
            calcScreenCurrent.textContent = "oOoOoO";
        } else {
            currentValue = roundDecimal(operate(operator, prevValue, currentValue));
            calcScreenCurrent.textContent = currentValue;
            calcScreenPrev.textContent = "";
            prevValue = "";
        }
    } else if (name === ".") {
        if (calcScreenCurrent.textContent.includes(".")) {
            decimalBtn.disabled = true;
        } else {
            currentValue += name;
            calcScreenCurrent.textContent = currentValue;
        }
    } else if (name === "Backspace") {
        currentValue = currentValue.toString();
        currentValue = currentValue.replace(/\d$/, '');
        currentValue = +(currentValue);
        calcScreenCurrent.textContent = currentValue;
    } else if (name === "a" || name === "c") {
        currentValue = "";
        prevValue = "";
        operator = "";
        calcScreenPrev.textContent = "CALC OF"
        calcScreenCurrent.textContent = "DOOM";
    }

    console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
}, false);






function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "÷") {
        return divide(num1, num2)
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

function roundDecimal(value) {
    return Number(Math.round(value + "e" + 2) + "e-" + 2);
};