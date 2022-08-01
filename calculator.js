let numpad = document.querySelectorAll(".numpadValue");
let numpadArr = Array.from(numpad);

let display = document.querySelector("#display > input");


numpadArr.forEach(but => {but.addEventListener('click', () => 
    
    display.value += (but.textContent)
    )

});




function Calculator() {
    this.Add = function(a, b) {
        return a+b
    },

    this.Subtract = function(a, b){
        return a - b;
    },

    this.Multiply = function(a, b){
        return a * b;
    },

    this.Divide = function(a, b){
        return b !== 0 ? a/b : undefined;
    },

    this.Operate = function(operator, a, b){
        switch(operator){
            case '+':
                this.Add(a, b)
                break;
            case '-':
                this.Subtract(a, b)
                break;
            case '*':
                this.Multiply(a, b)
                break;
            case '/':
                this.Divide(a, b)
                break;
            default:
                break;
        }
    }


}

