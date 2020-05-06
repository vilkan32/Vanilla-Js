function f(arr) {

    let sum = -0;
    let otherSum = -0;
    let finalConcat = '';
    arr.forEach(element => sum+= element);
    console.log(sum);

    arr.forEach(element => otherSum += 1/ element);

    console.log(otherSum);
    arr.forEach(element => finalConcat += element);

    console.log(finalConcat);
}


function f(string) {

    let arr = string.split(/[,\s!?\.\:\;\'\r\n\(\)\{\}-]/);
    let filtered = arr.filter(x => x != '');
    let arrResult = [];
    filtered.forEach(element => arrResult.push(element.toUpperCase()));

    console.log(arrResult.join(', '));
}

function f(fruit, weight, pricePerKilo){
    let sum = (Number(weight) / 1000);
    let otherSum = sum * Number(pricePerKilo);
    console.log(`I need \$${otherSum.toFixed(2)} to buy ${sum.toFixed(2)} kilograms ${fruit}.`)

}



function gcd_two_numbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        var t = y;
        y = x % y;
        x = t;

    }
    console.log(x);
}

function a(num){
    let str = String(num);
    let arr = str.split('');
    let first = arr[0];
    let check = arr.filter(x => x !== first);
    if (check.length == 0){
        console.log(true)
    }else{
        console.log(false)
    }
    let sum = -0;

    arr.forEach(x => sum += Number(x));

    console.log(sum);
}

function z(steps, metersSteps, KmPerHr){

let a = Number(steps) * Number(metersSteps) / 1000;

let b = a / Number(KmPerHr);

let c = b * 60;

let rest = Math.floor(a * 1000 / 500);

c += rest;

c = c* 60;
    let hours = Math.floor(c / (60 * 60));

    let divisor_for_minutes = c % (60 * 60) ;
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);




    console.log((hours < 10 ? "0" : "") + hours + ":" + (minutes  < 10 ? "0" : "") + (minutes ) + ":" + (seconds < 10 ? "0" : "") + seconds);

}


function g(arr) {

    let obj = {};

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 == 0){
            obj[arr[i]] = Number(arr[i + 1]);
        }
    }

    console.log(obj);
}

function d(arr){

    let obj =
        {
            motorway: 130,
            interstate: 90,
            city: 50,
            residential: 20
        };

    let maxSpeed = obj[arr[1]];
    function result(){
        return arr[0] - maxSpeed <= 40 &&  arr[0] - maxSpeed > 20 ? 'excessive speeding'
            : arr[0] - maxSpeed <= 20 && arr[0] - maxSpeed > 0 ? 'speeding '
              : arr[0] - maxSpeed > 40 ? 'reckless driving'
                    :'';
    }
    console.log(result());

}


function asd(arr) {

    let num = Number(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === 'chop'){
            num = num / 2;
            console.log(num);
        }else if (arr[i] === 'dice'){
            num = Math.sqrt(num);
            console.log(num);
        }else if(arr[i] === 'spice'){
            num = num + 1;
            console.log(num);
        }else if(arr[i] === 'bake'){
            num = num * 3;
            console.log(num);
        }else if(arr[i] === 'fillet'){
            num -= 0.20 * num;
            console.log(num);
        }
    }


}

function des(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);

    function distance(x1, y1, x2, y2) {
        let distH = x1 - x2;
        let distY = y1 - y2;
        return Math.sqrt(distH**2 + distY**2);
    }

    if (Number.isInteger(distance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}


function soasdlve(arr){

    let coins = -0;
    let income = -0;
    for (let i = 0; i < arr.length; i++) {

        const current = arr[i].split(', ');

        coins = current[0];
        let drink ='';
        let currnetSum = -0;
            if (current[1] === 'coffee'){
                currnetSum = price(current[1] + ' ' + current[2]);
                drink = current[1];
                if(current[3] === 'milk'){
                    currnetSum+= Number((currnetSum * 0.10).toFixed(1));
                }
                if (Number(current[3]) > 0){
                    currnetSum+= Number(0.10);
                }
                if(Number(current[4] > 0)){
                    currnetSum+= Number(0.10);
                }

            }else{
                currnetSum = price(current[1]);
                drink = current[1];
                if(current[2] === 'milk'){
                    currnetSum+= Number((currnetSum * 0.10).toFixed(1));
                }
                if(Number(current[2] > 0)){
                    currnetSum+= Number(0.10);
                }
                if(Number(current[3] > 0)){
                    currnetSum+= Number(0.10);
                }

            }
            calculate(coins, currnetSum, drink);
    }
    function price(str){
        if (str === 'coffee caffeine'){
            return Number(0.80);
        }else if(str === 'coffee decaf'){
            return Number(0.90);
        }else if(str === 'tea'){
            return Number(0.80);
        }
    }

    function calculate(coin, realPrice, drink){

        if (coin - realPrice >= 0){
            console.log(`You ordered ${drink}. Price: \$${realPrice.toFixed(2)} Change: \$${(coin - realPrice).toFixed(2)}`)
            income += Number(realPrice);
        }else{
            console.log(`Not enough money for ${drink}. Need \$${(realPrice - coin).toFixed(2)} more.`)
        }
    }

    console.log('Income Report: \$' +income.toFixed(2));

}

function dasdasd(arr){


    let output = [];
    for (let i = 1; i < arr.length; i++) {

    let towns = arr[i].split(/[\|]/).filter(x => x != '');


    let obj ={
        Town: towns[0].trim(),
        Latitude: Number(towns[1]),
        Longitude: Number(towns[2])
    };

    output.push(obj);
    }

console.log(JSON.stringify(output))

}

function asdas(arr) {

    let obj = {};
    for (let i = 0; i < arr.length - 1; i++) {

        if (i % 2 == 0) {
            if(!obj.hasOwnProperty(arr[i])) {
                obj[arr[i]] = 0;
            }

            obj[arr[i]] += Number(arr[i+1]);
        }

    }

    console.log(JSON.stringify(obj));
}

function asdasd([str]){

    let input = str.split(/\W/).filter(x => x != '');

    let obj = {};

    for(let word of input){
        if(! obj.hasOwnProperty(word)){
            obj[word] = 1;
        }else{
            obj[word]++;
        }
    }
    console.log(JSON.stringify(obj));

}

function solve(str){


    let obj = {};

    for(let line of str){
        let tokens = line.split(/\s+<->\s+/);
        let town = tokens[0];
        let population = Number(tokens[1]);


        if (! obj.hasOwnProperty(town)){
            obj[town] = population;
        } else{
            obj[town] += population;
        }

    }

for(let towns of Object.entries(obj)){
    console.log(towns[0] + ' : ' + towns[1]);
}


}




function calculateSumFirstAndLast(arr) {

    let sum;

    sum = arr.filter((element,index) => index % 2 === 0);



    console.log(sum.filter(x => x != '').join(' '));

}


function order(arr){


    let resultArr = [];
    arr.forEach(x => {
        x < 0 ? resultArr.unshift(x) : resultArr.push(x);
    });

    console.log(resultArr);

}



function firstKLastKElements(arr) {

    let kElement = arr.shift();


    let firstSequence = arr.slice(0, kElement);

    let lastSequence = arr.slice(arr.length - kElement);

    console.log(firstSequence.join(' '));

    console.log(lastSequence.join(' '));

}

function lastKNumbersSequence(n,k) {

    let arr = [];

    arr[0] = 1;

    for (let i = 1; i < n; i++) {

        let sum = 0;
        let numberOfIter = 0;
        for (let j = arr.length - 1; j >= 0; j--) {

           if(numberOfIter === k){
               break;
           }
            sum += arr[j];
            numberOfIter++;
        }

        arr.push(sum);

    }

    console.log(arr.join(' '));

}

function oddNumbers(arr) {

    let filtered = arr.filter((el,index) => index % 2 !== 0);

    let multiplied = filtered.map(x => x* 2);

    console.log(multiplied.reverse().join(' '));

}

function smallestTwoNumbers(arr) {

    let sorted = arr.sort((a,b) => a-b);

    console.log(sorted.splice(0,2).join(' '));
}

function biggestElement(matrix){

    let outputResultBiggest = [];

    for (let i = 0; i < matrix.length; i++) {
        let currentArr = matrix[i];

        let ordered = currentArr.sort((a,b) => {
            return b -a;
        });

        outputResultBiggest.push(ordered[0]);
    }

    outputResultBiggest.sort((a,b) => {
        return b -a;
    });

    console.log(outputResultBiggest[0]);
}

function diagonalsSum(matrix) {

    let primary = 0;
    let row = 0;
    let col = 0;

    while(true){

        primary += matrix[row][col];

        row++; col++;
        if(row === matrix.length){
            break;
        }
    }

    let secondary = 0;

    let secRow = 0;

    let secCol = matrix.length - 1;

    while(true){

        secondary += matrix[secRow][secCol];

        secRow++; secCol--;
        if(secRow === matrix.length){
            break;
        }

    }


    console.log(primary + " " + secondary);
}

function equalNeighbours(arr) {

    let numOfOccurances = 0;

    for (let i = 0; i < arr.length ; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            if(i < arr.length - 1){

                if(arr[i][j] === arr[i][j + 1]){


                    numOfOccurances++;
                }
                if(arr[i][j] === arr[i + 1][j]){


                    numOfOccurances++;
                }
            }else if(i === arr.length - 1 && j !== arr[i].length - 1){
                if(arr[i][j] === arr[i][j + 1]){


                    numOfOccurances++;
                }

            }
        }
    }

    return numOfOccurances;
}

