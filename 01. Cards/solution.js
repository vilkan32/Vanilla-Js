function solve() {
   Array.from(document.getElementsByTagName('img')).forEach(img => {
       img.addEventListener('click', cardClicked)
   })

    function cardClicked(e) {

       let currentCard = e.target;

       currentCard.src = './images/whiteCard.jpg';

       if(currentCard.parentElement.id === "player1Div")
       {
           let topSpanResult = document.getElementById('result').children[0];
           topSpanResult.textContent = currentCard.name;

           currentCard.removeEventListener('click', cardClicked);
       }else if(currentCard.parentElement.id === "player2Div"){
           let botSpanResult = document.getElementById('result').children[2];
           botSpanResult.textContent = currentCard.name;

           currentCard.removeEventListener('click', cardClicked);
       }

        if ( document.getElementById('result').children[2].textContent && document.getElementById('result').children[0].textContent){

        let numberTop = Number(document.getElementById('result').children[0].textContent);
        let numberBot = Number(document.getElementById('result').children[2].textContent);
            console.log(numberTop);
            console.log(numberBot);
            if(numberTop > numberBot){

                let winner = Array.from(document.getElementById('player1Div').children).filter(x => x.name === document.getElementById('result').children[0].textContent);
                winner[0].style.border = '2px solid green';

                let loser = Array.from(document.getElementById('player2Div').children).filter(x => x.name === document.getElementById('result').children[2].textContent);
                loser[0].style.border = '2px solid red';
            }else{
                let winner = Array.from(document.getElementById('player2Div').children).filter(x => x.name === document.getElementById('result').children[2].textContent);
                winner[0].style.border = '2px solid green';

                let loser = Array.from(document.getElementById('player1Div').children).filter(x => x.name === document.getElementById('result').children[0].textContent);
                loser[0].style.border = '2px solid red';
            }

            document.getElementById('history').textContent += `[${document.getElementById('result').children[0].textContent} vs ${document.getElementById('result').children[2].textContent}] `;
            document.getElementById('result').children[0].textContent = "";
            document.getElementById('result').children[2].textContent = "";
        }
    }
}