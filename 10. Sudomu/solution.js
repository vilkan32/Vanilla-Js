function solve() {

    let sudomuElements = [];

    Array.from(document.getElementsByTagName('button'))[0].addEventListener('click', sudomu);
    Array.from(document.getElementsByTagName('button'))[1].addEventListener('click', clear);
    let solvedSudomu = true;
    function sudomu() {

        for (let i = 0; i < document.getElementsByTagName('tbody')[0].children.length; i++) {

            let currentTd = document.getElementsByTagName('tbody')[0].children[i].children;
            let currentRow = [];
            for (let j = 0; j < currentTd.length; j++) {

                let inputElement = currentTd[j].children[0];
                currentRow.push(inputElement.value);
            }

            sudomuElements.push(currentRow);

        }


        for (let i = 0; i < 3; i++) {

            if(sudomuElements[i].filter(function(value, index){ return sudomuElements[i].indexOf(value) == index}).length === 3){

            }else{

                solvedSudomu = false;
                break;
            }
        }

        if(solvedSudomu){

            for (let i = 0; i < 3; i++) {
                let colElements = [];
                for (let j = 0; j < 3; j++) {
                  colElements.push(sudomuElements[j][i]);
                }

                if(colElements.filter(function(value, index){ return colElements.indexOf(value) == index}).length === 3){

                }else{
                    solvedSudomu = false;
                    break;
                }
            }
        }

        if(solvedSudomu){

            Array.from(document.getElementsByTagName('table'))[0].style.border = '2px solid green';
            let paragraphElement = Array.from(document.getElementById('check').children)[0];

            paragraphElement.textContent = 'You solve it! Congratulations!';

            paragraphElement.style.color = 'green';

        }else{
            Array.from(document.getElementsByTagName('table'))[0].style.border = '2px solid red';
            let paragraphElement = Array.from(document.getElementById('check').children)[0];

            paragraphElement.textContent = 'NOP! You are not done yet...';

            paragraphElement.style.color = 'red';

        }
    }

    function clear() {

        for (let i = 0; i < document.getElementsByTagName('tbody')[0].children.length; i++) {

            let currentTd = document.getElementsByTagName('tbody')[0].children[i].children;

            for (let j = 0; j < currentTd.length; j++) {

                let inputElement = currentTd[j].children[0];
                inputElement.value = '';
            }



        }

        Array.from(document.getElementsByTagName('table'))[0].style.border = '';
        let paragraphElement = Array.from(document.getElementById('check').children)[0];

        paragraphElement.textContent = '';

        paragraphElement.style.color = '';

    }

}