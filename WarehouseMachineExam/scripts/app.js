function coffeeStorage() {
    let arr = JSON.parse(document.getElementsByTagName('textarea')[0].value);

    let storage = {};

    for (let i = 0; i < arr.length; i++) {
        //[command, brand, coffeeName, expDate, quantity]
        let current = arr[i];
        let [command, brand, coffeeName, expDate, quantity] = current.split(', ');

        if (command === 'IN') {

            if (!storage[brand]) {
                storage[brand] = {};
            }

            if (!storage[brand][coffeeName]) {
                storage[brand][coffeeName] = {expiration: expDate, quantity: Number(quantity)};
                continue;
            }

            if(storage[brand][coffeeName].expiration === expDate){
                storage[brand][coffeeName].quantity += Number(quantity);
                continue;
            }

            if(storage[brand][coffeeName].expiration < expDate){
                storage[brand][coffeeName] =  {expiration: expDate, quantity: Number(quantity)};
                continue;
            }
        }else if(command === 'OUT'){

            if(storage[brand] && storage[brand][coffeeName] && storage[brand][coffeeName].expiration > expDate && storage[brand][coffeeName].quantity >= quantity){
                storage[brand][coffeeName].quantity -= Number(quantity);
            }

        }else if(command === 'REPORT'){

            let pElement = document.getElementsByTagName('div')[0].children[1];

            Object.keys(storage).forEach(key => {
                pElement.innerHTML += key + ": ";
                Object.keys(storage[key]).forEach(k => {

                    pElement.innerHTML += k + ' - ' + storage[key][k].expiration + ' - ' + storage[key][k].quantity + '. ';
                });
                pElement.innerHTML = pElement.innerHTML.trim();
                pElement.appendChild(document.createElement('br'));

            });
        }else if(command === 'INSPECTION'){
            let pElement = document.getElementsByTagName('div')[1].children[1];
            let result = "";
            for (const brand of Object.keys(storage).sort((a, b) => a.localeCompare(b))) {
                let result = `${brand}:`;
                for (const coffee of Object.keys(storage[brand])
                    .sort((a, b) => storage[brand][b].quantity - storage[brand][a].quantity)) {
                    result += ` ${coffee} - ${storage[brand][coffee].expiration} - ${storage[brand][coffee].quantity}.`;
                }
                result += "</br>";
                pElement.innerHTML += result;
            }

        }


    }
}