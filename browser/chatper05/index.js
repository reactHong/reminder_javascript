const addBtn = document.querySelector('footer>button');
const list = document.querySelector('#list');
const input = document.querySelector('main>input');

addBtn.addEventListener('click', () => {
  const newValue = input.value;

  if (!newValue) return;

  const newItem = document.createElement('div');
  const delBtn = document.createElement('button');
  const textNode = document.createTextNode(newValue);

  delBtn.innerHTML = 'Del';
  newItem.appendChild(textNode);
  newItem.appendChild(delBtn);

  list.appendChild(newItem);

  input.value = '';

  delBtn.addEventListener('click', (e) => {
    list.removeChild(newItem);
  });
});
