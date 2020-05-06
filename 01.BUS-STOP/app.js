function getInfo() {
    const stopId = document.getElementById('stopId').value;

    const url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;
    let doc = document.getElementById('buses');
    while(doc.childElementCount){
        doc.removeChild(doc.firstElementChild);
    }
    fetch(url)
        .then((response) => response.json())
        .then((createElement) => createEl(createElement))
        .catch((err) =>  document.getElementById('stopName').textContent = "Error");

    function createEl(el) {
        document.getElementById('stopName').textContent = el.name;

        Object.keys(el.buses).forEach(b => {
            let liEl = document.createElement('li');
            liEl.textContent = `Bus ${b} arrives in ${el.buses[b]} minutes`;
            doc.appendChild(liEl);
        });

    }
}