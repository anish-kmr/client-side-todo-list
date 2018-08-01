const button = document.getElementById('inputbutton');
const field = document.getElementById('inputfield');
const todoList = document.getElementById('masterlist');

/*
  As this gets more complex, I will add additional comments, but for now
  the functions and code are self-commenting and should be easy to follow
*/

function removeEl() {
  // At the moment, I don't know a better/simpler way of removing elements than this
  this.parentNode.removeChild(this);
}

function addToList() {
  let node = document.createElement('li');
  let textNode = document.createTextNode(field.value);
  node.appendChild(textNode);
  todoList.appendChild(node);
  node.addEventListener('click', removeEl);
}

function sendInput() {
  if (field.value.length > 0) {
    addToList();
    field.value = '';
  }
}

function checkKey(e) {
  // keyCode 13 is the Enter key
  if (field.value.length > 0 && e.keyCode === 13) {
    sendInput();
  }
}

button.addEventListener('click', sendInput);
field.addEventListener('keypress', checkKey);
