function create(words) {


   let div = document.createElement('div');

   let p = document.createElement('p');

   div.appendChild(p);

   let content = document.getElementById('content');
   words.forEach(x => {

      let cloneEl = div.cloneNode(true);

      cloneEl.firstElementChild.textContent = x;

      cloneEl.firstElementChild.style.display = 'none';

      cloneEl.addEventListener('click', displayParagraph);

      content.appendChild(cloneEl);
   });


   function displayParagraph(el) {


       el.target.firstElementChild.style.display = 'block';
   }

}