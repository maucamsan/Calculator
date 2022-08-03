let numpad = document.querySelectorAll(".numpadValue");
let numpadArr = Array.from(numpad);

let operatorsPad = document.querySelectorAll(".operatorButton");
let operatorArr = Array.from(operatorsPad);

let display = document.querySelector("#display > input");
// display.value = parseFloat(0);

let otherButtons = document.querySelectorAll(".extraButtons");
let otherButsArr = Array.from(otherButtons);

let signedOperator = document.querySelector(".signedOperator");

signedOperator.addEventListener("click", function(){
    if (display.value !== '')
    {
        display.value = parseFloat(display.value) * -1;
    }
})

let firstNumber = 0;
let secondNumber = 0;
let currentOperator = '';


function Add(a, b) {
    return a + b
}
let add = function(a, b){
    return a + b;
}

function Subtract(a, b) {
    return a - b;
}

function Multiply(a, b) {
    return a * b;
}

function Divide(a, b) {
    return b !== 0 ? a/b : undefined;
}

function operate(operator, a, b) {
    
    switch(operator){
        case '+':
            return Add(a, b);
            break;
        case '-':
            return Subtract(a, b)
            break;
        case '*':
            return Multiply(a, b)
            break;
        case '/':
            return Divide(a, b)
            break;
        default:
            break;
    }
}


let operatorPressed = false;
let first = true;

numpadArr.forEach(but => {but.addEventListener('click', () => {
    if (operatorPressed)
    {
        display.value = ''
        operatorPressed = false;
    }
    display.value += (but.textContent)
    if (!first){
        secondNumber = display.value;
        console.log("Second : ", secondNumber)
    }
} ) });

operatorArr.forEach(but => {but.addEventListener('click', function() {
    if (first){
        if (display.value === '') display.value = 0
        firstNumber = parseFloat(display.value);
        currentOperator = but.textContent;
        operatorPressed = true;
        first = false;
    }
    else{
        if (display.value === '') return;
        firstNumber = (operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber)));
        console.log("First: ", firstNumber)
        currentOperator = but.textContent;
        display.value = firstNumber;
        console.log(firstNumber)
        operatorPressed = true;
        //first = true;
    }
    
    })
});

otherButsArr.forEach(but => {but.addEventListener('click', function(){
    if (but.id === "equal"){
        if (display.value === '') return;
        secondNumber = parseFloat(display.value);
        display.value = (operate(currentOperator, firstNumber, secondNumber));
        operatorPressed = true;
        first = true;
    }
    else{
        first = true;
        firstNumber = 0;
        secondNumber = 0;
        currentOperator = '';
        display.value = '';
        display.setAttribute('placeholder', 0);
    }
})})
    



