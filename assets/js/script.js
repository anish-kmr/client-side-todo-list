const button = document.getElementById('inputbutton');
const field = document.getElementById('inputfield');
const todoList = document.getElementById('todo-list');

/*
  As this gets more complex, I will add additional comments, but for now
  the functions and code are self-commenting and should be easy to follow
*/

// I can't turn this function declaration into an arrow function, because
// the arrow functions cant use the 'this' keyword
function removeEl() {
  this.parentNode.removeChild(this);
}

function addToList() {
  const node = document.createElement('li');
  const textNode = document.createTextNode(field.value);
  node.appendChild(textNode);
  todoList.appendChild(node);
  node.addEventListener('click', removeEl);
}

// checks to see if the input has a non-empty value in it before adding to the list
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
