function solve() {

    let namePattern = new RegExp(` (([A-Z]([A-Za-z]*)?)(-[A-Z][A-Za-z]*\\.)?-([A-Z][A-Za-z]*)?) `, 'g');


   let patternAirport = / ([A-Z]{3}\/[A-Z]{3}) /g;

   let patternFlightNumber = / (([A-Z]){1,3}(\d{1,5})) /g;

   let patternCompany = /- ([A-Z][A-Za-z]*)\*([A-Z][A-Za-z]*) /g;
    let twoNamesBool = false;

    let inputElement = document.getElementById('string').value.split(', ');

    let string = inputElement[0];


    let airportMatch = patternAirport.exec(string);

    let flightNumberMatch = patternFlightNumber.exec(string);

    let companyMatch = patternCompany.exec(string);
    console.log(companyMatch);

    let names = namePattern.exec(string)[1].toString().replace(/\-/g, ' ');


    let airport = airportMatch[1].split('\/');

    let flight = flightNumberMatch[1];

    let company = companyMatch[1] + ' ' + companyMatch[2];
    let resultElement = document.getElementById('result');

    let pElement = document.createElement('p');
    if(/name/.test(inputElement[1])){

        pElement.textContent = `Mr/Ms, ${names}, have a nice flight!`;
    }else if(/flight/.test(inputElement[1])){

        pElement.textContent = `Your flight number ${flight} is from ${airport[0]} to ${airport[1]}.`;
    }else if(/company/.test(inputElement[1])){

        pElement.textContent = `Have a nice flight with ${company}.`;
    }else if(/all/.test(inputElement[1])){

        pElement.textContent = `Mr/Ms, ${names}, your flight number ${flight} is from ${airport[0]} to ${airport[1]}. Have a nice flight with ${company}.`;
    }

    resultElement.appendChild(pElement);
}