function growingWord() {

    let growingWord = document.getElementById('exercise').children[2];


        if (growingWord.style.fontSize === ""){
            growingWord.style.fontSize = "2px";
            growingWord.style.color = "blue";
            console.log('go')

        }else{

            if(growingWord.style.color === "blue"){
                growingWord.style.color = "green";
            }else if(growingWord.style.color === "green"){
                growingWord.style.color = "red";
            }else if(growingWord.style.color === "red"){
                growingWord.style.color = "blue";
            }

           let currentFontSize = growingWord.style.fontSize;
            let parsed = parseInt(currentFontSize);

            parsed*=2;
            growingWord.style.fontSize = parsed.toString() + "px";
        }


}