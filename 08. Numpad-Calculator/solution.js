function solve() {

    Array.from(document.getElementsByTagName('button')).forEach(b => b.addEventListener('click', calculate));

    function calculate(e) {

        let currentBTN = e.target;

        let outputField = document.getElementById('expressionOutput');

        if(currentBTN.value === 'Clear'){
            outputField.textContent = '';
            document.getElementById('resultOutput').textContent = '';
        }else{
            if(currentBTN.value === '+' || currentBTN.value === '-' || currentBTN.value === '*' || currentBTN.value === '/'){
                outputField.textContent += ' ' +currentBTN.value + ' ';
            }
            else{

                if(currentBTN.value === '='){

                    let resultOutputElement = document.getElementById('resultOutput');

                    let regex = /^(\d+\.\d+|\d+)(\+|\-|\*|\/)(\d+\.\d+|\d+)$/m;

                    let inputField = outputField.textContent;
                    let arr = [];
                    for (let i = 0; i < inputField.length; i++) {
                        if(inputField[i] !== ' '){
                            arr.push(inputField[i]);
                        }
                    }
                    let str = arr.join('');

                    let finalResult = regex.exec(str);

                    if(finalResult){
                        let firstNumber = Number(finalResult[1]);
                        let operand = finalResult[2];
                        let secndNumber = Number(finalResult[3]);

                        let result;
                        if(operand == '/'){
                            result = firstNumber / secndNumber;
                        }else if(operand == '*'){
                            result = firstNumber * secndNumber;
                        }else if(operand == '+'){
                            result = firstNumber + secndNumber;
                        }else if(operand == '-'){
                            result = firstNumber - secndNumber;
                        }

                        resultOutputElement.textContent = result;
                    }else{
                        resultOutputElement.textContent = 'NaN';
                    }

                }else{
                    outputField.textContent += currentBTN.value;
                }
            }
        }


    }

}