function solve() {

    let text = document.getElementById('text').value;

    let namingConvention = document.getElementById('naming-convention').value;

    if(namingConvention === 'Pascal Case'){

        let arrOfText = text.split(' ').filter(x => x != '');

        let fixed = [];
        for (let i = 0; i < arrOfText.length; i++) {
            let current = arrOfText[i];

            current = current.toLowerCase();

            current = current.replace(current[0], current[0].toUpperCase());

            fixed.push(current);

            document.getElementById('result').textContent = fixed.join('');
        }

    }else if(namingConvention === 'Camel Case'){

        let arrOfText = text.split(' ').filter(x => x != '');
        let fixed = [];
        fixed.push(arrOfText[0].toLowerCase());
        for (let i = 1; i < arrOfText.length; i++) {
            let current = arrOfText[i];

            current = current.toLowerCase();

            current = current.replace(current[0], current[0].toUpperCase());

            fixed.push(current);

            document.getElementById('result').textContent = fixed.join('');
        }

    }else{
        document.getElementById('result').textContent = 'Error!';
    }


}