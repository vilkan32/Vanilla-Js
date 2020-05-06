function solve() {
    let currentId = "depot";

    let url = `https://judgetests.firebaseio.com/schedule/${currentId}.json`;

    let name;

    function depart() {
        fetch(url)
            .then((response) => response.json())
            .then((manip) => respond(manip));
    }

    function arrive() {

        document.getElementsByClassName('info')[0].textContent = `Arriving at ${name}`;
        document.getElementById('depart').disabled = false;
        document.getElementById('arrive').disabled = true;

    }

    function respond(response) {

        document.getElementsByClassName('info')[0].textContent = `Next stop ${response.name}`;
        document.getElementById('depart').disabled = true;
        document.getElementById('arrive').disabled = false;
        name = response.name;
        currentId = response.next;
        url = `https://judgetests.firebaseio.com/schedule/${currentId}.json`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();