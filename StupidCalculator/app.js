function domManip() {

    let commandExec = (function calculate() {

        let first;
        let second;
        let result;

        let Manipulate = {


            init(selector1, selector2, result){

                first = document.querySelector(selector1);
                second = document.querySelector(selector2);
                result = document.querySelector(result);
            },

            add(){

                result.value = first.value + second.value;
            },

            subtract(){

                result.value = first.value - second.value;

            }
        };

        return Manipulate;

    })();

    return commandExec;

}

let obj = domManip();

obj.init("#num1","#num2",'#result');