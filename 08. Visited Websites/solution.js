function solve() {
    let elements = document.getElementsByClassName('link-1');
    for (let i = 0; i <elements.length; i++) {
        elements[i].childNodes[1].addEventListener('click', visit);
        function visit(){
            let paragraph = elements[i].children[1];
            let rgex = /\d+/;
            let digit = Number(rgex.exec(paragraph.textContent)[0]);
            paragraph.innerHTML = `Visited: ${digit + 1} times`;
        }
    }
}