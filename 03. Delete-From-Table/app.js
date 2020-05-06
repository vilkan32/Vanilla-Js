function deleteByEmail() {
    let inputText = document.querySelector('input[type="text"]').value;

    let emailSection = Array.from(document.querySelectorAll('#customers tbody tr')).map(x => x.lastElementChild);
    let check = true;
    let divResult = document.querySelector('#result');

    emailSection.forEach(x => {
       if(x.textContent === inputText){
           x.parentNode.parentNode.removeChild(x.parentNode);
           check = false;
           divResult.textContent = 'Deleted.'
       }
    });

    if(check){
        divResult.textContent = 'Not found.'
    }

}