function printArrDelimeter(arr) {


    let delimeter = arr.pop();

    console.log(arr.join(delimeter))
}


function printNthElement(arr) {

    let Nth = Number(arr.pop());
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {

        if(i === 0){
            console.log(arr[0]);

        }

        if(counter === Nth){

            console.log(arr[i]);

            counter = 0;
        }

        counter++;

    }

}

function addAndRemoveElements(arr) {


    let element = 1;

    let storingArr = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 'add'){

            storingArr.push(element);
        }else{
            storingArr.pop();
        }

        element++;
    }

    if(storingArr.length === 0){

        console.log("Empty")
    }else{
        console.log(storingArr.join('\n'));
    }
}

function rotateArr(arr) {

    let numOfRotations = arr.pop();

   if(arr.length === 1){

   }else {
       for (let i = 0; i < numOfRotations % arr.length; i++) {

           arr.unshift(arr.pop());
       }
   }

    console.log(arr.join(' '));
}

function nonDecreasing(arr) {

    let biggestElement = arr[0];

    let filtered = [];
    filtered[0] = arr[0];
    arr.filter((a,i) => {

        if(biggestElement <= arr[i + 1]){
            filtered.push(arr[i + 1]);
            biggestElement = arr[i + 1];
        }

    });

    console.log(filtered.join('\n'));
}

function sortArray(arr) {

    let sorted = arr.sort((a,b) => {

        return a.length - b.length || a.localeCompare(b);
    })

    console.log(sorted.join('\n'));
}

function magicMatrix(matrix) {

    let rows = [];
    let cols = [];
    for (let i = 0; i < matrix.length; i++) {

        let currentSum = matrix[i].reduce((a,b) => {
            return a+b;
        });

        rows.push(currentSum);
        let currentColElements = [];
        for (let j = 0; j < matrix.length; j++) {
            currentColElements.push(matrix[j][i]);
        }

        let currentColSum = currentColElements.reduce((a,b) => {
            return a+b;
        });
        cols.push(currentColSum);
    }

    let filteredRows = rows.filter(a => {
      return  a === rows[0];
    });

    let filteredCols = cols.filter(a => {
        return a === rows[0];
    })

    if(filteredCols.length === matrix.length && filteredRows.length === matrix.length){
        console.log(true);
    }else {
        console.log(false);
    }

}

function spiralMatrix(row, col) {

    let matrix = [];

    for (let i = 0; i < row; i++) {
        matrix[i] = [];
    }

    let number = 1;

    let Row = 0;
    let Col = 0;
    let rowBoundaryUp = 0;
    let rowBoundaryDown = row -1;
    let colBoundaryLeft = 0;
    let colBoundaryRight = col - 1;
    let direction = 'r';
    let firstRun = true;

    while (true) {

        if(direction == 'r'){

            if(Col === colBoundaryRight){
                direction = 'd';
                rowBoundaryUp++;
                continue;
            }
            if(firstRun){
                Col = colBoundaryLeft;
                firstRun= false;
            }
            matrix[Row][Col] = number;
            if(Col < colBoundaryRight){
                Col++;
            }else{
                firstRun = false
            }

    }


        else if(direction == 'd'){

            if(Row === rowBoundaryDown){
                direction = 'l';
                colBoundaryRight--;
                continue;

            }
            if(firstRun){
                Row = rowBoundaryUp;
                firstRun = false;
            }
            matrix[Row][Col] = number;
            if(Row < rowBoundaryDown){
                Row++;
            }else{
                firstRun = true;
            }
        }

       else  if(direction == 'l'){
            if(Col === colBoundaryLeft){
                direction = 'u';
                rowBoundaryDown--;
                continue;

            }
            if(firstRun){
                Col = colBoundaryRight;
                firstRun = false;
            }
            matrix[Row][Col] = number;

             if(colBoundaryLeft < Col){
                Col--;
            }else{
                 firstRun = true;
            }
        }

      else   if(direction == 'u'){

            if(Row === rowBoundaryUp){
                direction = 'r';
                colBoundaryLeft++;
                continue;
            }
            if(firstRun){
                Row = rowBoundaryDown;
                firstRun = false;
            }
            matrix[Row][Col] = number;

            if(rowBoundaryUp < Row){
                Row--;
            }else{
                firstRun = true;
            }
        }

        number++;

        if(number === row * col + 1){

            for (let i = 0; i < matrix.length; i++) {

                let current = matrix[i];

                console.log(current.join(' '));
            }
            break;
        }
    }



}

function diagonalAttack(arr) {

    let matrix = [];
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(' ').map(Number);

        matrix.push(current);
    }

    let primary = 0;
    let row = 0;
    let col = 0;

    while(true){

        primary += matrix[row][col];

        row++; col++;
        if(row === matrix.length){
            break;
        }
    }

    let secondary = 0;

    let secRow = 0;

    let secCol = matrix.length - 1;
    let rowCordinatesSecondary = [];
    let colCordinatesSecondary = [];
    while(true){
    rowCordinatesSecondary.push(secRow);
    colCordinatesSecondary.push(secCol);
        secondary += matrix[secRow][secCol];

        secRow++; secCol--;
        if(secRow === matrix.length){
            break;
        }

    }

    if(primary === secondary){

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if(colCordinatesSecondary[i] !== j && i !== j){
                    matrix[i][j] = secondary;
                }
            }
        }
    }


    for (let i = 0; i < matrix.length; i++) {

        let current = matrix[i].join(' ');
        console.log(current);
    }


}

function orbit(arr) {

    let row = arr[0];
    let col = arr[1];

    let coordinateX = arr[2];
    let coordinateY = arr[3];

    let matrix = [];
    for (let i = 0; i < row; i++) {

        let current = [];

        for (let j = 0; j < col; j++) {
            current.push(0);
        }

        matrix.push(current);
    }


    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {

            matrix[i][j] = Math.max(Math.abs(coordinateX - i), Math.abs(coordinateY - j)) + 1;

        }
    }


    for (let i = 0; i < matrix.length; i++) {
        let output = matrix[i];

        console.log(output.join(' '));
    }
}


function coursesPrices(fundamentals, advanced, applications, formOfEducation) {
    let coursesPrices = {

        Fundamentals: 170,
        Advanced: 180,
        Applications: 190

    };


    let coursesPricesOnline = {

        Fundamentals: coursesPrices.Fundamentals - (coursesPrices.Fundamentals * 0.06),
        Advanced: coursesPrices.Advanced - (coursesPrices.Advanced * 0.06),
        Applications: coursesPrices.Applications - (coursesPrices.Applications * 0.06)
    };

    let totalPrice = 0;

    if(formOfEducation === 'online'){

        if(advanced && fundamentals && applications === false){

            totalPrice = (coursesPricesOnline.Advanced - (coursesPricesOnline.Advanced * 0.1)) + coursesPricesOnline.Fundamentals;

        }else if(advanced && fundamentals && applications){

            totalPrice = (coursesPricesOnline.Advanced - coursesPricesOnline.Advanced * 0.1) + coursesPricesOnline.Fundamentals + coursesPricesOnline.Applications;
            totalPrice = totalPrice - totalPrice * 0.06;

        }else{
            if(fundamentals){
                totalPrice += coursesPricesOnline.Fundamentals;
            }
            if(applications){
                totalPrice += coursesPricesOnline.Applications;
            }
            if(advanced){
                totalPrice += coursesPricesOnline.Advanced;
            }
        }
    }else if(formOfEducation === 'onsite'){

        if(advanced && fundamentals && applications === false){

            totalPrice = (coursesPrices.Advanced - coursesPrices.Advanced * 0.1) + coursesPrices.Fundamentals;

        }else if(advanced && fundamentals && applications){

            totalPrice = (coursesPrices.Advanced - coursesPrices.Advanced * 0.1) + coursesPrices.Fundamentals + coursesPrices.Applications;
            totalPrice = totalPrice - (totalPrice * 0.06);

        }else{
            if(fundamentals){
                totalPrice += coursesPrices.Fundamentals;
            }
            if(applications){
                totalPrice += coursesPrices.Applications;
            }
            if(advanced){
                totalPrice += coursesPrices.Advanced;
            }
        }

    }


    console.log(Math.round(totalPrice));

}

