function notify(message) {

    let divNotification = document.getElementById('notification');

    divNotification.textContent = message;
    divNotification.style.display = 'block';
    let set = setTimeout(clear, 2000);

    function clear() {

        divNotification.style.display = 'none';
    }



}