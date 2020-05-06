function attachEvents() {

    document.getElementById('submit').addEventListener('click', getForecast);

    function getForecast() {

        let location = document.getElementById('location').value;

        fetch('https://judgetests.firebaseio.com/locations.json')
            .then(function (response) {
                if(response.status > 300){
                    throw new Error(`Error ${response.status} (${response.statusText})`);
                }
                return response.json();})
            .then((data)=> handleData(data,location))
            .catch((err)=> handleError(err));

    }

    function handleError(err) {
        let hiddenDiv  = document.getElementById('forecast');
        hiddenDiv.style.display = 'block';
        let upc =  document.getElementById('upcoming');
        let curr = document.getElementById('current');
        let span = document.createElement('span');
        span.textContent = err.message;
        let cloned = span.cloneNode(true);
        upc.appendChild(span);
        curr.appendChild(cloned);

    }


    function handleData(data,location) {
       let upc =  document.getElementById('upcoming');
       let curr = document.getElementById('current');

       if (upc.childElementCount > 1){
           upc.removeChild(upc.lastElementChild);
           curr.removeChild(curr.lastElementChild);
       }

        if(data.filter(x => x.name === location).length !== 0){
            let index = data.findIndex(x => x.name === location);
            
            let obj = data[index];

            fetch(`https://judgetests.firebaseio.com/forecast/today/${obj.code}.json`)
                .then(function (response) {
                    if(response.status > 300){
                        throw new Error(`Error ${response.status} (${response.statusText})`);
                    }
                    return response.json();})
                .then((data) => handleDisplayCurrentDayData(data))
                .catch((err)=> handleError(err));


            fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${obj.code}.json`)
                .then(function (response) {
                    if(response.status > 300){
                        throw new Error(`Error ${response.status} (${response.statusText})`);
                    }
                    return response.json();})
                .then((data) => handleThreeDayForecast(data))
                .catch((err)=> handleError(err));


        }else{

            throw new Error('Location cannot be found!');
        }

    }
    
    function handleThreeDayForecast(data) {
        
        
        createThreeDayDiv(data);
    }
    
    function createThreeDayDiv(data) {

        let mainDiv = document.createElement('div');
        mainDiv.classList.add('forecast-info');

        for (let i = 0; i < 3; i++) {

            let mainSpan = document.createElement('span');

            mainSpan.classList.add('upcoming');

            let symbolSpan = document.createElement('span');
            symbolSpan.classList.add('symbol');
            symbolSpan.innerHTML = returnSymbol(data.forecast[i].condition);
            mainSpan.appendChild(symbolSpan);

            let degreeSpan = document.createElement('span');
            degreeSpan.classList.add('forecast-data');
            degreeSpan.innerHTML = (data.forecast[i].low + returnSymbol('Degrees') + data.forecast[i].high + returnSymbol('Degrees'));
            mainSpan.appendChild(degreeSpan);

            let conditionSpan = document.createElement('span');
            conditionSpan.classList.add('forecast-data');
            conditionSpan.innerHTML = data.forecast[i].condition;
            mainSpan.appendChild(conditionSpan);
            mainDiv.appendChild(mainSpan);

        }

        document.getElementById('upcoming').appendChild(mainDiv);

    }
    
    function handleDisplayCurrentDayData(data) {
        let hiddenDiv  = document.getElementById('forecast');

        hiddenDiv.style.display = 'block';
        createDivEl(returnSymbol(data.forecast.condition),data.name, (data.forecast.low + returnSymbol('Degrees') + data.forecast.high + returnSymbol('Degrees')), data.forecast.condition)
        
    }
    
    function returnSymbol(str) {

        if(str === 'Sunny'){
            return '&#x2600;';
        }else if(str === 'Partly sunny'){
            return '&#x26C5;';
        }else if(str === 'Overcast'){
            return '&#x2601;';
        }else if(str === 'Rain'){
            return '&#x2614;';
        }else if(str === 'Degrees'){
            return '&#176;';
        }
    }
    
    function createDivEl(conditionSymbol, nameOfTown, degrees, condition) {

        let mainDiv = document.createElement('div');
        mainDiv.classList.add('forecasts');
        let spanSymbol = document.createElement('span');
        spanSymbol.classList.add('condition');
        spanSymbol.classList.add('symbol');
        spanSymbol.innerHTML = conditionSymbol;

        mainDiv.appendChild(spanSymbol);

        let mainSpan = document.createElement('span');

        mainSpan.classList.add('condition');

        let spanWithName = document.createElement('span');
        spanWithName.classList.add('forecast-data');
        spanWithName.innerHTML = nameOfTown;
        mainSpan.appendChild(spanWithName);

        let spanWithDegrees = document.createElement('span');
        spanWithDegrees.classList.add('forecast-data');
        spanWithDegrees.innerHTML = degrees;
        mainSpan.appendChild(spanWithDegrees);
        let spanWithCondition = document.createElement('span');
        spanWithCondition.classList.add('forecast-data');
        spanWithCondition.innerHTML = condition;
        mainSpan.appendChild(spanWithCondition);

        mainDiv.appendChild(mainSpan);

        document.getElementById('current').appendChild(mainDiv);
    }

}

attachEvents();