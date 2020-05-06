function encodeAndDecodeMessages() {

    document.getElementsByTagName('button')[0].addEventListener('click', encodeMessage);
    document.getElementsByTagName('button')[1].addEventListener('click', decodeMessage);
    function encodeMessage() {

        let text = document.getElementsByTagName('textarea')[0].value;

        let arr = [];
        for (let i = 0; i < text.length; i++) {

            arr.push(text.charCodeAt(i) + 1);

        }

        let str = String.fromCharCode(...arr);

        document.getElementsByTagName('textarea')[1].value = str;

        document.getElementsByTagName('textarea')[0].value = '';
    }


    function decodeMessage() {
        let text = document.getElementsByTagName('textarea')[1].value;
        let arr = [];
        for (let i = 0; i < text.length; i++) {
            arr.push(text.charCodeAt(i) - 1);
        }

        let str = String.fromCharCode(...arr);
        document.getElementsByTagName('textarea')[1].value = str;
    }



}