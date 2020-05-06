let fetch = require('node-fetch');

function knock() {


    let change = 'Knock Knock.';
    let url = `https://baas.kinvey.com/appdata/kid_BJXTsSi-e/knock?query=${change}`;

        fetch(url,{
            method: "get",
            headers: {"Content-type": "application/json", "Authorization": "Basic Z3Vlc3Q6Z3Vlc3Q="},
        }).then(response => response.json())
            .then(data => handleData(data));




    function handleData(data) {

        if(data.hasOwnProperty('message')){
            console.log(change);
            console.log(data.answer);
            change = data.message;
            url = `https://baas.kinvey.com/appdata/kid_BJXTsSi-e/knock?query=${change}`;
            fetch(url,{
                method: "get",
                headers: {"Content-type": "application/json", "Authorization": "Basic Z3Vlc3Q6Z3Vlc3Q="},
            }).then(response => response.json())
                .then(data => handleData(data));

        }else{
            console.log(data.answer);

        }

    }


}

knock();