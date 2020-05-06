function solve() {

    let delimeter = document.getElementById('string').value;

    let text = document.getElementById('text').value;


    let regex = new RegExp(`${delimeter}(.*)${delimeter}`, 'g');
    let message = regex.exec(text)[1];
        let degreesPattern = /(north|east)[\s\S]*?(\d{2})[^,]*,[^,]*?(\d{6})/gi;
    let northDegrees;
    let eastDegrees;

    let currentDegreesMatch = degreesPattern.exec(text);

    while (currentDegreesMatch) {
        if (currentDegreesMatch[1].toLowerCase() === 'north') {
            northDegrees = `${currentDegreesMatch[2]}.${currentDegreesMatch[3]} N`;

        }
        else if (currentDegreesMatch[1].toLowerCase() === 'east') {
            eastDegrees = `${currentDegreesMatch[2]}.${currentDegreesMatch[3]} E`;

        }

        currentDegreesMatch = degreesPattern.exec(text);
    }

    let resultElement = document.getElementById('result');

    let pElement = document.createElement('p');

    for (let i = 0; i < 3; i++) {
        let pElement = document.createElement('p');

        if(i === 0){
            pElement.textContent = northDegrees;
            resultElement.appendChild(pElement);
        }else if(i === 1){
            pElement.textContent = eastDegrees;
            resultElement.appendChild(pElement);
        }else{
            pElement.textContent = "Message: " + message;
            resultElement.appendChild(pElement);
        }
    }


}


