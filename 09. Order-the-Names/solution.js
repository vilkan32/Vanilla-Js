function solve() {

    Array.from(document.getElementsByTagName('button'))[0].addEventListener('click', takeName);
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let growAlphabet = alphabet.toUpperCase();

    function takeName() {

        let name = document.getElementsByTagName('input')[0].value;
        let startingLetter;
        if(alphabet.includes(name[0])|| growAlphabet.includes(name[0])){
            startingLetter = name[0].toLowerCase();
            let listOfRows = document.getElementsByTagName('ol')[0].children;
            let index = Number(alphabet.indexOf(startingLetter));
            let realName = '';
            for (let i = 0; i < name.length; i++) {
                if(i === 0){
                    realName+= name[0].toUpperCase();
                }else {
                    realName += name[i].toLowerCase();
                }
            }

                if(listOfRows[index].textContent === ''){
                    listOfRows[index].textContent = realName;
                    console.log(realName);
                }else{
                    listOfRows[index].textContent += ', ' + realName;
                }

        }

        document.getElementsByTagName('input')[0].value = '';

    }

}