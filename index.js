const area = document.querySelector('#area');
let str = ""; // To store the current input number as a string
let operator = ""; // To store the selected operator (+, -, *, /)
let val1 = 0; // To store the first number
let val2 = 0; // To store the second number

// Handles when a number is clicked
function handleNumber(num) {
    str += num; // Append clicked number to the current input
    area.value = str; // Display the number in the textarea
}

// Handles when an operator (+, -, *, /) is clicked
function performOperation(op) {
    val1 = Number(str); // Convert the current input (str) to a number and store it in val1
    operator = op; // Store the clicked operator
    str = ""; // Reset the input for the next number
}

// Calculates the result when "=" is clicked
function equals() {
    val2 = Number(str); // Convert the current input to a number and store it in val2
    let result = 0;

    // Perform the calculation based on the operator
    if (operator === "add") {
        result = val1 + val2;
    } else if (operator === "sub") {
        result = val1 - val2;
    } else if (operator === "mul") {
        result = val1 * val2;
    } else if (operator === "div") {
        result = val1 / val2;
    }

    area.value = result; // Display the result
    str = result.toString(); // Reset the input with the result, so further operations can be performed
    operator = ""; // Reset the operator
}

// Clears the calculator display and resets values
function clearArea() {
    area.value = ""; // Clear the display
    val1 = 0;
    val2 = 0;
    str = ""; // Reset input string
    operator = ""; // Reset operator
}
