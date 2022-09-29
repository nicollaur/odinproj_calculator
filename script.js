const display = document.querySelector("#calc-text")
const allBtns = document.querySelectorAll("button").forEach(btn => {
    return btn.addEventListener("click", function (e) {
        let total = [];
        let operator = "";

        if (
            e.target.innerText === "+" ||
            e.target.innerText === "-" ||
            e.target.innerText === "x" ||
            e.target.innerText === "÷"
        ) {
            operator = e.target.innerText;
        } else if (e.target.innerText === "=") {
            display.textContent = total;
        } else if (e.target.innerText === "clear") {
            total = [];
            display.textContent = "Calc of DOOM";
        } else {
            total += e.target.innerText;
        }
        console.log(total);
    })
});


function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "x") {
        return multiply(num1, num2);
    } else if (operator === "÷") {
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