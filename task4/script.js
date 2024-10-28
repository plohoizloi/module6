const Link = document.querySelector('#Link');

addEventListener('click', 
    (event) => {
      event.preventDefault();
      Link.textContent = prompt('Вы кликнули по ссылке и ничего не произошло');
  })
  