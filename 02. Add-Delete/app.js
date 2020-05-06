function addItem() {

    let text = document.getElementById('newText').value;

    let liParent = document.getElementById('items');

    let liEl = document.createElement('li');

    liEl.innerHTML = text + " ";

    let deleteLink = document.createElement('a');

    deleteLink.setAttribute('href', '#');
    deleteLink.textContent = '[Delete]';
    deleteLink.addEventListener('click', deleteThatEl);

    function deleteThatEl(){

        liParent.removeChild(this.parentNode);
    }

    liEl.appendChild(deleteLink);

    liParent.appendChild(liEl);

    document.getElementById('newText').value = '';

}