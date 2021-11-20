// variables
const buttons = document.querySelectorAll('button');
const displayInput = document.querySelector('#input');
const displayHistory = document.querySelector('#history');

let rawInput = '';
let input1 = null;
let input2 = null;
let selectedOperator = '';
let hasOperator = false;

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
    let inputNum = this.textContent;
    
    // if a number button is clicked
    if (this.id == "numberButton") {
        displayInput.textContent += inputNum;
        rawInput += inputNum;
        // set input1 or 2 depending on if operator has been selected
        if (!hasOperator) {
            if (input1 === null) {
                input1 = inputNum;
            } else {
                input1 += inputNum;
            }
        } else {
            input2 = inputNum;
        }
    } else if (this.id == "operatorButton") {
        if (!hasOperator) {
            if (input1 != null) {
                hasOperator = true;
                displayHistory.textContent = input1;
                displayInput.textContent = '';
                switch (inputNum) {
                    case "+":
                        selectedOperator = "add";
                        break;
                    case "-":
                        selectedOperator = "subtract";
                        break;
                    case "*":
                        selectedOperator = "multiply";
                        break;
                    case "/":
                        selectedOperator = "divide";
                        break;
                    default:
                        console.log("Error: operator unknown");
                        break;
                }
            }
        } else {
            // operate
            
        }
    } else if (this.id == "equalsButton") {
        console.log("equals clicked");
        console.log(input1 + " : " + input2);
        if (hasOperator && input1 != null && input2 != null) {
            let calcResult = operate(selectedOperator, Number(input1), Number(input2));
            console.log(calcResult);
            // TODO display on screen and set to first input
        }
    } else if (this.id == "clearButton") {
        clearAll();

    } else if (this.id == "backspaceButton") {

    }
}

function clearAll() {
    input1 = '';
    input2 = '';
    rawInput = '';
    selectedOperator = '';
    hasOperator = false;
    displayHistory.textContent = '';
    displayInput.textContent = '';
}