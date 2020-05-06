function attachEvents() {

    let url = 'https://phonebook-nakov.firebaseio.com/phonebook.json';
    document.getElementById('btnLoad').addEventListener('click', loadHandler);
    let phonebookUl = document.getElementById('phonebook');
    document.getElementById('btnCreate').addEventListener('click', createHandler);
    
    function loadHandler() {

        fetch(url)
            .then((response) => response.json())
            .then((data) => createLiEl(data))
            .catch((err) => error(err));
    }


    function createLiEl(obj) {
        while(phonebookUl.childElementCount){
            phonebookUl.removeChild(phonebookUl.firstElementChild);
        }
        for(let k in obj){

            let liEl = document.createElement('li');
            liEl.textContent = `${obj[k]['person']}: ${obj[k]['phone']}`;
            let btn = document.createElement('button');
            btn.textContent = 'Delete';
            btn.addEventListener('click', function () {
                deleteRequest(k);
            });
            liEl.appendChild(btn);
            phonebookUl.appendChild(liEl);
        }
    }

    function deleteRequest(key) {
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' },

        })
            .then((response) => response.json()).then(loadHandler).catch((err) => error(err));
    }
    
    
    function createHandler() {
        let person = document.getElementById('person').value;
        let phone = document.getElementById('phone').value;
        console.log(person);
        let newContactJSON = {
            method: 'POST',
            body: JSON.stringify({
                person: person,
                phone: phone,
           }),
        };

        fetch(url, newContactJSON).then((response) => response.json()).then(loadHandler).catch((err) => error(err));
        document.getElementById('person').value = '';
        document.getElementById('phone').value = '';
    }
    
    function error(err) {

        let erro = document.createElement('li');
        erro.textContent = "Error";
        phonebookUl.appendChild(erro);
    }
}

attachEvents();