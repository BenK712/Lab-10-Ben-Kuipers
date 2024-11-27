//Q1
document.addEventListener("DOMContentLoaded", function() {
    const name = prompt("Please enter your name");

    function getUser(name) {
      const outputDiv = document.getElementById('outputQ1');
      if (outputDiv) {
        outputDiv.textContent = `Hello, ${name}! Welcome!`;
      } else {
        console.error('The output div is not found');
      }
    }

    getUser(name);
  });

//Q2
function changeMessage() {
    const messageParagraph = document.getElementById('message');
    if (messageParagraph) {
      messageParagraph.innerText = "Hello, World!";
    } else {
      console.error('The message paragraph is not found');
    }
  }

  const button = document.getElementById('textChange');
    if (button) {
      button.addEventListener('click', changeMessage);
    } else {
      console.error('The button is not found');
    }

//Q3
function add() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const resultDiv = document.getElementById('result');

    const result = number1 + number2;
    if (result) {
        resultDiv.innerText = `${result}`;
    } else {
        console.error('The input is not found');
    }
}

const addButton = document.getElementById('addButton');
    if (addButton) {
        addButton.addEventListener('click',add);
    } else {
        console.error('The addButton is not found');
    }

//Q4
function replaceHeading() {
    const inputText = document.getElementById('inputText');
    const heading = document.getElementById('title');

    if (inputText) {
        heading.innerText = inputText.value;
    } else {
        console.error('The input is not found');
    }
}
const headingButton = document.getElementById('newHeading');
    if (headingButton) {
        headingButton.addEventListener('click', replaceHeading);
    } else {
        console.error('The headingButton is not found');
    }

//Q5
function combine() {
    const text1 = document.getElementById('text1').value;
    const text2 = document.getElementById('text2').value;
    const combinedText = document.getElementById('combinedText');

    const combined = text1.concat(" ", text2, ".");

    if (combined) {
        combinedText.innerText = `${combined}`;
    } else {
        console.error('combinedText not found')
    }
}
const concatenateButton = document.getElementById('concatenate');
    if (concatenateButton) {
        concatenateButton.addEventListener('click', combine);
    } else {
        console.error('The concatenateButton is not found');
    }

//Q6
function blueify() {
    const div = document.getElementById('colorBox');
    if (div) {
        div.style.backgroundColor = 'blue';
    } else {
        console.error('The div is not found')
    }
}
const colorButton = document.getElementById('blue');
    if (colorButton) {
        colorButton.addEventListener('click', blueify);
    } else {
        console.error('The colorButton is not found');
    }
