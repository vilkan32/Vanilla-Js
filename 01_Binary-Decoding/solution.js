function solve() {

    let text = document.getElementById('input').value;

    let digits = [];

    function getSum(input) {
        let sum = 0;
        let result = input;

        while (result.length > 1) {
            for (let char of result) {
                sum += +char;
            }

            result = sum.toString();
            sum = 0;
        }

        return +result;
    }

    let textLength = text.length;
    text = text.slice(getSum(text), textLength - getSum(text));


    let matrix = split(text.split(''), 8);
    let current = [];

    function split(arr, n) {
        let res = [];
        while (arr.length) {
            res.push(arr.splice(0, n));
        }
        return res;
    }

    let some = 0;
    console.log(matrix);
    let result = '';
    for (let i = 0; i < matrix.length; i++) {

        let sum = matrix[i].join('');
        let decimal = parseInt(sum,2);
        console.log(decimal);
        if( /[a-zA-Z ]+/g.test(String.fromCharCode(decimal))){
            console.log(String.fromCharCode(decimal));
            console.log(some++);
            result+= String.fromCharCode(decimal);
        }

    }

    let output = document.getElementById('resultOutput');

    output.textContent = result.trim();


}
