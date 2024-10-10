let result = 0;

//assign all selectors
const output = document.querySelector(".output");

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {output.textContent=""});

//functions
const answer = document.querySelector("#answer")
answer.addEventListener("click", () => findAnswer(parseInt(output.textContent)));

const functions = document.querySelector(".functions");
functions.addEventListener("click", (func) => addFunc(func.target.value))

const numbers = document.querySelector(".numbers");
numbers.addEventListener("click", (num) => appendToOutput(parseInt(num.target.value)));

const op = document.querySelector(".operator");
op.addEventListener("click", (op) => addOperator(op.target.value))

function appendToOutput(num) {
    if (isNaN(num)){
        return false;
    }
    output.textContent += num;
}

function addFunc(func) {
    output.textContent += func;
}



function findAnswer() {
    result = eval(output.textContent)
    output.textContent = result;
}


