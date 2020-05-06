function solve() {

    let inputTextArray = JSON.parse(document.getElementById('arr').value);

    let regex = /^([A-Z]([a-z]*)\s[A-Z]([a-z]*))\s(\+359(\s|-)\d{1}(\5)\d{3}(\5)\d{3})\s([a-z\d]+@[a-z]+\.[a-z]{2,3})$/;
             // /^([A-Z][a-z]* [A-Z][a-z]*) (\+359 [0-9] [0-9]{3} [0-9]{3}|\+359-[0-9]-[0-9]{3}-[0-9]{3}) ([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/;
    let resultElement = document.getElementById('result');

    for (let i = 0; i < inputTextArray.length; i++) {

        let currentElement = inputTextArray[i];

        let resultFromRegex = regex.exec(currentElement);

        if(resultFromRegex == null){
            let p = document.createElement('p');
            p.textContent = 'Invalid data';
            resultElement.appendChild(p);
        }else{
            let pName = document.createElement('p');
            let pPhone = document.createElement('p');
            let pEmail = document.createElement('p');
            pName.textContent = `Name: ${resultFromRegex[1]}`;
            resultElement.appendChild(pName);
            pPhone.textContent = `Phone Number: ${resultFromRegex[4]}`;
            resultElement.appendChild(pPhone);
            pEmail.textContent = `Email: ${resultFromRegex[8]}`;
            resultElement.appendChild(pEmail);

        }

        let pSeparator = document.createElement('p');

        pSeparator.textContent = '- - -';

        resultElement.appendChild(pSeparator);

    }


}