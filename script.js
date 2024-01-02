let displayValue = "";

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (
    displayValue !== "" &&
    !isNaN(displayValue.charAt(displayValue.length - 1))
  ) {
    displayValue += operator;
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function toggleSign() {
  if (displayValue !== "") {
    if (displayValue.charAt(0) === "-") {
      displayValue = displayValue.slice(1);
    } else {
      displayValue = `-${displayValue}`;
    }
    updateDisplay();
  }
}

function percent() {
  if (displayValue !== "") {
    try {
      const number = parseFloat(displayValue);
      const percentage = number / 100;
      displayValue = percentage.toString();
      updateDisplay();
    } catch (error) {
      displayValue = "Error";
      updateDisplay();
    }
  }
}

function calculateExpression(expression) {
  try {
    const result = Function(`'use strict'; return (${expression});`)();
    return result;
  } catch (error) {
    return "Error";
  }
}

function calculate() {
  if (
    displayValue !== "" &&
    !isNaN(displayValue.charAt(displayValue.length - 1))
  ) {
    try {
      const result = calculateExpression(displayValue);
      console.log(`${displayValue} = ${result}`);
      displayValue = result.toString();
      updateDisplay();
    } catch (error) {
      displayValue = "Error";
      updateDisplay();
    }
  }
}

function updateDisplay() {
  if (displayValue === "") {
    document.getElementById("display").innerHTML = "0";
  } else {
    document.getElementById("display").innerHTML = displayValue;
  }
}
