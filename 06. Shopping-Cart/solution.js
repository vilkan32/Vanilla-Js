function solve() {
   Array.from(document.getElementsByTagName('button')).forEach(x => x.addEventListener('click', buyProduct));

    let listOfNames = [];
    let listOfPrices = [];
   function buyProduct(e) {

       let currentProduct = e.target;
     if(currentProduct.textContent === 'Checkout'){
         let textAreaElement = document.getElementsByTagName('textarea')[0];
         textAreaElement.textContent += `You bought ${listOfNames.filter((item,index) => listOfNames.indexOf(item) === index).join(', ')} for ${(listOfPrices.reduce((a, b) => a + b, 0)).toFixed(2)}.`;
         Array.from(document.getElementsByTagName('button')).forEach(x => x.removeEventListener('click', buyProduct));

     }
       else{
         let productName = currentProduct.parentElement.parentElement.children[1].children[0].textContent;
         listOfNames.push(productName);

         let productPrice = currentProduct.parentElement.parentElement.children[3].textContent;
         listOfPrices.push(Number(productPrice));
         let textAreaElement = document.getElementsByTagName('textarea')[0];

         textAreaElement.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;
     }


   }
}