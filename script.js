// variables
const buttons = document.querySelectorAll('button');
const displayInput = document.querySelector('#input');

let rawInput = '';

// event listeners
buttons.forEach((button) => {
    button.addEventListener('click', buttonClick);
});

// basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// takes 2 numbers and calls math function based on operator
function operate(operator, a, b) {
    switch(operator) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
        default:
            console.log("Error: operator unknown");
            break;
    }
}


// handle button click
function buttonClick(event) {
    // if a number button is clicked
    if (this.id == "numberButton") {
        let inputNum = this.textContent;
        displayInput.textContent += inputNum;
        rawInput += inputNum;
    }
}