function plasmaGiants(arr, num) {


    let splitSize = arr.length / 2;
    let firstGiant =  arr.slice(0, splitSize);
    let secondGiant = arr.slice(splitSize);

    function split(arr, n) {
        let res = [];
        while (arr.length) {
            res.push(arr.splice(0, n));
        }
        return res;
    }

    let firstPart =  split(firstGiant, num);

    let secondPart = split(secondGiant, num);

    let productFirst = firstPart.map( x => x.reduce((a,b) => a*b)).reduce((a,b) => a+ b);
   let  productSecond = secondPart.map( x => x.reduce((a,b) => a*b)).reduce((a,b) => a+ b);

    let damagePerHit = Math.min(...arr);

    let finalScore = Math.max(...arr);

    let rounds = 1;
    if (damagePerHit !== 0) {
        while (true) {
            if(productFirst <= finalScore || productSecond <= finalScore){
                break;
            }
            productFirst -= damagePerHit;
            productSecond -= damagePerHit;
            rounds++;



        }
    }


    if(productFirst === productSecond ){
            console.log(`Its a draw ${productFirst} - ${productSecond}`);

        }

        else if(productFirst < productSecond){
            console.log(`Second Giant defeated First Giant with result ${productSecond} - ${productFirst} in ${rounds} rounds`);

        }

        else if(productSecond < productFirst){
            console.log(`First Giant defeated Second Giant with result ${productFirst} - ${productSecond} in ${rounds} rounds`);

        }

        function createScore(inputArr) {

            let score = 0;
            if(arr.length === 1){
                score = inputArr[0].reduce((a,b) => a + b);
            }else{
                for (let i = 0; i < inputArr.length; i++) {
                    let currentFirst = inputArr[i];
                    score += currentFirst.reduce((a,b) => a * b);
                }
            }

            return score;
        }


}

function cofeeMachine(arr) {

    let report = 0;
    for (let i = 0; i < arr.length; i++) {
        let coins = 0;
        let typeOfDrink;
        let typeOfCofee;
        let milk;
        let sugar;
        let priceProduct;
        let current = arr[i].split(', ').filter(x => x!= '');
        coins = Number(current[0]);
        typeOfDrink = current[1];

        if(typeOfDrink === 'coffee'){

            if(current.includes('caffeine')){
                typeOfCofee = 'caffeine';
                priceProduct = 0.80;
            }else if(current.includes('decaf')){
                typeOfCofee = 'decaf';

                priceProduct = 0.90;
            }
        }else if(typeOfDrink === 'tea'){
            priceProduct = 0.80;
        }

        if(current.includes('milk')){

            milk = (priceProduct * 0.10).toFixed(1);
            priceProduct += Number(milk);
        }

        if(Number(current[current.length - 1]) !== 0){
            sugar = 0.10;
            priceProduct += Number(sugar);
        }


        if(coins >= priceProduct){
            report += priceProduct;
            console.log(`You ordered ${typeOfDrink}. Price: ${priceProduct.toFixed(2)}$ Change: ${(coins - priceProduct).toFixed(2)}$`)
        }else{
            console.log(`Not enough money for ${typeOfDrink}. Need ${(priceProduct - coins).toFixed(2)}$ more.`)
        }

    }

    console.log(`Income Report: ${report.toFixed(2)}$`);

}


function atm(matrix) {

    let banknotes = [];
    let atmSum = 0;
    for (let i = 0; i < matrix.length; i++) {

        let current = matrix[i];

        if(current.length > 2){

            for (let j = 0; j < current.length; j++) {
                banknotes.push(current[j]);
            }
            atmSum = banknotes.reduce((a,b) => a + b);
            console.log(`Service Report: ${current.reduce((a,b) => a + b)}$ inserted. Current balance: ${atmSum}$.`)
        }else if(current.length === 2){

            let currnetnBalance = current[0];
            let moneyToWithdraw = current[1];

            if(currnetnBalance < moneyToWithdraw){
                console.log(`Not enough money in your account. Account balance: ${currnetnBalance}$.`)
                continue;
            }
            if(atmSum < moneyToWithdraw){
                console.log('ATM machine is out of order!');
                continue;
            }

            banknotes = banknotes.sort((a,b) => b - a);
            let indexToRemove = [];
            for (let j = 0; j < banknotes.length; j++) {
                let banknote = banknotes[j];
                if(moneyToWithdraw  - banknote >=0){
                    moneyToWithdraw -= banknote;
                    indexToRemove.push(banknotes[j]);
                    if(moneyToWithdraw === 0){
                        break;
                    }
                }
            }

           indexToRemove.forEach(x => {

               let index = banknotes.indexOf(x);

               banknotes.splice(index, 1)
           });

           console.log(`You get ${current[1]}$. Account balance: ${current[0] - current[1]}$. Thank you!`)
        }else if(current.length === 1){

            let banknote = current[0];

            let count = 0;

            banknotes.forEach(x => {

                if(x === banknote){
                    count++;
                }
            });

            console.log(`Service Report: Banknotes from ${banknote}$: ${count}.`)
        }
    }

}


function softuni(fundamentals, advanced, applications, form) {

    let coursePrices = {

        Fundamentals: 170,
        Advanced: 180,
        Applications: 190

    };

    let totalPrice = 0;
    if(form === 'onsite'){

        if(advanced && fundamentals && !applications){

            totalPrice = coursePrices.Fundamentals + coursePrices.Advanced - coursePrices.Advanced * 0.10;
        }else if(advanced && fundamentals && applications){

            totalPrice = coursePrices.Fundamentals + coursePrices.Advanced - coursePrices.Advanced * 0.10 + coursePrices.Applications;

            totalPrice -= totalPrice * 0.06;
        }else{

            if(advanced){
                totalPrice += coursePrices.Advanced;
            }
            if(fundamentals){
                totalPrice += coursePrices.Fundamentals;
            }
            if(applications){
                totalPrice += coursePrices.Applications;
            }

        }

    }else if(form === 'online'){

        coursePrices.Fundamentals -= coursePrices.Fundamentals * 0.06;
        coursePrices.Applications -= coursePrices.Applications * 0.06;
        coursePrices.Advanced -= coursePrices.Advanced * 0.06;
        if(advanced && fundamentals && !applications){

            totalPrice = coursePrices.Fundamentals + coursePrices.Advanced - coursePrices.Advanced * 0.10;
        }else if(advanced && fundamentals && applications){

            totalPrice = coursePrices.Fundamentals + coursePrices.Advanced - coursePrices.Advanced * 0.10 + coursePrices.Applications;

            totalPrice -= totalPrice * 0.06;
        }else{

            if(advanced){
                totalPrice += coursePrices.Advanced;
            }
            if(fundamentals){
                totalPrice += coursePrices.Fundamentals;
            }
            if(applications){
                totalPrice += coursePrices.Applications;
            }

        }

    }


    console.log(Math.round(totalPrice));
}

function eVenetka(arr) {

    let town = {};

   for (let curr of arr){

       if(!town[curr.town]){
           town[curr.town] = [];
       }

       if(town[curr.town]){
           town[curr.town].push(curr);
       }
   }

    let mostProfitableTown = Object.keys(town).sort((a,b) =>
        town[b].reduce((sum,b) => {
           return sum += b.price;
        },0) -
        town[a].reduce((sum,b) => {
            return sum += b.price;
        },0)
        || town[b].length - town[a].length
        || a.localeCompare(b))[0];

    let modelsCount = {};

    town[mostProfitableTown].forEach(m => {
        if(!modelsCount[m.model]){

            modelsCount[m.model] = [];
        }
        if(modelsCount[m.model]){

            modelsCount[m.model].push(m);

        }
    });

    let mostDrivenModel = Object.keys(modelsCount).sort((a,b) =>
        modelsCount[b].length - modelsCount[a].length
        || Math.max(modelsCount[b].map(a => a.price)) - Math.max(modelsCount[a].map(a => a.price))
        || a.localeCompare(b)
    )[0];

    let listOfTownsWithTheMostDrivenModel = Object.keys(town).filter(k => town[k].filter(x => x.model === mostDrivenModel).length !== 0);

    listOfTownsWithTheMostDrivenModel.sort((a,b) => a.localeCompare(b));

    let sum = town[mostProfitableTown].map(x => x.price).reduce((a,b) => a + b);
    console.log(`${mostProfitableTown} is most profitable - ${sum} BGN`);

    console.log(`Most driven model: ${mostDrivenModel}`);


    listOfTownsWithTheMostDrivenModel.forEach(x => {

        let regNumbers = town[x].filter(x => x.model === mostDrivenModel).map(x => x.regNumber);

        regNumbers.sort((a,b) => a.localeCompare(b));

        console.log(`${x}: ${regNumbers.join(', ')}`);

    });
}


