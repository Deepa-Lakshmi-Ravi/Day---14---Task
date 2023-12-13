let display = document.getElementById('display');

    function appendToDisplay(value) {
      if (display.textContent === '0') {
        display.textContent = '';
      }
      display.textContent += value;
    }

    function clearDisplay() {
      display.textContent = '0';
    }

    function deleteLastCharacter() {
      let currentValue = display.textContent;
      display.textContent = currentValue.slice(0, -1);
    }

    function calculate() {
      const expression = display.textContent;
      if (isValidExpression(expression)) {
        const result = parseAndEvaluate(expression);
        display.textContent = result;
      } else {
        display.textContent = 'Error';
      }
    }

    function isValidExpression(expression) {
      const operators = ['+', '-', '*', '/'];
      return !operators.includes(expression.slice(-1));
    }

    function parseAndEvaluate(expression) {
      return eval(expression);
    }

    // Add event listener for keyboard events
    document.addEventListener('keydown', function(event) {
      const key = event.key;

      if (key >= '0' && key <= '9') {
        appendToDisplay(key);
      } else if (key === '.') {
        appendToDisplay('.');
      } else if (key === '*' || key === '/' || key === '+' || key === '-') {
        appendToDisplay(key);
      } else if (key === 'Enter') {
        calculate();
      } else if (key === 'Backspace') {
        deleteLastCharacter();
      } else if (key === 'Escape') {
        clearDisplay();
      }else if(key === 'Shift'){
        calculate();
      }else{
        alert("Only numbers are allowed");
      }
    });