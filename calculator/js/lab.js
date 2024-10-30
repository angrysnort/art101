function appendToDisplay(value) {
  const display = document.getElementById('display');
  if (display.value === '0') {
      display.value = value;
  } else {
      display.value += value;
  }
}

function clearDisplay() {
  document.getElementById('display').value = '0';
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
      const result = eval(display.value);
      display.value = result;
  } catch (error) {
      display.value = 'Error';
  }
}
