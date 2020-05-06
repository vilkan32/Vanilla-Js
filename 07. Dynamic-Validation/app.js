function validate() {

    let emailValidation = document.getElementById('email').addEventListener('change', doValidation);

    function doValidation(el) {

        let text = el.target;
        console.log(text);
        let regex = /[a-z]+@[a-z]+\.[a-z]+/;

        if(!regex.exec(text.value)){
            text.classList.add('error');
        }else{
            text.classList.remove('error');
        }
    }
}