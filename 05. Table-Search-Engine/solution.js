function solve() {
   document.getElementById('searchBtn').addEventListener('click', clickFunc);

   function clickFunc() {

       let searchText = document.getElementById('searchField').value;

       let wholeTable = Array.from(document.getElementsByClassName('container')[0].childNodes[5].children);

       wholeTable.forEach(x => x.className = '');

       for (let i = 0; i < wholeTable.length; i++) {

            let current = wholeTable[i].textContent;
           if(current.search(searchText) != -1){
               wholeTable[i].className = 'select';
           }

       }

       document.getElementById('searchField').value = "";




   }
}