function solve(){

    document.getElementById('getVenues').addEventListener('click', handleListVenues);

    function handleListVenues() {
        clearWrapper();
        let venueDate = document.getElementById('venueDate').value;

        let url = `https://baas.kinvey.com/rpc/kid_BJ_Ke8hZg/custom/calendar?query=${venueDate}`;

        fetch(url,{
            method: 'post',
            headers: {"Content-type": "application/json", "Authorization": "Basic Z3Vlc3Q6cGFzcw=="},
        })
            .then(response => errorHandling(response))
            .then(data => handleData(data))
            .catch(err => {
                err.message === err.message? document.getElementById("venueDate").setCustomValidity("Venue on that date cannot be found!") : document.getElementById("venueDate").setCustomValidity('');
                document.getElementById("venueDate").reportValidity();
            });
    }

    function errorHandling(response) {
        if(response.status > 400){
            throw new Error("Venue on that date cannot be found");
        }

        return response.json();
    }

    function handleData(data) {

        for (let i = 0; i < data.length; i++) {

            let url = `https://baas.kinvey.com/appdata/kid_BJ_Ke8hZg/venues/${data[i]}`;
            fetch(url, {
                method: 'get',
                headers: {"Content-type": "application/json", "Authorization": "Basic Z3Vlc3Q6cGFzcw=="},
            }).then(response => response.json())
                .then(data => createElements(data));

        }

    }

    function createElements(data) {

        document.getElementById('wrapper').innerHTML +=
            `    <div class="venue" id=${data['_id']}>\n` +
            `        <span class="venue-name">${data.name} <input class="info" type="button" value="More info" onclick="expand(this)"></span>\n` +
            '        <div class="venue-details" style="display: none;" id="expansion">\n' +
            '            <table>\n' +
            '                <tr>\n' +
            '                    <th>Ticket Price</th>\n' +
            '                    <th>Quantity</th>   \n' +
            '                    <th></th>\n' +
            '                </tr>\n' +
            '                <tr>\n' +
            `                    <td class="venue-price">${data.price} lv</td>\n` +
            '                    <td><select class="quantity">\n' +
            '                        <option value="1">1</option>\n' +
            '                        <option value="2">2</option>\n' +
            '                        <option value="3">3</option>\n' +
            '                        <option value="4">4</option>\n' +
            '                        <option value="5">5</option>\n' +
            '                    </select></td>\n' +
            '                    <td><input class="purchase" type="button" value="Purchase" onclick="purchase(this)"></td>\n' +
            '                </tr>\n' +
            '            </table>\n' +
            '            <span class="head">Venue description:</span>\n' +
            `            <p class="description">${data.description}</p>\n` +
            `            <p class="description">Starting time: ${data.startingHour}</p>\n` +
            '        </div>\n' +
            '    </div>'

    }


}

function expand(e) {

    let target = e.parentElement.parentElement;
    console.log(target);
    if( target.querySelector('#expansion').style.display === 'none'){
        target.querySelector('#expansion').style.display = 'block';
    }else{
        target.querySelector('#expansion').style.display = 'none';
    }

}

function purchase(e){

    let target = e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

    let quantity = target.querySelector('select').value;


    let url = `https://baas.kinvey.com/appdata/kid_BJ_Ke8hZg/venues/${target.id}`;
    fetch(url, {
        method: 'get',
        headers: {"Content-type": "application/json", "Authorization": "Basic Z3Vlc3Q6cGFzcw=="},
    }).then(response => response.json())
        .then(data => purchaseElementHandler(data, quantity));

}


function purchaseElementHandler(data, quantity){

    let total = quantity * data.price;

    document.getElementById('wrapper').innerHTML =

        `<span class="head">Confirm purchase</span>
            <div class="purchase-info" custom-id="${data['_id']}" custom-quantity="${quantity}">
                <span>${data.name}</span>
                <span>${quantity} X ${data.price}</span>
                <span>Total: ${total} lv</span>
                <input type="button" value="Confirm" onclick="handleConfirmation(this)">
            </div>`;
}

function handleConfirmation(e){

    let target = e.parentElement;

    let id = target.getAttribute('custom-id');

    let quantity = target.getAttribute('custom-quantity');

    let url = `https://baas.kinvey.com/rpc/kid_BJ_Ke8hZg/custom/purchase?venue=${id}&qty=${quantity}`;

    fetch(url,{
        method: 'post',
        headers: {"Content-type": "application/json", "Authorization": "Basic Z3Vlc3Q6cGFzcw=="},
    }).then(response => response.json())
        .then(data => displayHtml(data));

}

function displayHtml(data){
    document.getElementById('wrapper').innerHTML = "You may print this page as your ticket." + data.html;
}

function clearWrapper(){

    document.getElementById('wrapper').innerHTML = '';
}

solve();