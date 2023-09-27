'use strict'

/* Problem
    Write a JavaScript program to calculate
    multiplication and division of two numbers (input from the user).
*/

// Variables
let firstNumber;
let secondNumber;
let result;

function multiply() {
    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;

    result = firstNumber * secondNumber;

    document.getElementById("txtResult").innerHTML = result;

    document.getElementById("divResult").style.visibility = "visible";
}

function divide() {
    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;

    result = firstNumber / secondNumber;

    if (secondNumber != 0) {
        document.getElementById("txtResult").innerHTML = result;
    }
    else {
        document.getElementById("txtResult").innerHTML = "Math Error!"
    }

    document.getElementById("divResult").style.visibility = "visible";
}