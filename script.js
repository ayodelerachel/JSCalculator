let num1 = Number(prompt("Enter first number:"));
let operator = prompt("Select your operator (+, -, /, *)");
let num2 = Number(prompt("Enter second number:"));  

let result;

if (operator === "+") {
    result = num1 + num2
}else if (operator === "-") {
    result = num1 - num2
    
}else if (operator === "/") {
    result = num1 / num2

}else if (operator === "*") {
    result = num1 * num2
}else{
    alert("Please select from the list of operators available")
}

alert(`The final answer is: ${result}`)