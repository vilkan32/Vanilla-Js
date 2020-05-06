function acceptance() {

	const attributes = ['shippingCompany', 'productName', 'productQuantity', 'productScrape'];

    document.getElementById('acceptance').addEventListener('click', awaitInput);

    function checkIfFilled() {

        let areFilled = true;
		let obj = {};
        for (let i = 0; i <=1 ; i++) {

            let currentElement = document.querySelector(`input[name="${attributes[i]}"]`);
			obj[attributes[i]] = currentElement.value;
            if(typeof currentElement.value !== "string" || currentElement.value === '' || !isNaN(parseInt(currentElement.value)) ){
                console.log(typeof currentElement.value !== "string");
                console.log(currentElement.value === '');
                console.log(!isNaN(parseInt(currentElement.value)));

                areFilled = false;

            }
        }


        for (let i = 2; i <= 3; i++) {
            let currentElement = document.querySelector(`input[name="${attributes[i]}"]`);
            obj[attributes[i]] = currentElement.value;
            if(isNaN(parseInt(currentElement.value))){
                areFilled = false;
            }
        }
        obj['areFilled'] = areFilled;
        return obj;

    }

    function createDiv(text) {
		let mainElement = document.getElementById('warehouse');
    	let mainDiv = document.createElement('div');
		let pEl = document.createElement('p');
		pEl.textContent = text;
    	mainDiv.appendChild(pEl);
    	let buttonEl = document.createElement('button');
    	buttonEl.type = 'button';
    	buttonEl.textContent = 'Out of stock';
        buttonEl.addEventListener('click', clearElement);
    	mainDiv.appendChild(buttonEl);
    	mainElement.appendChild(mainDiv);

    }

    function clearInputField() {
       attributes.forEach(x => {
            document.querySelector(`input[name="${x}"]`).value = '';
	   });


    }

	function awaitInput() {

    	let values = checkIfFilled();

    	if(values.areFilled && values.productQuantity - values.productScrape > 0){
    		let string = `[${values.shippingCompany}] ${values.productName} - ${values.productQuantity - values.productScrape} pieces`;
    		createDiv(string);
            clearInputField();
		}else{
    		clearInputField();
		}

    }

    function clearElement(e) {

    	let target = e.target;

        let mainElement = document.getElementById('warehouse');
        mainElement.removeChild(target.parentElement);
    }

}