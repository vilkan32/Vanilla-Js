function attachEventsListeners() {

    let button = document.getElementById('convert');

    button.addEventListener('click', convert);

    function convert() {

        let selected = document.getElementById('inputUnits').value;

        let metrix = Number(document.getElementById('inputDistance').value);

        let requiredMetrixNameConversion = document.getElementById('outputUnits').value;

        console.log(requiredMetrixNameConversion);

        if(selected === 'km'){

           outputResult(kilometersTo(metrix, requiredMetrixNameConversion));
        }else if(selected === 'm'){
            outputResult(meterTo(metrix, requiredMetrixNameConversion));
        }else if(selected === 'cm'){
            outputResult(centimeterTo(metrix, requiredMetrixNameConversion));
        }else if(selected === 'mm'){
            outputResult(millimetersTo(metrix,requiredMetrixNameConversion));
        }else if(selected === 'mi'){
            outputResult(milesTo(metrix,requiredMetrixNameConversion));
        }else if(selected === 'yrd'){
            outputResult(yardTo(metrix,requiredMetrixNameConversion));
        }else if(selected === 'ft'){
            outputResult(feetTo(metrix,requiredMetrixNameConversion));
        }else if(selected === 'in'){
            outputResult(inchesTo(metrix,requiredMetrixNameConversion));
        }
    }

    function inchesTo(fromValue, to) {
        let result = 0;
        if(to === 'km'){
            result = fromValue * 0.0000254;
        }else if(to === 'm'){
            result = fromValue * 0.0254;
        }else if(to === 'cm'){
            result = fromValue * 2.54;
        }else if(to === 'mm'){
            result = fromValue * 25.4;
        }else if(to === 'mi'){
            result = fromValue * 0.000015783;
        }else if(to === 'yrd'){
            result =  fromValue * 0.0277777778;
        }else if(to === 'ft'){
            result = fromValue * 0.0833333333;
        }else if(to === 'in'){
            result = fromValue;
        }
        return result;
    }

    function feetTo(fromValue, to) {
        let result = 0;
        if(to === 'km'){
            result = fromValue * 0.0003048;
        }else if(to === 'm'){
            result = fromValue * 0.3048;
        }else if(to === 'cm'){
            result = fromValue * 30.48;
        }else if(to === 'mm'){
            result = fromValue * 304.8;
        }else if(to === 'mi'){
            result = fromValue * 0.000189393939;
        }else if(to === 'yrd'){
            result =  fromValue * 0.333333333;
        }else if(to === 'ft'){
            result = fromValue;
        }else if(to === 'in'){
            result = fromValue * 12;
        }
        return result;
    }
    function yardTo(fromValue, to) {
        let result = 0;
        if(to === 'km'){
            result = fromValue * 0.0009144;
        }else if(to === 'm'){
            result = fromValue * 0.9144;
        }else if(to === 'cm'){
            result = fromValue * 91.44;
        }else if(to === 'mm'){
            result = fromValue * 914.4;
        }else if(to === 'mi'){
            result = fromValue * 0.000568181818;
        }else if(to === 'yrd'){
            result = fromValue;
        }else if(to === 'ft'){
            result = fromValue * 3;
        }else if(to === 'in'){
            result = fromValue * 36;
        }
        return result;
    }
    function milesTo(fromValue, to) {
        let result = 0;
        if(to === 'km'){
            result = fromValue * 1.609344;
        }else if(to === 'm'){
            result = fromValue * 1609.344;
        }else if(to === 'cm'){
            result = fromValue * 160934.4;
        }else if(to === 'mm'){
            result = fromValue * 1609344;
        }else if(to === 'mi'){
            result = fromValue;
        }else if(to === 'yrd'){
            result =  fromValue * 1760;
        }else if(to === 'ft'){
            result = fromValue * 5280;
        }else if(to === 'in'){
            result = fromValue * 63360;
        }
        return result;
    }
    function millimetersTo(fromValue, to) {
        let result = 0;
        if(to === 'km'){
            result = fromValue / 1000000;
        }else if(to === 'm'){
            result = fromValue / 1000;
        }else if(to === 'cm'){
            result = fromValue / 10;
        }else if(to === 'mm'){
            result = fromValue;
        }else if(to === 'mi'){
            result = ((fromValue / 10) * 0.000006213711922);
        }else if(to === 'yrd'){
            result =  ((fromValue / 10) * 0.010936132983377);
        }else if(to === 'ft'){
            result = ((fromValue / 10) / 30.48);
        }else if(to === 'in'){
            result = ((fromValue / 10) * 0.393700787);
        }
        return result;
    }

    function centimeterTo(fromValue, to) {
        let result = 0;
        if(to === 'km'){
            result = fromValue / 100000;
        }else if(to === 'm'){
            result = fromValue / 100;
        }else if(to === 'cm'){
            result = fromValue;
        }else if(to === 'mm'){
            result = fromValue * 10;
        }else if(to === 'mi'){
            result = (fromValue * 0.000006213711922);
        }else if(to === 'yrd'){
            result =  (fromValue * 0.010936132983377);
        }else if(to === 'ft'){
            result = (fromValue / 30.48);
        }else if(to === 'in'){
            result = (fromValue * 0.393700787);
        }
        return result;
    }

    function meterTo(fromValue, to) {
        let result = 0;
        if(to === 'km'){
            result = fromValue / 1000;
        }else if(to === 'm'){
            result = fromValue;
        }else if(to === 'cm'){
            result = fromValue * 100;
        }else if(to === 'mm'){
            result = fromValue * 1000;
        }else if(to === 'mi'){
            result = (fromValue * 0.0006213712);
        }else if(to === 'yrd'){
            result =  (fromValue * 1.0936);
        }else if(to === 'ft'){
            result = (fromValue / 0.3048);
        }else if(to === 'in'){
            result = (fromValue / 0.0254);
        }
        return result;
    }
    
    function kilometersTo(fromValue,to) {

        let result = 0;
        if(to === 'km'){
            result = fromValue;
        }else if(to === 'm'){
            result = fromValue * 1000;
        }else if(to === 'cm'){
            result = fromValue * 100000;
        }else if(to === 'mm'){
            result = fromValue * 1000000;
        }else if(to === 'mi'){
            result = (fromValue / 1.609344);
        }else if(to === 'yrd'){
            result =  (fromValue * 1093.6133);
        }else if(to === 'ft'){
            result = (fromValue * 3280.8);
        }else if(to === 'in'){
            result = (fromValue * 39370.07874);
        }
        return result;
    }

    function outputResult(value) {
        document.getElementById('outputDistance').value = value
    }
}