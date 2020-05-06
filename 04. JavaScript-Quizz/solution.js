function solve() {

    Array.from(document.getElementsByTagName('p')).forEach(x => x.addEventListener('click', answer));

    let numofiterations = 0;
    let sections = document.getElementsByTagName('section');

    let numOfCorrectAnswers = 0;
    function answer(e) {

        let answer = e.target;
        if (answer.textContent === 'onclick' || answer.textContent === 'JSON.stringify()' || answer.textContent === 'A programming API for HTML and XML documents') {
            numOfCorrectAnswers++;

        }
        sections[numofiterations].style.display = 'none';
        if (numofiterations < 2) {
            sections[numofiterations + 1].style.display = 'block';
        }
        else{

                document.getElementById('results').style.display = 'block';
                let resultItem = document.getElementsByClassName('results-inner');
                if (numOfCorrectAnswers === 3) {
                    resultItem[0].children[0].innerHTML = 'You are recognized as top JavaScript fan!';
                } else {
                    resultItem[0].children[0].innerHTML = `You have ${numOfCorrectAnswers} right answers`;
                }

        }
        numofiterations++;

    }
}
