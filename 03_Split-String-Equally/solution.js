function solve() {

    let textElementValue = document.getElementById('text').value;

    let numberElementValue = Number(document.getElementById('number').value);

    let output = '';
    let arr = [];
    let counter = 0;
    let numOfIter = 1;

    if(textElementValue.length / numberElementValue <= 1) {


        while (true) {

            let char = textElementValue[counter];

            output += char;

            if(numOfIter === numberElementValue){
                if(output.length !== 0){
                    arr.push(output);
                }
                break;
            }

            numOfIter++;
            counter++;
            if (output.length === textElementValue.length) {
                arr.push(output);
                counter = 0;
                output = '';
            }

        }
        document.getElementById('result').textContent = arr.join('')
    }else{

        while (true) {

            if(counter === textElementValue.length){
                counter = 0;
                console.log(numOfIter);
            }
            let char = textElementValue[counter];

            output += char;


            if(arr.length === Math.ceil(textElementValue.length / numberElementValue)){
                break;
            }

            numOfIter++;
            counter++;
            if (output.length === numberElementValue) {
                arr.push(output);
                output = '';
            }


        }

        document.getElementById('result').textContent = arr.join(' ')

    }

}