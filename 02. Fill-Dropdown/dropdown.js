function addItem() {


    let text = document.getElementById('newItemText');

    let value = document.getElementById('newItemValue');

    let createOpiton = document.createElement('option');

    createOpiton.textContent = text.value;

    createOpiton.value = value.value;

    document.querySelector('select').appendChild(createOpiton);

    value.value = '';
    text.value = '';
}