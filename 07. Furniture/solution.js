function solve() {

    Array.from(document.getElementsByTagName('button')).forEach(x => x.addEventListener('click', clickEvent));


    function clickEvent(e) {

       let currentButton = e.target;

       if(currentButton.textContent === 'Generate'){

           let textAreaContent = document.getElementsByTagName('textarea')[0].value;

           let parsed = JSON.parse(textAreaContent);

           let tableElement = document.getElementsByTagName('tbody')[0];



           for (let i = 0; i < parsed.length; i++) {

               let createTR = document.createElement('tr');

               let createTD = document.createElement('td');

               let createIMG = document.createElement('img');

               createIMG.src = parsed[i].img;
               createTD.appendChild(createIMG);
               createTR.appendChild(createTD);
               tableElement.appendChild(createTR);

               let createP = document.createElement('p');
               createP.textContent = parsed[i].name;
               let name = document.createElement('td');
               name.appendChild(createP);

               tableElement.children[1 + i].appendChild(name);

               let createPPrice = document.createElement('p');
               createPPrice.textContent = parsed[i]['price'];
               let prices = document.createElement('td');
               prices.appendChild(createPPrice);
               tableElement.children[1 + i].appendChild(prices);

               let createPDecFactor = document.createElement('p');
               createPDecFactor.textContent = parsed[i].decFactor;
               let factor = document.createElement('td');
               factor.appendChild(createPDecFactor);
               tableElement.children[1 + i].appendChild(factor);

               let createInputType = document.createElement('input');
               createInputType.type = 'checkbox';
               let inputType = document.createElement('td');
               inputType.appendChild(createInputType);
               tableElement.children[1 + i].appendChild(inputType);

           }

       }else if(currentButton.textContent === 'Buy'){

           let markedCheckboxes = Array.from(document.getElementsByTagName('input'));
           let checkedBoxes = markedCheckboxes.filter(x => x.checked === true);

           let names = [];
           let price = [];
           let factor = [];
           for (let i = 0; i < checkedBoxes.length; i++) {
               let current = checkedBoxes[i].parentNode.parentNode.childNodes;
                names.push(current[1].textContent);
                price.push(Number(current[2].textContent));
                factor.push(Number(current[3].textContent));
           }

           let textAreaContent = document.getElementsByTagName('textarea')[1];
           console.log(textAreaContent);


           textAreaContent.textContent += `Bought furniture: ${names.join(', ')}\n`;
            textAreaContent.textContent += `Total price: ${(price.reduce((a, b) => a + b, 0)).toFixed(2)}\n`;
            textAreaContent.textContent += `Average decoration factor: ${(factor.reduce((a, b) => a + b, 0) / factor.length)}`;
           console.log(textAreaContent);


       }



    }

}