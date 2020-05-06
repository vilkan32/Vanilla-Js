function addItem() {

    let text = document.getElementById('newItemText').value;

    let liParent = document.getElementById('items');

    let liEl = document.createElement('li');

    liEl.textContent = text;

    liParent.appendChild(liEl);

    document.getElementById('newItemText').value = '';


}