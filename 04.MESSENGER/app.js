function attachEvents() {
    const url = 'https://rest-messanger.firebaseio.com/messanger.json';

    document.getElementById('submit').addEventListener('click', submit);
    document.getElementById('refresh').addEventListener('click', display);
    let displayMessage = document.getElementById('messages');
    function submit() {

        let author = document.getElementById('author').value;
        let content = document.getElementById('content').value;

        let obj = {
            method: 'POST',
            body: JSON.stringify({
                author: author,
                content: content,
            })
        };

        fetch(url, obj)
            .then((response) => response.json())
            .catch((err) => handleError(err));
        document.getElementById('author').value = '';
        document.getElementById('content').value = '';
    }

    function display() {

        fetch(url)
            .then((response) => response.json())
            .then((obj) => handleView(obj))
            .catch((err) => handleError(err));
    }

    function handleView(obj) {
        displayMessage.textContent = '';
        for(let k in obj){
            displayMessage.textContent += `${obj[k]['author']}: ${obj[k]['content']}\n`;
        }


    }
    
    function handleError(err) {
        console.log(err);
        document.getElementById('messages').textContent = 'Error';
    }
}

attachEvents();