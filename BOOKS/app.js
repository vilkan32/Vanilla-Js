 function solve() {

    document.getElementById('submit').addEventListener('click', uploadABook);

    document.getElementById('loadBooks').addEventListener('click', loadBooks);

    function loadBooks() {

        let url = 'https://baas.kinvey.com/appdata/kid_Skxo-jnbr/books';
        fetch(url,{
            method: "get",
            headers: {"Content-type": "application/json", "Authorization": "Basic Z3Vlc3Q6Z3Vlc3Q="},

        })
            .then(response => response.json())
            .then(data => handleData(data));
    }

    function clearPreviousElements() {

        let el = document.getElementsByTagName('tbody')[0];

        while(el.childElementCount){
            el.removeChild(el.firstChild);
        }
    }


    function handleData(data) {
        clearPreviousElements();
        createHTMLElements(data);
    }

    function createHTMLElements(data) {

        for (let i = 0; i < data.length; i++) {
            let mainTr = document.createElement('tr');

            mainTr.setAttribute('custom-ID', data[i]['_id']);

            mainTr.appendChild(createTdElements(data[i].title));
            mainTr.appendChild(createTdElements(data[i].author));
            mainTr.appendChild(createTdElements(data[i].isbn));

            let specialLiElements = createTdElements();

            for (let j = 0; j < data[i].tags.length; j++) {
                specialLiElements.appendChild(createLiEl(data[i].tags[j]));
            }

            mainTr.appendChild(specialLiElements);
            let btnEdit = document.createElement('button');

            btnEdit.textContent = 'Edit';

            btnEdit.addEventListener('click', edit);

            let btnHolder = createTdElements();

            btnHolder.appendChild(btnEdit);

            let btnDelete = document.createElement('button');

            btnDelete.textContent = 'Delete';
            btnDelete.addEventListener('click', delFunc);
            btnHolder.appendChild(btnDelete);

            mainTr.appendChild(btnHolder);

            document.getElementsByTagName('tbody')[0].appendChild(mainTr);
        }
    }
    
    function edit(e) {

        let target = e.target;

        if (target.textContent === 'Edit'){
            editContext(target);
        } else{
            saveContext(target);
        }

    }

    function saveContext(target) {

        let mainEl = target.parentElement.parentElement.children;


        let title = mainEl[0].firstElementChild.value;

        let author = mainEl[1].firstElementChild.value;

        let isbn = mainEl[2].firstElementChild.value;

        let tags = [];

        let tagsEl = mainEl[3].getElementsByTagName('input');

        for (let i = 0; i < tagsEl.length; i++) {

            tags.push(tagsEl[i].id);

        }

        tags = tags.filter(x => x != '');

        let postURL = `https://baas.kinvey.com/appdata/kid_Skxo-jnbr/books/${target.parentElement.parentElement.getAttribute('custom-id')}`;

        let obj = {

            title,
            author,
            isbn,
            tags
        };


        fetch(postURL, {

            method: "put",

            headers: {"Content-type": "application/json", "Authorization": "Basic Z3Vlc3Q6Z3Vlc3Q="},

            body: JSON.stringify(obj),

        }).then(response => response.json())
            .then(loadBooks);

        console.log(tags);

    }

    function editContext(target) {
        let mainEl = target.parentElement.parentElement;

        let elements = Array.from(target.parentElement.parentElement.children);

        let elementsArr = [];

        for (let i = 0; i <= 2; i++) {
            let inputTitle = document.createElement('input');
            inputTitle.type = 'text';
            inputTitle.value = elements[i].textContent;
            elementsArr.push(inputTitle);
        }

        let liElementsArr = [];

        for (let i = 0; i < elements[3].children.length; i++) {
            let inputTitle = document.createElement('input');
            inputTitle.type = 'checkbox';

            inputTitle.id = elements[3].children[i].textContent;
            inputTitle.style.display = 'inherit';
            liElementsArr.push(inputTitle);

        }

        let btns = elements[4];
        btns.firstElementChild.textContent = 'Save Changes';
        while(mainEl.childElementCount){
            target.parentElement.parentElement.removeChild(target.parentElement.parentElement.firstChild);
        }

        console.log(btns);


        for (let i = 0; i < elementsArr.length; i++) {
            let el = createTdElements();
            el.appendChild(elementsArr[i]);
            mainEl.appendChild(el);
        }
        let elTd = createTdElements();

        for (let i = 0; i < liElementsArr.length; i++) {
            elTd.appendChild(liElementsArr[i]);
            elTd.innerHTML += ` ${liElementsArr[i].id}<br>`
        }

        inputAndButtons(elTd);

        mainEl.appendChild(elTd);

        mainEl.appendChild(btns);
    }

    function inputAndButtons(elTd) {

        let addNewTag = document.createElement('input');
        addNewTag.placeholder = 'Tag1, Tag2, Tag3...';
        addNewTag.style.textAlign = 'left';
        elTd.appendChild(addNewTag);
        let btnAddNewTag = document.createElement('button');
        btnAddNewTag.textContent = 'Add Tags';
        btnAddNewTag.addEventListener('click', addNewTagFunc);
        let btnDeleteSelected = document.createElement('button');
        btnDeleteSelected.textContent = 'Delete selected';
        btnDeleteSelected.addEventListener('click', deleteSelectedTags);
        elTd.appendChild(btnDeleteSelected);
        elTd.appendChild(btnAddNewTag);
    }
    
    function deleteSelectedTags(e) {
        let target = e.target;

        let tdEl = target.parentElement;

        let inputElements = tdEl.getElementsByTagName('input');

        let elementsToRemain = [];

        for (let i = 0; i < inputElements.length; i++) {
            if(inputElements[i].checked === false){
                elementsToRemain.push(inputElements[i]);
            }
        }

        tdEl.innerHTML = '';

        for (let i = 0; i < elementsToRemain.length - 1; i++) {
            tdEl.appendChild(elementsToRemain[i]);
            tdEl.innerHTML += ` ${elementsToRemain[i].id}<br>`;
        }

        inputAndButtons(tdEl);
    }

    function addNewTagFunc(e) {
        let target = e.target;

        let tdEl = target.parentElement;
        let arr = Array.from(tdEl.children)[tdEl.children.length - 3].value.split(', ');
        for (let i = 0; i < 3; i++) {
            tdEl.removeChild(tdEl.lastElementChild);
        }

        for (let i = 0; i < arr.length; i++) {

                let inputTitle = document.createElement('input');
                inputTitle.type = 'checkbox';

                inputTitle.id = arr[i];
                inputTitle.style.display = 'inherit';
            console.log(tdEl);
            tdEl.appendChild(inputTitle);
            tdEl.innerHTML += ` ${arr[i]}<br>`;
        }

        inputAndButtons(tdEl);
    }

    function delFunc(e) {

        let target = e.target.parentElement.parentElement;

        let url = `https://baas.kinvey.com/appdata/kid_Skxo-jnbr/books/${target.getAttribute('custom-id')}`;

        fetch(url,{
            method: "delete",
            headers: {"Content-type": "application/json", "Authorization": "Basic Z3Vlc3Q6Z3Vlc3Q="},
        }).then(response => response.json())
            .then(loadBooks);
    }

    function createTdElements(value) {

        let tdEl = document.createElement('td');

        tdEl.textContent = value;

        return tdEl;
    }

    function createLiEl(value) {
        let liEl = document.createElement('li');

        liEl.textContent = value;

        return liEl;
    }

      function uploadABook() {

        let title = document.getElementById('title').value;

        let author = document.getElementById('author').value;

        let isbn = document.getElementById('isbn').value;

        let tags = document.getElementById('tags').value;

        let postURL = 'https://baas.kinvey.com/appdata/kid_Skxo-jnbr/books';

        let obj = {

            title,
            author,
            isbn,
            tags: tags.split(', '),
        };


         fetch(postURL, {

            method: "post",

            headers: {"Content-type": "application/json", "Authorization": "Basic Z3Vlc3Q6Z3Vlc3Q="},

            body: JSON.stringify(obj),

        }).then(response => response.json())
            .then(loadBooks);

          document.getElementById('title').value = '';
          document.getElementById('author').value= '';
          document.getElementById('isbn').value= '';
          document.getElementById('tags').value= '';
      }
}
solve();
