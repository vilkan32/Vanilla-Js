function getArticleGenerator(input){
    let element = document.getElementById('content');

	return function(){
        let p = document.createElement('p');

	    arr = input.shift();

	    if(arr != undefined){
            p.textContent = arr;
            let article = document.createElement('article');
            article.appendChild(p);
            element.appendChild(article);
        }

    }
}