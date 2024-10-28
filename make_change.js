"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    // Add event handler for the Calculate button
    $("#calculate").addEventListener("click", processEntry);
});

function processEntry() {
    // Get the amount of cents entered by the user
    const amount = parseFloat($("#cents").value);

    // Validate the input to make sure it's within the acceptable range
    if (isNaN(amount) || amount < 0 || amount > 99) {
        alert("Please enter a valid number between 0 and 99.");
        return;
    }

    // Calculate the number of each coin needed
    const quarters = Math.floor(amount / 25);
    let remainingAmount = amount % 25;

    const dimes = Math.floor(remainingAmount / 10);
    remainingAmount %= 10;

    const nickels = Math.floor(remainingAmount / 5);
    const pennies = remainingAmount % 5;

    // Display the results
    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
}
