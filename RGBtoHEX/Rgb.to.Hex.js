function rgbToHexColor(red,green,blue){

    if(!Number(red) || red < 0 || red > 255){
        return undefined;
    }
    if(!Number(green) || green < 0 || green > 255){
        return undefined;
    }
    if(!Number(blue) || blue < 0 || blue > 255){
        return undefined;
    }

    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);

}

console.log(rgbToHexColor(10, 10, 10));;

module.exports = {rgbToHexColor};