function autoService(arr){

    let instructions = [];
    let parts = {};
    for (let list of arr){

        let [command, model, part, serialNumber] = list.split(' ');

        if(command === 'instructions'){
            instructions.push(model);
        }else if(command === 'addPart'){

            if(!parts[model]){

                parts[model] = {};
            }

            if(!parts[model][part]){
                parts[model][part] =[];

            }

            if(parts[model][part]){
                parts[model][part].push(serialNumber);
            }
        }else if(command === 'repair'){

            let carToRepair = JSON.parse(part);

            if(instructions.includes(model)){

                let brokenParts = Object.keys(carToRepair).filter(x => carToRepair[x] === 'broken');

                if(brokenParts.length !== 0){
                    brokenParts.forEach(p => {

                        if(parts[model] && parts[model][p]){

                                carToRepair[p] = parts[model][p][0];
                                parts[model][p].splice(0,1);
                        }


                    });
                }

                console.log(`${model} client - ${JSON.stringify(carToRepair)}`);
            }else{
                console.log(`${model} is not supported`)
            }
        }

    }

    for (let part of Object.keys(parts).sort((a,b) => a.localeCompare(b))){
        console.log(`${part} - ${JSON.stringify(parts[part])}`)
    }

}

function coffeeConsumption(days) {

    let cofeeInMl = 0;
    let cocaColaInMl = 0;
    let teaInMl = 0;
    let energyDrinkInMl = 0;
    let fiveDayCounter = 0;
    let nineDayCounter = 0;

    for (let i = 1; i <= days; i++) {
        fiveDayCounter++;
        nineDayCounter++;
        if(fiveDayCounter === 5){

            energyDrinkInMl += 3 * 500;
            cofeeInMl += 3 * 150;
            cocaColaInMl += 2 * 250;
            teaInMl += 3 * 350;
            fiveDayCounter = 0;
        }else if(nineDayCounter === 9){
            cofeeInMl += 3 * 150;
            cocaColaInMl += 6 * 250;
            teaInMl += 3 * 350;
            energyDrinkInMl += 2 * 500;
            nineDayCounter = 0;
        }else{
            cofeeInMl += 3 * 150;
            cocaColaInMl += 2 * 250;
            teaInMl += 3 * 350;
        }
    }

    let caffeineMiligram = cofeeInMl * 0.4;
    let cocaColaMiligram = cocaColaInMl * 0.08;
    let teaMiligram = teaInMl * 0.2;
    let energyMiligram = energyDrinkInMl * 0.3;

    let sum = caffeineMiligram + cocaColaMiligram + teaMiligram + energyMiligram;

    console.log(`${sum} milligrams of caffeine were consumed`);


}


function trainStation(capacity, arr) {

    let numOfVagons = arr.length;

    let train = [];
    let excessPassangers = 0;
    let copyArr = arr.slice(0);

    for (let i = 0; i < numOfVagons; i++) {
        if(arr[i] <= capacity){
            train.push(arr[i]);
        }else if(arr[i] > capacity){

            train.push(capacity);
            excessPassangers = arr[i]- capacity;
            arr[i+ 1] += excessPassangers;
        }
    }
    console.log(train);
    if(copyArr.reduce((a,b) => a+b) - train.reduce((a,b) => a+b) != 0){

        console.log(`Could not fit ${copyArr.reduce((a,b) => a+b) - train.reduce((a,b) => a+b)} passengers`);
    }else{
        console.log('All passengers aboard')
    }
}


function aggregate(arr){

    console.log('Sum = ' + arr.reduce((a,b) => a+b));

    console.log('Min = ' + Math.min.apply(0, arr));

    console.log('Max = ' + Math.max.apply(0, arr));

    console.log('Product = ' + arr.reduce((a,b) => a * b));

    console.log('Product = ' + arr.reduce((a,b) => a + b,''));
}


function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;

}

function result(func){

    return function(value){

        return func(',', '$', true, value);

        };
}


let dollarFormatter = result(currencyFormatter);


function commandProcessor() {

    let string = '';

    function append(input) {

        string += input;
    }
    
    function removeStart(input) {
        
       string =  string.substring(input);
    }

    function removeEnd(input) {
        string =  string.substr(0, string.length - input);
    }

    function print() {
        console.log(string);
    }


    return{
        append,
        removeStart,
        removeEnd,
        print
    };
}

let test = commandProcessor();

test.append('zdr');


function returnMax(arr) {

    return Math.max.apply(0, arr);
}


function sortArray(arr, sort) {

    if(sort === 'asc'){

        return arr.sort((a,b) => a - b);
    }else{
        return arr.sort((a,b) => b - a);
    }
}


function argumentInfo(){

    let args = arguments;

    let types = {};

    for (let i = 0; i < args.length; i++) {


        if(typeof args[i] != 'object'){
            if(!types[typeof args[i]]){
                types[typeof args[i]] = 1;
            }else{
                types[typeof args[i]]++;
            }
            console.log(typeof args[i] + ": " +args[i])
        }else{
          if(Array.isArray(args[i])){
              if(!types['object']){
                  types['object'] = 1;
              }else{
                  types['object']++;
              }
          }else{
              if(!types['string']){
                  types['string'] = 1;
              }else{
                  types['string']++;
              }
          }
            console.log(typeof args[i] + ":");
        }
        
    }

    for (let curr of Object.keys(types).sort((x,y) => types[y] - types[x])){

        console.log(curr +" = " + types[curr]);
    }

}

function calculate(number) {
    let sum = number;

    function add(nextNumber) {
        sum += nextNumber;
        return add;
    }

    add.toString = function () {
        return sum;
    };

    return add;
}

calculate(1)(2)(3)(4);


function bmi(name, age, weight, height) {

    function createPerson() {
        this.name = name;
        this.personalInfo = {
             age,
            weight,
            height
        };
        this.BMI = Math.round(weight / Math.pow(height / 100, 2));
        if(this.BMI < 18.5){
            this.status = 'underweight';
        }else if(this.BMI > 18.5 && this.BMI < 25){
            this.status = 'normal';
        }else if(this.BMI >= 25 && this.BMI < 30){
            this.status = 'overweight';
        }else if(this.BMI >= 30){
            this.status = 'obese';
            this.recommendation = 'admission required';
        }
    }

    let person = {};

    createPerson.call(person);

    return person;
}


(function () {
    let output;
     let add = function(arr1, arr2) {
        output = [];
         output.push(arr1[0] + arr2[0]);
         output.push(arr1[1] + arr2[1]);
        return output;
    };

    function multiply(arr1, arr2) {
       output = [];
        output.push(arr1[0] * arr2);
        output.push(arr1[1] * arr2);
        return output;
    }

    function length(arr1, arr2) {

        output = Math.sqrt(arr1[0] * arr1[0] + arr1[1] * arr1[1]);
        return output;
    }

    function dot(arr1, arr2) {
//[2, 3], [2, -1]


        output = arr1[0] * arr2[0] + arr1[1] * arr2[1];
        return output;

    }

    function cross(arr1, arr2) {
        output = arr1[0] * arr2[1] - arr1[1] * arr2[0];
        return output;
    }


    return {
        add,
        multiply,
        length,
        dot,
        cross
    };

})();


