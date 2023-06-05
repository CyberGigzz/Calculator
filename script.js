class Calculator {
  constructor(previousOperaitonTextElement, currentOperationTextElement) {
    this.previousOperaitonTextElement = previousOperaitonTextElement;
    this.currentOperationTextElement = currentOperationTextElement;
    this.clear();
  }

    clear() {
      this.currentOperand = "";
      this.previousOperand = "";
      this.operation = undefined;
    }

  delete() {}

  appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString();
    console.log(this.currentOperand);
  }

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {
    this.currentOperationTextElement.innerText = this.currentOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const previousOperaitonTextElement = document.querySelector(
  "[data-previous-operation]"
);
const currentOperationTextElement = document.querySelector(
  "[data-current-operation]"
);

const calculator = new Calculator(
  previousOperaitonTextElement,
  currentOperationTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
