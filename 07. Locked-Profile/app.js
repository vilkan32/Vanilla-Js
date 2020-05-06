function lockedProfile() {

    let buttons = Array.from(document.querySelectorAll('button'));

    buttons.forEach(btn => {
        btn.addEventListener('click', showInfo);
    });

    function showInfo(e) {

        let clickedElement = e.target;

        let showCurrentStateOfRadio = Array.from(clickedElement.parentElement.querySelectorAll('input[type=radio]'))
            .filter(x => x.checked == true)[0]
            .getAttribute('value');


        if(clickedElement.textContent === 'Show more') {
            if (showCurrentStateOfRadio === 'unlock') {

                let informationToShow = clickedElement.parentElement.children[9];
                informationToShow.style.display = 'block';
                clickedElement.textContent = 'Hide it';
            }
        }else{

            if (showCurrentStateOfRadio === 'unlock') {

                let informationToShow = clickedElement.parentElement.children[9];
                informationToShow.style.display = 'none';
                clickedElement.textContent = 'Show more';
            }
        }
    }
}