function breakfastRobot() {

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    return function solve(input) {

        let arr = input.split(' ').filter(x => x != '');

        let command = arr.shift();

    if(command === 'restock'){
        function updateStock(type, quantity) {

            return this[type] += Number(quantity);
        }

        updateStock.apply(stock,arr);
        return 'Success';

    }else if(command === 'prepare'){

        let food = {

            Apple: {
                carbohydrate: 1,
                flavour: 2

            },

            Lemonade: {
                carbohydrate: 10,
                flavour: 20
            },

            Burger: {
                carbohydrate: 5,
                fat: 7,
                flavour: 3
            },

            Eggs: {
                protein: 5,
                fat: 1,
                flavour: 1
            },

            Turkey: {
                protein: 10,
                carbohydrate: 10,
                fat: 10,
                flavour: 10
            }

        };

      
        for (let nutrition of Object.keys(food).filter(x => x.toLowerCase() === arr[0])){

            let canMake = '';

            for (let ingredients of Object.keys(food[nutrition])){
                if(stock[ingredients] - food[nutrition][ingredients] * Number(arr[1]) < 0){
                    canMake = ingredients;
                    break;
                }
            }

            if(canMake !== ''){
                return`Error: not enough ${canMake} in stock`;
            }else{
                for (let ingredients of Object.keys(food[nutrition])){
                    stock[ingredients] -= food[nutrition][ingredients] * Number(arr[1]);
                    }

                return 'Success';

                }

            }
        }else if(command === 'report'){
          return `protein=${stock['protein']} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }

    };
}

let manager = breakfastRobot();
manager('restock carbohydrate 10');
manager("restock flavour 10");
manager('prepare apple 1');
manager('restock fat 10');
manager('prepare burger 1');
manager('report');


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 133,
    downvotes: 68
};


function updatePost(task) {

    if(task === 'upvote'){
        this.upvotes++;
    }else if(task === 'downvote'){
        this.downvotes++;
    }else if(task === 'score'){

        let returnReport = [];

        if(this.downvotes + this.upvotes > 50){

            let maxVotes = Math.max(this.upvotes, this.downvotes);

            let inflation = Math.ceil(maxVotes * 0.25);


            returnReport.push(this.upvotes + inflation);
            returnReport.push(this.downvotes + inflation);
            returnReport.push(returnReport[0] - returnReport[1]);

            let calculateMajority = ( this.upvotes / (this.upvotes + this.downvotes)) * 100 > 66;
            console.log(calculateMajority);
            console.log((returnReport[0] / (returnReport[0] + returnReport[1])) * 100);
            if(calculateMajority){
                returnReport.push('hot');
            }else if(!calculateMajority && returnReport[2] >= 0 && returnReport[0] > 100 && returnReport[1] > 100){
                returnReport.push('controversial');
            }else if(returnReport[2] < 0 && returnReport[0] + returnReport[1] >= 10){
                returnReport.push('unpopular');
            }else if(returnReport[0] + returnReport[1] < 10){
                returnReport.push('new');
            }

        }else{
            returnReport.push(this.upvotes);
            returnReport.push(this.downvotes);
            returnReport.push(returnReport[0] - returnReport[1]);

            let calculateMajority = ( returnReport[0]) / (returnReport[0] + returnReport[1])  * 100 > 66 && returnReport[0] > 1;
            console.log(calculateMajority);

            if(calculateMajority){
                returnReport.push('hot');
            }else if(!calculateMajority && returnReport[2] >= 0 && returnReport[0] > 100 && returnReport[1] > 100){
                returnReport.push('controversial');
            }else if(returnReport[2] < 0 && returnReport[0] + returnReport[1] >= 10){
                returnReport.push('unpopular');
            }else if(returnReport[0] + returnReport[1] < 10){
                returnReport.push('new');
            }else{
                returnReport.push('new');
            }

        }
        return returnReport;
    }


}


function sumArray(arr, start, end) {

    if(!Array.isArray(arr)){

        return NaN;
    }

    if(start < 0 ){
        start = 0;
    }


    if(end >= arr.length){

        end = arr.length - 1;
    }
    let sum = 0;

    for (let i = start; i <= end ; i++) {

        let eval = Number(arr[i]);

        if(eval === NaN){
            return NaN;
        }

        sum += eval;

    }

    return sum;

}



function printDeckOfCards(arr) {

    let deck = [];

    function cardFactory(face, suit) {

        let faces ={
            2: 2,
            3:3,
            4:4,
            5:5,
            6:6,
            7:7,
            8:8,
            9:9,
            10:10,
            J:'J',
            Q:'Q',
            K:'K',
            A:'A'
        };

        let suits = {

            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };

        class Card {
            constructor(face, suit) {
                if(faces[face] && suits[suit]) {
                    this.f = face;
                    this.s = suit;
                }else{
                     deck.push(`Invalid card: ${face}${suit}`);
                }
            }

            toString() {

                return this.f + suits[this.s];
            }
        }

        let card = new Card(face,suit);

        let rex = /Invalid card: /;
            if(rex.exec(card.toString())){
                deck = [];
                deck.push(card);

                return false;
            }
            else{

                deck.push(card);
                return true;
            }

    }

    for (let i = 0; i < arr.length; i++) {
        let currFace;
        let currSuit= arr[i][arr[i].length - 1];
        if(arr[i].length === 3){

            currFace = arr[i][0].toString() + arr[i][1].toString();
        }else{
            currFace = arr[i][0]
        }


        let cango = cardFactory(currFace, currSuit);

        if(!cango){
            break;
        }

    }


    console.log(deck.join(' '));

}

let inputObj = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: '   asdasd<>'
};


function requestValidator(obj) {

    if(obj.method === undefined){
        throw new Error(`Invalid request header: Invalid Method`);
    }else if(obj.uri === undefined){
        throw new Error(`Invalid request header: Invalid URI`);
    }else if(obj.version === undefined){
        throw new Error(`Invalid request header: Invalid Version`);
    }else if(obj.message === undefined){
        throw new Error(`Invalid request header: Invalid Message`);
    }

    let methodValidation = {
        GET: 'GET',
        POST: 'POST',
        DELETE: 'DELETE',
        CONNECT: 'CONNECT'
    };

    if(!methodValidation[obj.method]){
        throw new Error(`Invalid request header: Invalid Method`);
    }

    let uriValidation = /^[\w\.]+$/;

    if(!uriValidation.exec(obj.uri)){
        throw new Error(`Invalid request header: Invalid URI`);
    }

    let versionValidator = {
        'HTTP/0.9': 'HTTP/0.9',
        'HTTP/1.1': 'HTTP/1.1',
        'HTTP/1.0': 'HTTP/1.0',
        'HTTP/2.0': 'HTTP/2.0',
    };

    if(!versionValidator[obj.version]){
        throw new Error(`Invalid request header: Invalid Version`);
    }

    let messageValidator = /^[^<>\\&'"]+$/;

    if(!messageValidator.exec(obj.message)){
        if(!obj.message == ''){
            throw new Error(`Invalid request header: Invalid Message`);
        }

    }

    return obj;
}

class Rectangle {

    constructor(width, height, color){

        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea(){

        return this.width * this.height;
    }

}

class Person {

    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

function getPersons() {
             class Person {

            constructor(firstName, lastName, age, email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    return [new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Johnson', 25),
        new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    ]
}

class Circle {

    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return 2 * this.radius;
    }

    set diameter(diameter){
        this.radius = diameter / 2;
    }

    get area(){
        return this.radius * this.radius * Math.PI;
    }
}

class Point {

    constructor(x, y){

        this.x = x;
        this.y = y;
    }

    static distance(pointOne, pointTwo){

        return Math.sqrt(Math.pow(pointOne.x - pointTwo.x, 2) + (Math.pow(pointOne.y - pointTwo.y, 2)));
    }
    
}

let resullllt = (function () {

    let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    let suits = {

        SPADES: '\u2660',
        HEARTS: '\u2665',
        DIAMONDS: '\u2666',
        CLUBS: '\u2663'
    };

    class Card {
        constructor(face, suit) {
            if(faces.includes(face) && Object.keys(suits).filter(x => suits[x] === suit).length !==0) {
                this.face = face;
                this.suit = suit;
            }else{
                throw new Error();
            }
        }

        get face() {
            return this._face;
        }

        set face(face) {
            if (!faces.includes(face)) {
                throw new Error('Invalid face!');
            }

            this._face = face;
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            if (!Object.values(suits).some(s => s === suit)) {
                throw new Error('Invalid suit!');
            }

            this._suit = suit;
        }


    }


    return {
        Suits: suits,
        Card,
    }


}());


class Request {
    constructor(method, uri, version, message){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

function tickets(arr, sortCriteria) {

    class Ticket{
        constructor(destination, price, status){

            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let collection = [];
    arr.forEach(t => {

        let curr = t.split('|').filter(x => x != '');
        collection.push(new Ticket(curr[0], Number(curr[1]), curr[2]));

    });

    let output = collection.sort((a,b) => a[sortCriteria] > b[sortCriteria]);
   return output;

}


class Rat {
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    unite(rats){
        if(rats instanceof  Rat)
        this.unitedRats.push(rats);
    }

    getRats(){
        return this.unitedRats;
    }

    toString(){

        if(this.unitedRats.length !=0){
            let str = '##' + this.unitedRats.map(x => x.name).join('\n##');
            return `${this.name}\n${str}`
        }
        else{
            return `${this.name}`
        }
    }
}

class Stringer {

    constructor(str, length){
        this.innerString = str;
        this.innerLength = length;
        this.showStr = '';
    }

    increase(length){

        this.innerLength += length;
    }
    decrease(length){
        if(this.innerLength - length < 0){
            this.innerLength = 0;
        }else{
            this.innerLength-=length;
        }
    }

    toString(){
        if(this.innerString.length > this.innerLength){
            this.showStr = this.innerString.slice(0, this.innerLength) + '...';
        }

        if(this.innerLength === 0){
            this.showStr = '...';
        }

        if(this.innerString.length <= this.innerLength){
            this.showStr = this.innerString;
        }
        return this.showStr;
    }

}

let some = (function () {
    let id = 0;

    return class Extensible {
        constructor() {
            this.id = id++;
        }

        extend(template) {
            for (const property in template) {
                if (typeof template[property] === 'function') {
                    Extensible.prototype[property] = template[property];
                } else {
                    this[property] = template[property];
                }
            }
        }
    }
})();

class SortedList{
    constructor(){
        this.list = [];
        this.size = this.list.length;
    }

    add(element){
        this.list.sort((a,b) => a - b);
        this.size++;
        this.list.push(element);
        this.list.sort((a,b) => a - b);
    }

    remove(index){
        this.list.sort((a,b) => a - b);
        if(index >= 0 && index <= this.list.length - 1){
            this.size--;
            this.list.splice(Number(index), 1);
        }
        this.list.sort((a,b) => a - b);
    }

     get(index){
        this.list.sort((a,b) => a - b);
        return this.list[index];
    }

}


class CheckingAccount {

    constructor(clientId, email, firstName, lastName){

        let cliendRgex = /^\d{6,6}$/;

        if(!cliendRgex.exec(clientId)){
            throw new TypeError("Client ID must be a 6-digit number");
        }

        this.cliendId = clientId;

        let emailRegex = /^\w+@\w+(\.\w+)*$/;

        if(!emailRegex.exec(email)){
            throw new TypeError("Invalid e-mail");
        }


        let nameNextRegex = /[^a-zA-Z]/;

        if(firstName.length < 3 || firstName.length > 20){
            throw new TypeError(`First name must be between 3 and 20 characters long`)
        }
        if(nameNextRegex.exec(firstName)){
            throw new TypeError("First name must contain only Latin characters");
        }
        if(lastName.length < 3 || lastName.length > 20){
            throw new TypeError(`Last name must be between 3 and 20 characters long`)
        }
        if(nameNextRegex.exec(lastName)){
            throw new TypeError("Last name must contain only Latin characters");
        }

        this.firstName = firstName;
        this.lastName = lastName;

    }

}


class Kitchen{

    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }


    loadProducts(arr){

        arr.forEach(p => {

            let current = p.split(' ').filter(x => x != '');

            let name = current[0];
            let quantity = +current[1];
            let price = +current[2];

            if(this.budget  - price>= 0){
                this.budget -= price;

                if(!this.productsInStock[name]){
                    this.productsInStock[name] = quantity;
                }else{
                    this.productsInStock[name] += quantity;
                }

                this.actionsHistory.push(`Successfully loaded ${quantity} ${name}`)
            }else{
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${name}`)
            }



        });

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price){

        if(!this.menu[meal]){

            this.menu[meal] ={
                products: neededProducts,
                price: Number(price)
            };

            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        }else{
            return `The ${meal} is already in our menu, try something different.`;
        }

    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...';
        }

        let info = '';

        for (let mealName of Object.keys(this.menu)) {
            info += `${mealName} - $ ${this.menu[mealName].price}\n`;
        }

        return info;
    }

    makeTheOrder(meal){

        if(!this.menu[meal]){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }else{
            let productsRequired = this.menu[meal].products;
            let cannotBeCompleted = false;
            productsRequired.forEach(p => {

                let product = p.split(' ').filter(x => x!='');

                let name = product[0];
                let quantity = product[1];

                if(!this.productsInStock[name]){
                    cannotBeCompleted = true;
                }else{
                    if(this.productsInStock[name] < quantity){
                        cannotBeCompleted = true;
                    }
                }
            });

            if(cannotBeCompleted){
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }else
                productsRequired.forEach(p => {
                    let product = p.split(' ').filter(x => x!= '');

                    let name = product[0];
                    let quantity = +product[1];

                    this.productsInStock[name] -= quantity;

                });

                this.budget += this.menu[meal].price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }
    }
}


