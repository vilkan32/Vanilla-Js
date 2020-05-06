function solve() {

    let text = document.getElementById('text').value;

    let regex = /\d+/;
    let textArr = text.split(' ').filter(x => x != '');
    let digits =[];
    let resultElement = document.getElementById('result');

    for (let i = 0; i < textArr.length; i++) {
        if(regex.test(textArr[i])){
            digits.push(regex.exec(textArr[i]));

            text = text.replace(regex.exec(textArr[i]), '');
        }
    }

    let words = text.split(' ').filter(x => x!= '');


    for (let i = 0; i < words.length; i++) {

        let current = words[i];
        let convertedToAscii = [];
        for (let j = 0; j < current.length; j++) {

            convertedToAscii.push(current.charCodeAt(j));
        }

        let some = document.createElement('p');
        some.textContent = convertedToAscii.join(' ');
        resultElement.appendChild(some);

    }

    let outputText = '';

    for (let i = 0; i < digits.length; i++) {
        outputText+= String.fromCharCode(Number(digits[i]));
    }

    let createPElement = document.createElement('p');
    createPElement.textContent = outputText;

    resultElement.appendChild(createPElement);

}