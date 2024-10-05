//assign all selectors
const output = document.querySelector(".output");

//functions
const numbers = document.querySelector(".numbers");
numbers.addEventListener("click", (num) => appendToOutput(parseInt(num.target.value)));

function appendToOutput(num) {
    output.textContent += num;
}