function orderRectangles(arr) {

    let rects = [];
    
    function createRectangles(width, height) {

        let rectangle = {

            width,
            height,
            area(){
                return this.width * this.height;
            },
            compareTo(other){
                let result = other.area() - this.area();

                return result || (other.width - this.width);
            }
        };

        return rectangle;
    }

    for (let [width, height] of arr){
        let current = createRectangles(width,height);

        rects.push(current);
    }

    rects.sort((a,b) => a.compareTo(b));

    return rects;

}

function getFibonator() {
    let sum = 0;
    let first = 0;
    let second = 1;

    return () =>{
        sum = first + second;
        first = second;
        second = sum;

        return first;

    }


}


function listProcessor(arr) {

    let command = (function processor() {

        let arr = [];

        return {
            add(element){
                arr.push(element);
            },
            remove(element){
               arr = arr.filter(x => x != element);
            },
            print(){
                console.log(arr.join(','));
            }

        };

    })();

    arr.forEach(el => {

        let current = el.split(' ').filter(x => x != '');

        let com = current[0];
        let elem = current[1];

        if(elem != undefined){

            command[com](elem);
        }else{
            command[com]();
        }

    });
}


function carFactory(arr) {

    let factory = (function create() {

        let cars = [];

        return {
            create(name){
                let obj = {name};
                cars.push(obj);
            },

            inherit(parent, child){
                let parentObj = cars.filter(x => x.name === parent)[0];

                let childObj = cars.filter(x => x.name === child)[0];

                Object.setPrototypeOf(childObj,parentObj);
            },

            set(name, key,value){

                let obj = cars.filter(x => x.name === name)[0];

                obj[key] = value;
            },

            print(name){

                let obj = cars.filter(x => x.name === name)[0];

                let str =[];
                Object.keys(obj).filter(x => x !== 'name').forEach(c => {
                    str.push(`${c}:${obj[c]}`);

                });

                while(true){

                    obj  = obj.__proto__;
                    let canGo = false;
                    Object.keys(obj).filter(x => x !== 'name').forEach(c => {
                        str.push(`${c}:${obj[c]}`);
                        canGo = true;

                    });
                    if(!canGo){
                        break;
                    }
                }

                console.log(str.join(', '));
            }
        }

    })();

    arr.forEach(x => {
        let input = x.split(' ').filter(x => x!= '');

        if(input.length === 2 && input.includes('create')){

            factory.create(input[1]);

        }else if(input.length === 4 && input.includes('create') && input.includes('inherit')){

            factory.create(input[1]);
            factory.inherit(input[3], input[1]);
        }else if(input.length === 4 && input.includes('set')){

            factory.set(input[1], input[2], input[3]);
        }else if(input.includes('print')){
            factory.print(input[1]);
        }


    });

}


function domManip() {

    let commandExec = (function calculate() {

        let first;
        let second;
        let result;

        let Manipulate = {


            init(selector1, selector2, result){

                first = document.querySelector(selector1);
                second = document.querySelector(selector2);
                result = document.querySelector(result);
            },

            add(){

                result.value = first.value + second.value;
            },

            subtract(){

                result.value = first.value - second.value;

            }
        };

        return Manipulate;

    })();

    return commandExec;

}

(function manipArr() {

    Array.prototype.last = function() {

        return this[this.length - 1];
    };

    Array.prototype.skip = function(n){

        let result = [];
        if(n < 0){
            n = 0;
        }else if(n > this.length - 1){
            n = this.length - 1;
        }
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }

        return result;

    };

    Array.prototype.take = function(n){

        let result = [];

        if(n < 0){
            n = 0;
        }else if(n > this.length - 1){
            n = this.length - 1;
        }
        for (let i = 0; i < n; i++) {

            result.push(this[i]);
        }

        return result;
    };

    Array.prototype.sum =  function(){

        let result = 0;

        for (let i = 0; i < this.length; i++) {

            result += this[i];
        }

        return result;
    };

    Array.prototype.average = function(){

        return this.sum() / this.length;
    }
})();


function constructionCrew(obj) {

    function changeObj(obj) {
        if(this.hasOwnProperty('dizziness'))
        if(this.dizziness === true){
            this.levelOfHydrated += 0.1 * this.weight * this.experience;
            this.dizziness = false;
        }
    }

    changeObj.apply(obj);

    return obj;
}

function assembleCar(obj) {

    function determineEngine(obj) {

        if(obj.power <= 90){
            return { power: 90,
                volume: 1800 };
        }else if(obj.power <= 120){
            return { power: 120,
                volume: 2400 };
        }else if(obj.power <= 200){
            return { power: 200,
                volume: 3500 };
        }

    }

    function determineCoupe(obj) {

        if(obj.carriage === 'hatchback'){
            return { type: 'hatchback', color: obj.color }

        }else if(obj.carriage === 'coupe'){
            return { type: 'coupe', color: obj.color }
        }
    }

    function addWheels(obj) {

        let arr = [];
        if(obj.wheelsize % 2 !== 0){
            for (let i = 0; i <= 3; i++) {
                arr.push(obj.wheelsize);
            }
        }else{
            for (let i = 0; i <= 3; i++) {
                arr.push(obj.wheelsize - 1);
            }
        }

        return arr;

    }
    let car = {};
    function assemble(obj) {

        this.model = obj.model;
        this.engine = determineEngine(obj);
        this.carriage = determineCoupe(obj);
        this.wheels = addWheels(obj);

    }

    assemble.call(car, obj);

    return car;
}

function extensibleObject() {

    let obj = {

        extend: function (template) {
            
            Object.keys(template).forEach(k => {
                if(typeof template[k] === 'function'){
                   this.__proto__[k] = template[k];
                }else{
                    this[k] = template[k];
                }
            })
        }
    };

    return obj;
}

