num1 = parseInt(prompt("Enter the first integer:"));
num2 = parseInt(prompt("Enter the second integer:"));

if (num1 > num2) {
alert("The first number (" + num1 + ") is greater than the second number (" + num2 + ").");
} else if (num1 < num2) {
alert("The second number (" + num2 + ") is greater than the first number (" + num1 + ").");
} else {
alert("The two numbers (" + num1 + ") are equal.");
}