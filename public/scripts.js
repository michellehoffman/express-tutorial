const button = document.querySelector('.button');

button.addEventListener('click', handleClick);

function handleClick() {
  location.replace('http://localhost:3000/sunsets');
}