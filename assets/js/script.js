// sets shorter names to select specific elements in the page
const button = document.getElementById('inputbutton');
const field = document.getElementById('inputfield');
const todoList = document.getElementById('todo-list');

// removes the current target of the event that's passed
let removeEl = (event) => {
  event.currentTarget.remove();
}

// adds the new input to the list as a list item
const addToList = () => {
  const node = document.createElement('li');
  const textNode = document.createTextNode(field.value);
  node.appendChild(textNode);
  todoList.appendChild(node);
  node.addEventListener('click', removeEl);
}

// checks to see if the input has a non-empty value in it before adding to the list
const sendInput = () => {
  if (field.value.length > 0) {
    addToList();
    field.value = ''; // clears the input field after adding the input to the list
  }
}

// checks that there's a value in the input and that the enter key was pressed
const checkKey = (e) => {
  if (field.value.length > 0 && e.keyCode === 13) {
    sendInput();
  }
}

// adds event listeners to the button and field to watch for user input
button.addEventListener('click', sendInput);
field.addEventListener('keypress', checkKey);
