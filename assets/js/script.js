const listItems = document.querySelectorAll('.list-item');
let item = ''

listItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('selected');
  });
});
