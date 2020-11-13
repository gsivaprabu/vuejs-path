const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const listElement = document.querySelector('ul');

function addGoal() {
  const enteredValue = inputElement.value;
  if (enteredValue === "") {
    alert("Please enter a value");
    return false;
  }
  const listItemEl = document.createElement('li');
  listItemEl.textContent = enteredValue;
  listElement.appendChild(listItemEl);
  inputElement.value = '';
}
buttonElement.addEventListener('click', addGoal);