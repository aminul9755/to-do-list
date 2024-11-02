const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container')

function addTask () {
  if (inputBox.value === '') {
    alert('You must type something in the box!')
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = 'Delete';
    li.appendChild(span);
  }
  inputBox.value = '';
}

listContainer.addEventListener('click', function(e){
  if (e.target.tagName ==='LI') {
    e.target.classList.toggle('marked');
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
  }
});

