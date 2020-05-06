function solve() {

    let arr = JSON.parse(document.getElementById('array').value);

    let specialWord = arr[0];
    arr.splice(0,1);
    console.log(specialWord);
    let regex = new RegExp( `(${specialWord.split('').map(function(c){return '['+c.toLowerCase()+c.toUpperCase()+']'}).join('')})` + '(\\s+|^)([!%$#A-Z]{8,})(\\s|,|\\.|$)', 'g');

    console.log(regex);
    for (let line of arr){
        let text = line;
        let match = regex.exec(line);

        while(match){

            let newWord = '';

            for(let char of match[3]){

                if(char === '!'){
                    newWord+='1';
                }else if(char === '%'){
                    newWord += '2';
                }else if(char === '#'){
                    newWord+= '3';
                }else if(char === '$'){
                    newWord += '4';
                }else if(/[A-Z]/.test(char)){

                    newWord += char.toLowerCase();
                }

            }
            text = text.replace(match[3], newWord);

            console.log(text);
            match = regex.exec(line);

            console.log(match);
        }

        let resultElement = document.getElementById('result');

        let pElement = document.createElement('p');

        pElement.textContent =  text;

        resultElement.appendChild(pElement);
    }
}
