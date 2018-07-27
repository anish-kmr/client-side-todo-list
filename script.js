let inputButton = document.getElementById('inputbutton');
let inputField = document.getElementById('inputfield');
let todoList = document.getElementById('masterlist');

/*
  As this gets more complex, I will add additional comments, but for now
  the functions and code are self-commenting and should be easy to follow
*/

function removeThisElement() {
  // At the moment, I don't know a better/simpler way of removing elements than this
  this.parentNode.removeChild(this);
}

function addInputToList() {
  let node = document.createElement('li');
  let textNode = document.createTextNode(inputField.value);
  node.appendChild(textNode);
  todoList.appendChild(node);
  node.addEventListener('click', removeThisElement);
}

function sendUserInput() {
  if (inputField.value.length > 0) {
    addInputToList();
    inputField.value = '';
  }
}

function checkIfValidKey(e) {
  if (inputField.value.length > 0 && e.keyCode === 13) {
    sendUserInput();
  }
}

inputButton.addEventListener('click', sendUserInput);
inputField.addEventListener('keypress', checkIfValidKey);
