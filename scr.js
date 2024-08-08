function addToDisplay(value) {
  display.value += value;
}

function calculate() {
  var expression = display.value;
  var result = eval(expression);
  display.value = result;
}

function clearDisplay() {
  display.value = '';
}

function squareRoot() {
  var expression = display.value;
  var result = Math.sqrt(expression);
  display.value = result;
}

function inverse() {
  var expression = display.value;
  var result = 1 / expression;
  display.value = result;
}

function reset() {
  display.value = '0';
}