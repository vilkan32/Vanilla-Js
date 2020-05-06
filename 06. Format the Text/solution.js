function solve() {
  let input = document.getElementById('input').textContent;

  let splittedInput = input.split('.').filter(x => x!= '');

    let array = [];

    for (let i = 0; i <= splittedInput.length - 1; i++) {

    if(array.length === 3){
        let paragraph = document.createElement('p');

        paragraph.textContent = array.join('. ') + '.';

        let output = document.getElementById('output');

        output.appendChild(paragraph);
        array = [];
    }

    array.push(splittedInput[i]);

    }

    if (array){
        let paragraph = document.createElement('p');

        paragraph.textContent = array.join('. ') + '.';

        let output = document.getElementById('output');

        output.appendChild(paragraph);
        array = [];
    }
}