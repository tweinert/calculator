// variables
const buttons = document.querySelectorAll('button');
const displayInput = document.querySelector('#input');
const displayHistory = document.querySelector('#history');

let input1 = null;
let input2 = null;
let inputNum = null;
let selectedOperator = '';
let hasOperator = false;

// event listeners
buttons.forEach((button) => {
    button.addEventListener('click', buttonClick);
});

window.onkeydown = function(event) {
    handleKeyboardPress(event);
}

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
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            console.log("Error: operator unknown");
            break;
    }
}


// handle button click
function buttonClick(event) {
    inputNum = this.textContent;
    
    // if a number button is clicked
    if (this.id == "numberButton") {
        handleNumberButtonClick();
    } else if (this.id == "operatorButton") {
        handleOperatorButtonClick();
    } else if (this.id == "equalsButton") {
        handleEqualsButtonClick();
    } else if (this.id == "clearButton") {
        handleClearButtonClick();
    } else if (this.id == "backspaceButton") {
        handleBackspaceButtonClick();
    } else if (this.id == "dotButton") {
        handleDotButtonClick();
    }
}

function handleNumberButtonClick() {
    displayInput.textContent += inputNum;
    // set input1 or 2 depending on if operator has been selected
    if (!hasOperator) {
        if (input1 === null) {
            input1 = inputNum;
        } else {
            input1 += inputNum;
        }
    } else if (input2 === null) {
        input2 = inputNum;
    } else {
        input2 += inputNum;
    }
}

function handleOperatorButtonClick() {
    if (!hasOperator && input1 != null) {
        // if first number selected but no operator
        selectedOperator = inputNum;
        hasOperator = true;
        displayHistory.textContent = input1 + " " + selectedOperator;
        displayInput.textContent = '';
    } else if (hasOperator && input1 != null && input2 != null) {
        // if both numbers and operator selected
        // operate using previous operater
        console.log(selectedOperator);
        let calcResult = operate(selectedOperator, Number(input1), Number(input2));
        clearValues();
        input1 = calcResult;
        selectedOperator = inputNum;
        hasOperator = true;
        displayHistory.textContent = calcResult + " " + inputNum;
        calcResult = null;
    } else if (hasOperator && input1 != null && input2 == null) {
        // if first number and operator are selected but not second number
        //     should only occur when pressing operator repeatedly
        selectedOperator = inputNum;
        displayHistory.textContent = input1 + " " + selectedOperator;
        displayInput.textContent = '';
    }
}

function handleEqualsButtonClick() {
    if (hasOperator && input1 != null && input2 != null) {
        let calcResult = operate(selectedOperator, Number(input1), Number(input2));
        displayHistory.textContent = input1 + selectedOperator + input2 + " = ";
        clearValues();
        input1 = calcResult;
        displayInput.textContent += calcResult;
        calcResult = null;
    } 
}

function handleClearButtonClick() {
    clearValues();
    displayHistory.textContent = '';
}

function handleBackspaceButtonClick() {
    if (!hasOperator && input1 != null && input2 == null ) {
        input1 = input1.slice(0, -1);
        displayInput.textContent = input1;
    } else if (hasOperator && input1 != null && input2 != null) {
        input2 = input2.slice(0, -1);
        displayInput.textContent = input2;
    }
}

function handleDotButtonClick() {
    if (!hasOperator && input1 != null && input2 == null ) {
        // first input
        input1 += ".";
        displayInput.textContent = input1;
    } else if (hasOperator && input1 != null && input2 != null) {
        // second input
        input2 += ".";
        displayInput.textContent = input2;
    }
}

function handleKeyboardPress(event) {
    if (event.keyCode == 97 || 49) {
        // 1 pressed
        
    }
}



function clearValues() {
    input1 = null;
    input2 = null;
    hasOperator = false;
    displayInput.textContent = '';
}