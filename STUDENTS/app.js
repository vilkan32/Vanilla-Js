function listStudents() {

    fetch('https://baas.kinvey.com/appdata/kid_Skxo-jnbr/students',{
        method: "get",
        headers: {"Content-type": "application/json", "Authorization": "Basic Z3Vlc3Q6Z3Vlc3Q="},
    }).then(data => data.json())
        .then(response => handleResponse(response));

}

listStudents();
function handleResponse(response) {
    deleteItems();
   for (let obj of response.sort((a,b) => a.ID - b.ID)){
       document.getElementsByTagName('tbody')[0].appendChild(createTr(obj.ID, obj.FirstName, obj.LastName, obj.FacultyNumber, obj.Grade));
   }
}

function deleteItems() {
    while(document.getElementsByTagName('tbody')[0].childElementCount){
        document.getElementsByTagName('tbody')[0].removeChild(document.getElementsByTagName('tbody')[0].firstChild);
    }
}

function createTr(id, first, last, faculty, grade) {
    let mainTr = document.createElement('tr');
    mainTr.appendChild(createTd(id));
    mainTr.appendChild(createTd(first));
    mainTr.appendChild(createTd(last));
    mainTr.appendChild(createTd(faculty));
    mainTr.appendChild(createTd(grade));

    return mainTr;
}

function createTd(text) {

    let td = document.createElement('td');

    td.textContent = text;

    return td
}

function validatePassword() {
    let id = document.getElementById('id').value;

    isNaN(Number.parseInt(id))? document.getElementById("id").setCustomValidity("Id must be Number!") : document.getElementById("id").setCustomValidity('');

    let fName = document.getElementById('firstName').value;

    !isNaN(Number.parseInt(fName)) && fName.length != 0? document.getElementById("firstName").setCustomValidity("Must be non empty string!") : document.getElementById("firstName").setCustomValidity('');

    let lName = document.getElementById('lastName').value;

    !isNaN(Number.parseInt(lName)) && lName.length != 0? document.getElementById("lastName").setCustomValidity("Must be non empty string!") : document.getElementById("lastName").setCustomValidity('');

    let facultyNumber = document.getElementById('facultyNumber').value;

    isNaN(Number.parseInt(facultyNumber)) && facultyNumber.length != 0? document.getElementById("facultyNumber").setCustomValidity("Must be a number!") : document.getElementById("facultyNumber").setCustomValidity('');

    let grade = document.getElementById('grade').value;

    isNaN(Number.parseInt(grade)) && grade.length != 0? document.getElementById("grade").setCustomValidity("Must be a number!") : document.getElementById("grade").setCustomValidity('');

    if(!document.getElementById("id").validity.valid ||
        !document.getElementById("firstName").validity.valid ||
        !document.getElementById('lastName').validity.valid ||
        !document.getElementById('facultyNumber').validity.valid ||
        !document.getElementById('grade').validity.valid){
        document.getElementById("id").reportValidity();
        document.getElementById("firstName").reportValidity();
        document.getElementById('lastName').reportValidity();
        document.getElementById('facultyNumber').reportValidity();
        document.getElementById('grade').reportValidity();


    }else{
        let url = 'https://baas.kinvey.com/appdata/kid_Skxo-jnbr/students';

        let obj = {
            ID: id,
            FirstName: fName,
            LastName: lName,
            FacultyNumber: facultyNumber,
            Grade: grade,
        };

        fetch(url,{
            method: "post",

            headers: {"Content-type": "application/json", "Authorization": "Basic Z3Vlc3Q6Z3Vlc3Q="},

            body: JSON.stringify(obj),
        }).then(response => response.json())
            .then(listStudents);

        alert('Successfully added student!')
    }

    document.getElementById("id").value = '';
    document.getElementById("firstName").value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('facultyNumber').value = '';
    document.getElementById('grade').value = '';
}

document.getElementById("submit").onclick = validatePassword;
