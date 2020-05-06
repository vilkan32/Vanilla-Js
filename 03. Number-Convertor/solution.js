function solve() {

    document.getElementsByTagName('button')[0].addEventListener('click', convert);
    let menueTo = document.getElementById('selectMenuTo');
    menueTo.children[0].textContent = 'Hexadecimal';
    menueTo.children[0].value = 'hexadecimal';
    let a = menueTo.children[0].cloneNode(true);
    a.value = 'binary';
    a.textContent = 'Binary';
    menueTo.appendChild(a);
    function convert() {

        let selected = document.getElementById('selectMenuTo');
        let number = Number(document.getElementById('input').value);
        if (selected.children[0].selected) {
            document.getElementById('result').value = number.toString(16).toUpperCase();
        }else{
            document.getElementById('result').value = number.toString(2);
        }

    }
}