let stringExtensions = (function () {

    String.prototype.ensureStart = function (str) {
        let available = true;
        let result = this.toString();
        for (let i = 0; i < str.length; i++) {

            if(this[i] === str[i]){

            }else{
                available = false;
                break;
            }
        }

        if(!available){
            result = str + this;
        }

        return result;
    };

    String.prototype.isEmpty = function () {
        if(this.length === 0){
            return true;
        }else{
            return false;
        }
    };


    String.prototype.ensureEnd = function (str) {

        let result = this.toString();
        let counter = str.length - 1;
        let available = true;
        if(!this.isEmpty()){
            for (let i = result.length - 1; i >= 0 ; i--) {
                if (counter === -1){
                    if(i === 0){
                        available = false;
                    }
                    break;
                }

                if(str[counter] === result[i]){

                }else{
                    available = false;
                    break;
                }
                counter--;

            }

        }else {
            available = false;
        }
        if (available){

        }else{
            result += str;
        }

        return result;
    };

    String.prototype.truncate = function(n){


        let result = this.toString();

        if(result.length < n){
            return result;
        }
        let arr = result.split(' ').filter(x => x != '');
        let counter = arr.length - 1;
        if(result.length > n){

            if(arr.length === 1){
                let res = '';
                for (let i = 0; i < n - 3; i++) {
                    res += arr[0][i];
                }

                if(n < 4){
                    for (let i = 0; i < n; i++) {
                        res+= '.';
                    }
                }else{
                    res += '...';
                }
                return res;
            }else{
                while(true){
                    arr.splice(counter, 1);

                    let count = arr.reduce((ac, x) => {
                        return ac + x.length;
                    }, 0);

                    if(count  + 3 + arr.length - 1<= n){
                        break;
                    }
                    counter--;
                }

                return arr.join(' ') + '...';
            }

        }else{
            return arr.join(' ');
        }

    };

    String.format = function (str, params) {

        let result = str;
        let rgex = /{(\d)}/;
        for (let i = 1; i < arguments.length; i++) {
            result = result.replace(rgex, arguments[i]);
        }

        return result;
    };

})();


function sortList() {

let x = (function sort() {
    let arr = [];
    let count = 0;
    return{

        add(el){
            arr.push(el);
            arr.sort((a,b) => a - b);
            count++;
            this.size = count;
        },
        remove(index){
            arr.sort((a,b) => a - b);
            if(index < 0 || index > arr.length - 1 || arr.length === 0){

            }else{
                arr.splice(index, 1); count--; this.size = count;
            }

        },
        get(index){
            arr.sort((a,b) => a - b);
            if(index < 0 || index > arr.length - 1 || arr.length === 0){

            }else
                return arr[index];
        },
        size: count
    }
})();

return x;

}


function createClassess() {

    class Person {
        constructor(name, email){
            this.name = name;
            this.email = email;
        }

        toString(){
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name,email);

            this.subject = subject;
        }

        toString(){
            let str = super.toString().slice(0,super.toString().length - 1);

            return str + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person{
        constructor(name, email, course){
            super(name,email);

            this.course = course;
        }

        toString(){
            let str = super.toString().slice(0,super.toString().length - 1);

            return str + `, course: ${this.course})`;
        }
    }


    return {
        Person,
        Teacher,
        Student,
    }
}


function extendPrototype(cl) {

    cl.prototype.species = 'Human';

    cl.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }

}

class Person123 {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    toString(){
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
    }
}

function shapesCreator() {

    class Figure {
        constructor() {
            if (this.constructor === Figure) {
                throw new TypeError('Abstract class "Widget" cannot be instantiated directly.');
            }
        }

        get area() {

        }
    }

    class Circle extends Figure{
        constructor(radius){
            super();
            this.radius = radius;
        }

        get area(){
            return Math.PI * this.radius * this.radius;
        }

        toString(){

            return `${this.constructor.name} - radius: ${this.radius}`
        }
    }


    class Rectangle extends Figure{
        constructor(width, height){
            super();
            this.width = width;
            this.height = height;
        }


        get area(){
            return this.width * this.height;
        }

        toString(){

            return `${this.constructor.name} - width: ${this.width}, height: ${this.height}`;
        }
    }


    return{
        Figure,
        Rectangle,
        Circle
    }

}

function createBaloons() {


    class Balloon{
        constructor(color, gasWeight){
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon{

        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);

            this.ribbon = {
                color: ribbonColor,
                length: ribbonLength,
            }

        }

        get ribbon(){
            return this._ribbon;
        }

        set ribbon(val){
            this._ribbon = val;
        }

    }

    class BirthdayBalloon extends PartyBalloon{
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;
        }

        get text(){
            return this._text;
        }
        set text(val){
            this._text = val;
        }

    }


    return {
        Balloon,
        BirthdayBalloon,
        PartyBalloon,
    }

}


function createWorkHierarchy() {

    class Employee{
        constructor(name,age) {
            if (this.constructor === Employee) {
                throw new Error();
            }

            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];

        }

        work(){
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }

        collectSalary(){
            console.log(`${this.name} received ${this.getSalary()} this month.`)
        }

        getSalary(){
            return this.salary;
        }
    }

    class Junior extends Employee{

        constructor(name,age) {
            super(name,age);

            this.tasks.push(' is working on a simple task.');

        }

    }

    class Senior extends Employee{
        constructor(name,age) {
            super(name,age);

            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');

        }

    }

    class Manager extends Employee{
        constructor(name, age) {
            super(name,age);
            this.dividend = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');

        }

        getSalary(){
            return this.salary + this.dividend;
        }

    }

    return{
        Employee,
        Junior,
        Senior,
        Manager
    }
}



function createPosts() {

    class Post{
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes) {
            super(title,content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(com){
            this.comments.push(com);
        }

        toString(){

            let result = super.toString() + `\nRating: ${this.likes - this.dislikes}`;

            if(this.comments.length !== 0){
                result += `\nComments:\n * ` + this.comments.join('\n * ')
            }
            return result;
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view(){
            this.views++;
            return this;
        }

        toString(){
            return super.toString() + `\nViews: ${this.views}`
        }
    }


    return{
        Post,
        SocialMediaPost,
        BlogPost,
    }
}


function createElemelons() {

    class Melon{
        constructor(weight, melonSort) {
            if (this.constructor === Melon) {
                throw new Error('Abstract class cannot be instantiated directly');
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }

        toString(){

            return `Element: ${this.constructor.name.replace('melon','')}\nSort: ${this.melonSort}`
        }

    }

    class Watermelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return super.toString() + `\nElement Index: ${this.elementIndex}`
        }
    }


    class Firemelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return super.toString() + `\nElement Index: ${this.elementIndex}`
        }
    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return super.toString() + `\nElement Index: ${this.elementIndex}`
        }
    }


    class Airmelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return super.toString() + `\nElement Index: ${this.elementIndex}`
        }
    }

    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.currentForm = 'Watermelon';
            this.tasks = ['Firemelon', 'Earthmelon','Airmelon', 'Watermelon'];
        }

        morph(){


            let currentTask = this.tasks.shift();
            this.currentForm = currentTask;
            this.tasks.push(currentTask);

        };

        toString(){
            return `Element: ${this.currentForm.replace('melon','')}\nSort: ${this.melonSort}` + `\nElement Index: ${this.elementIndex}`;
        }
    }

    Melolemonmelon.prototype = Watermelon;
    return{
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melon,
        Melolemonmelon
    }
}



function manufactureComputer() {

    class Origin{

        constructor(manufacturer) {

            this.manufacturer = manufacturer;

        }

    }

    class Keyboard extends Origin{

        constructor(manufacturer, responseTime ) {
            super(manufacturer);

            this.responseTime = responseTime;

        }
    }

    class Monitor extends Origin{

        constructor(manufacturer,width, height ) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }


    class Battery extends Origin{

        constructor(manufacturer, expectedLife ) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }


    class Computer extends Origin{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            super(manufacturer);
            if (this.constructor === Computer) {
                throw new Error('Abstract class cannot be instantiated directly');
            }

            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;

        }

    }

    class Laptop extends Computer{

        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery ) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);

            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery(){
            return this._battery;
        }

        set battery(val){

            if(val.constructor.name === 'Battery'){
                this._battery = val;
            }else{
                throw TypeError('TypeError');
            }
        }


    }

    class Desktop extends Computer{

        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);

            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get monitor(){
            return this._monitor;
        }

        set monitor(val){

            if(val.constructor.name === 'Monitor'){
                this._monitor = val;
            }else{
                throw TypeError('TypeError');
            }
        }

        get keyboard(){
            return this._keyboard;
        }

        set keyboard(val){

            if(val.constructor.name === 'Keyboard'){
                this._keyboard = val;
            }else{
                throw TypeError('TypeError');
            }
        }


    }

    return{
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop,
    }

}


