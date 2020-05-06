function attachEvents() {
    document.querySelector('.load').addEventListener('click', loadCatch);
    document.querySelector('.add').addEventListener('click', uploadCatch);

    function uploadCatch() {

        let captureForm = document.querySelector('#addForm');
        let obj = {
            angler: "",
            bait: "",
            captureTime: 0,
            location: "",
            species: "",
            weight: 0
        };

        Array.from(captureForm.querySelectorAll('input')).forEach(x =>{

            obj[x.className] = x.value;

        });



        fetch('https://fisher-game.firebaseio.com/catches.json', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(obj),
        })
            .then((response) => response.json())
            .then(loadCatch);



    }

    function loadCatch() {

        fetch('https://fisher-game.firebaseio.com/catches.json')
            .then((response) => response.json())
            .then((data) => appendData(data));
    }

    function appendData(data) {
        createDivElement(data);
    }


    function createDivElement(data) {

        let masterDiv = document.getElementById('catches');

        while (masterDiv.childElementCount){
            masterDiv.removeChild(masterDiv.firstElementChild);
        }
            for (let key in data){
                let mainDiv = document.createElement('div');
                mainDiv.classList.add('catch');
                mainDiv.setAttribute('data-id', key);

                mainDiv.appendChild(createLabels('Angler'));

                mainDiv.appendChild(createInputs('text', 'angler', data[key].angler))

                mainDiv.innerHTML += "<hr>";

                mainDiv.appendChild(createLabels('Weight'));

                mainDiv.appendChild(createInputs('number', 'weight', data[key].weight));

                mainDiv.innerHTML += "<hr>";

                mainDiv.appendChild(createLabels('Species'));

                mainDiv.appendChild(createInputs('text', 'species', data[key].species));

                mainDiv.innerHTML += "<hr>";

                mainDiv.appendChild(createLabels('Location'));

                mainDiv.appendChild(createInputs('text', 'location', data[key].location));

                mainDiv.innerHTML += "<hr>";

                mainDiv.appendChild(createLabels('Bait'));

                mainDiv.appendChild(createInputs('text', 'bait', data[key].bait));

                mainDiv.innerHTML += "<hr>";

                mainDiv.appendChild(createLabels('Capture Time'));

                mainDiv.appendChild(createInputs('number', 'captureTime', data[key].captureTime));

                mainDiv.innerHTML += "<hr>";

                let btnUpdate = document.createElement('button');
                btnUpdate.classList.add('update');
                btnUpdate.textContent = 'Update';
                btnUpdate.addEventListener('click', updateHandler);
                mainDiv.appendChild(btnUpdate);

                let btnDelete = document.createElement('button');
                btnDelete.classList.add('delete');
                btnDelete.textContent = 'Delete';
                btnDelete.addEventListener('click', deleteHandler);

                mainDiv.appendChild(btnDelete);
                masterDiv.appendChild(mainDiv);
            }

       

    }

    function deleteHandler(e) {

        let target = e.target.parentElement;

        fetch(`https://fisher-game.firebaseio.com/catches/${target.attributes[1].value}.json`,{
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
        }).then((response) => response.json()).then(loadCatch);
    }

    function updateHandler(e) {

        let target = e.target.parentElement;
        let captureForm = target;
        let obj = {
            angler: "",
            bait: "",
            captureTime: 0,
            location: "",
            species: "",
            weight: 0
        };

        Array.from(captureForm.querySelectorAll('input')).forEach(x =>{

            obj[x.className] = x.value;

        });



        fetch(`https://fisher-game.firebaseio.com/catches/${target.attributes[1].value}.json`, {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(obj),
        })
            .then((response) => response.json())
            .then(loadCatch);
    }

    function createInputs(type,className, value) {

        let input = document.createElement('input');

        input.classList.add(className);
        input.type = type;
        input.setAttribute('value', value);

        return input;

    }

    function createLabels(text) {

        let label = document.createElement('label');
        label.textContent = text;

        return label;
    }

    
}


attachEvents();
