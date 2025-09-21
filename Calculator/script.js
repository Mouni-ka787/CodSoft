let display = document.getElementById('display');

function appendToDisplay(value) {
  // Append the clicked button value to the display
  display.value += value;
}

function clearDisplay() {
  // Clear the display
  display.value = '';
}

function deleteLast() {
  // Remove the last character from the display
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
  function convertToPercentage() {
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
      display.value = (value / 100).toString();
    }
  }
  