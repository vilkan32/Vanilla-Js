function solve(selector){
    let element = document.querySelector(selector);
    let counter = 0;
    let previous = 0;
    let elem;
    function traverse(element) {
        let el = element.children;

        Array.from(el).forEach(x => {
            if(previous <= counter && el.length !== 0){
                elem = el;
            }
            if(x.length !== 0){
                counter++;
                traverse(x);

            }
        });
        if(previous < counter){
            previous = counter;
        }

        counter = 0;
    }

if(element.children.length === 1){
    traverse(element);
    addClass(elem[0]);
}else if(element.children.length === 0){
    element.classList.add('highlight');
}else{
    for (let i = 0; i < element.children.length; i++) {
        traverse(element.children[i]);
    }
    addClass(elem[0]);
}

    function addClass(elemasd) {
        if (elemasd === element.parentNode){
            return;
        }

        elemasd.classList.add('highlight');
        elemasd = elemasd.parentNode;
        addClass(elemasd);
    }

}

solve('#p');

