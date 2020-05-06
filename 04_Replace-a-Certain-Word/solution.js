function solve() {

    let mainWord = document.getElementById('word').value;

    let arr = JSON.parse(document.getElementById('text').value);

    let wordToBeReplaced = arr[0].split(' ').filter(x => x != '')[2];

    let regex = new RegExp(wordToBeReplaced, 'i');
    arr[0] = arr[0].replace(regex, mainWord);
    let p = document.createElement('p');
    let resultElement = document.getElementById('result');
    p.textContent = arr[0];
    resultElement.appendChild(p);
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].replace(regex, mainWord);
        p = document.createElement('p');

        p.textContent = arr[i];

        resultElement.appendChild(p);
    }

}