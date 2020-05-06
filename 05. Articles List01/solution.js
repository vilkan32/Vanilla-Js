function createArticle() {
	
	let title = document.getElementById('createTitle').value;
    let el = document.createElement('article');
	let element = document.createElement('H3');
	element.textContent = title;
	let createP = document.createElement('p');
let eho = document.getElementById('createContent').value;

    if(title !== '' && eho !== ''){
        el.appendChild(element);
        el.appendChild(createP);
        let appendmqsto = document.getElementById('articles');

        appendmqsto.appendChild(el);
    }
	createP.textContent = eho;

    document.getElementById('createTitle').value = ""

    document.getElementById('createContent').value = ""
}