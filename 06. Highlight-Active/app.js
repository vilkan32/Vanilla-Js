function focus() {

    let divElements = Array.from(document.querySelectorAll('input'));

    divElements.forEach(x => {
        x.addEventListener('focus', addClass)
        x.addEventListener('blur', removeClass);
    });

    function addClass(e) {

        let el = e.target;
        console.log(el);
        el.parentElement.classList.add('focused');
    }
    function removeClass(e) {

        let el = e.target;
        console.log(el);
        el.parentElement.classList.remove('focused');
    }

}