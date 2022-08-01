let numpad = document.querySelectorAll(".numpadValue");
let numpadArr = Array.from(numpad);

let operatorsPad = document.querySelectorAll(".operatorButton");
let operatorArr = Array.from(operatorsPad);

let display = document.querySelector("#display > input");

let otherButtons = document.querySelectorAll(".extraButtons");
let otherButsArr = Array.from(otherButtons);

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


console.log(operate('+', 2, 3))
console.log(Add(3, 3))



numpadArr.forEach(but => {but.addEventListener('click', () => display.value += (but.textContent) ) });

operatorArr.forEach(but => {but.addEventListener('click', function() {
    firstNumber = parseInt(display.value);
    currentOperator = but.textContent;
    display.value = 0;
    })
});

otherButsArr.forEach(but => {but.addEventListener('click', function(){
    if (but.id === "equal"){
        secondNumber = parseInt(display.value);
        console.log(currentOperator, firstNumber, secondNumber)
        display.value = (operate(currentOperator, firstNumber, secondNumber));
        console.log(display.value)
    }
    else{
        firstNumber = 0;
        secondNumber = 0;
        currentOperator = '';
        display.value = 0;
    }
})})
    



