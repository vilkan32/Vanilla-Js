function solve() {
    let hide = document.getElementById('create-offers');

    hide.style.display = 'none';

    let validateUsername = document.getElementById('username').value;

    let usernameRgex = /.{4,10}/;
    let loginBTN = document.getElementById('loginBtn');
    loginBTN.addEventListener('click', login);
    function login() {
        if(usernameRgex.test(validateUsername)){

            hide.style.display = 'block';
        }
    }



}

solve()