function createMixins() {
    
    function computerQualityMixin (classToExtend) {

        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };

        classToExtend.prototype.isFast = function () {

            if(this.processorSpeed > this.ram / 4){
                return true;
            }else{
                return false;
            }

        };

        classToExtend.prototype.isRoomy = function () {
            if(this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)){
                return true;
            }else{
                return false;
            }
        }
    }

    function styleMixin(classToExtend) {

        classToExtend.prototype.isFullSet = function () {

            if(this.keyboard.manufacturer === this.monitor.manufacturer){
                return true;
            }else{
                return false;
            }
        };

        classToExtend.prototype.isClassy = function () {

            if(this.battery.expectedLife >= 3 && (this.color === 'Black' || this.color === 'Silver') && this.weight < 3){
                return true;
            }

            return false;
        }
    }


    return{
        computerQualityMixin,
        styleMixin,
    }
}

class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget){

        if(budget < this.budget){
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }

        if(!this.kids[grade]){
            this.kids[grade] = [];
        }

        if(this.kids[grade].filter(x => x === `${name}-${budget}`).length != 0){

            return `${name} is already in the list for this ${this.destination} vacation.`
        }

        this.kids[grade].push(`${name}-${budget}`);

        return this.kids[grade];
    }

    removeChild(name, grade){

        let kid;

        if(this.kids[grade]){

            kid = this.kids[grade].filter(x => {
                let lookFor = x.split('-').filter(x => x != '');

                let nameLook = lookFor[0];

                return nameLook === name
            });

            if(kid.length !== 0){

                this.kids[grade] = this.kids[grade].filter( x => x != kid[0]);
            }else{

                return `We couldn't find ${name} in ${grade} grade.`
            }

        }else{
            return `We couldn't find ${name} in ${grade} grade.`
        }

        return this.kids[grade];

    }

    get numberOfChildren(){

        let kidNumber = 0;
        Object.keys(this.kids).forEach(k =>{

            kidNumber += this.kids[k].length;

        });

        return kidNumber;
    }

    toString(){

        let str = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;

        if(this.numberOfChildren === 0){
            str = `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }else{
            Object.keys(this.kids).sort((a,b) => a.localeCompare(b)).forEach(k =>{
                let counter = 1;
                str += `Grade: ${k}\n`;
                let arr = this.kids[k];
                arr.forEach(x => {
                    str += `${counter}. ${x}\n`;
                    counter++;
                })
            });
        }

        return str;
    }

}

class Organization{

    constructor(name, budget) {

        this.name = name;
        this.budget = budget;
        this.employees = [];
        this.departmentsBudget = {
            marketing: this.budget * 0.4,
            finance: this.budget * 0.25,
            production: this.budget * 0.35,
        }
    }

    get departmentsBudget(){

        return this._departmentsBudget;
    }
    set departmentsBudget(val){

        this._departmentsBudget = val;
    }

    add(employeeName, department, salary){

        let realBudget = this.departmentsBudget[department];

        if(realBudget >= salary){
            this.departmentsBudget[department] -= salary;
            this.employees.push({
                employeeName,
                department,
                salary,
            });

            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`
        }

        return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${realBudget}.`


    }

    employeeExists(empName){

        let emp = this.employees.filter(x => x.employeeName === empName);

        if(emp.length !== 0){
            return `Mr./Mrs. ${emp[0].employeeName} is part of the ${emp[0].department} department.`
        }

        return `Mr./Mrs. ${empName} is not working in ${this.name}.`
    }

    leaveOrganization(employeeName) {
        let employeeIndex = this.employees.findIndex(e => e.employeeName === employeeName);

        if (employeeIndex === -1) {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        }

        const salary = this.employees[employeeIndex].salary;
        const department = this.employees[employeeIndex].department;
        this.employees.splice(employeeIndex, 1);
        this.departmentsBudget[department] += salary;

        return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
    }

    status(){

        let str = '';

        str += `${this.name.toUpperCase()} DEPARTMENTS:`;

        let marketing = `\nMarketing | Employees: ${this.employees.filter(x => x.department === 'marketing').length}: ${this.employees.filter(x => x.department === 'marketing').sort((a,b) => b.salary - a.salary).map(x => x.employeeName).join(', ')} | Remaining Budget: ${this.departmentsBudget['marketing']}`;
        let finance =   `\nFinance | Employees: ${this.employees.filter(x => x.department === 'finance').length}: ${this.employees.filter(x => x.department === 'finance').sort((a,b) => b.salary - a.salary).map(x => x.employeeName).join(', ')} | Remaining Budget: ${this.departmentsBudget['finance']}`;
        let production = `\nProduction | Employees: ${this.employees.filter(x => x.department === 'production').length}: ${this.employees.filter(x => x.department === 'production').sort((a,b) => b.salary - a.salary).map(x => x.employeeName).join(', ')} | Remaining Budget: ${this.departmentsBudget['production']}`;

        str += marketing;
        str += finance;
        str += production;

        return str;
    }

}

class Hotel{

    constructor(name,capacity) {

        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;

        this.hotelRooms = {
            single: Math.round(this.capacity * 0.5),
            double: Math.round(this.capacity * 0.3),
            maisonette: Math.round(this.capacity * 0.2),

        }

    }


    get roomsPricing(){
       return {
           single: 50,
           double: 90,
           maisonette: 135,
       }
    }

    get servicesPricing(){
        return {
            food: 10,
            drink: 15,
            housekeeping: 25,
        }
    }


    rentARoom(clientName, roomType, nights){

        if(this.hotelRooms[roomType] && this.hotelRooms[roomType] > 0){
            let booking = {
                clientName,
                roomType,
                nights,
                currentBookingNumber: this.currentBookingNumber,
            };

            this.bookings.push(booking);
            this.currentBookingNumber++;
            this.hotelRooms[roomType]-= 1;

            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber - 1}.`
        }

        let str = `No ${roomType} rooms available!`;

        Object.keys(this.hotelRooms).filter(x => this.hotelRooms[x] > 0).forEach(r => {
            str += ` Available ${r} rooms: ${this.hotelRooms[r]}.`;
        });

        return str;
    };

    roomService(currentBookingNumber, serviceType){

        let requiredBooking = this.bookings.filter(x => x.currentBookingNumber === currentBookingNumber);

        if(requiredBooking.length !== 0){
            if(this.servicesPricing[serviceType]){

                if(!requiredBooking[0]['services']){
                    requiredBooking[0]['services'] = [];
                }
                requiredBooking[0]['services'].push(serviceType);

                return `Mr./Mrs. ${requiredBooking[0].clientName}, Your order for ${serviceType} service has been successful.`;
            }else{
                return `We do not offer ${serviceType} service.`;
            }
        }else{
            return `The booking ${currentBookingNumber} is invalid.`;
        }

    }


    checkOut(currentBookingNumber){
        let requiredBooking = this.bookings.filter(x => x.currentBookingNumber === currentBookingNumber);
        let totalAmount = 0;
        let moneyForService = 0;
        if(requiredBooking.length !== 0){

            let nights = requiredBooking[0].nights;
            let roomType = requiredBooking[0].roomType;
            totalAmount = nights * this.roomsPricing[roomType];
            this.hotelRooms[roomType] += 1;
            let index = this.bookings.findIndex(x => x.currentBookingNumber === currentBookingNumber);
            if(requiredBooking[0]['services'] && requiredBooking[0]['services'].length !== 0){

                requiredBooking[0]['services'].forEach(s => {
                    moneyForService += this.servicesPricing[s];
                });
                this.bookings.splice(index, 1);
                return `We hope you enjoyed your time here, Mr./Mrs. ${requiredBooking[0].clientName}. The total amount of money you have to pay is ${totalAmount + moneyForService} BGN. You have used additional room services, costing ${moneyForService} BGN.`;
            }else{
                this.bookings.splice(index, 1);
                return `We hope you enjoyed your time here, Mr./Mrs. ${requiredBooking[0].clientName}. The total amount of money you have to pay is ${totalAmount} BGN.`;

            }



        }else {
            return `The booking ${currentBookingNumber} is invalid.`;
        }
    };


    report(){
        let str = `${this.name.toUpperCase()} DATABASE:`;
        let string =
        str+= '\n--------------------';

        if(this.bookings.length === 0){
            str += `\nThere are currently no bookings.`;
            return str;
        }

        this.bookings.forEach(b => {
          if(!b['services']){
              str += `\nbookingNumber - ${b.currentBookingNumber}`;
              str += `\nclientName - ${b.clientName}`;
              str += `\nroomType - ${b.roomType}`;
              str += `\nnights - ${b.nights}`;
              str += `\n----------`;
          }else{
              str += `\nbookingNumber - ${b.currentBookingNumber}`;
              str += `\nclientName - ${b.clientName}`;
              str += `\nroomType - ${b.roomType}`;
              str += `\nnights - ${b.nights}`;
              str += `\nservices: ${b.services.join(', ')}`;
              str += `\n----------`;
          }

        });

        return str.substr(0, str.length - 11);
    }


}


