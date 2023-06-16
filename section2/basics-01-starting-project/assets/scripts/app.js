const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor.js file
}

//
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const intitialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", intitialResult, enteredNumber);
  writeToLog("ADD", intitialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const intitialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", intitialResult, enteredNumber);
  writeToLog("SUBTRACT", intitialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const intitialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", intitialResult, enteredNumber);
  writeToLog("MULTIPLY", intitialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const intitialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", intitialResult, enteredNumber);
  writeToLog("DIVIDE", intitialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
