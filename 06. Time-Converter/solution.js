function attachEventsListeners() {

    let btnArr = Array.from(document.querySelectorAll('input[type=button]'));

    btnArr.forEach(btn => {

        btn.addEventListener('click', calculateTime);

    });

    function calculateTime(e) {

        let clickedBtn = e.target;
        let timeArr = [];
        if(clickedBtn.parentElement.children[1].id  === 'days'){

            let value = clickedBtn.parentElement.children[1].value;



            timeArr.push(value);

            timeArr.push(value * 24);

            timeArr.push(timeArr[1] * 60);

            timeArr.push(timeArr[2] * 60);

            btnArr.forEach((x,i) => x.parentElement.children[1].value = timeArr[i]);
        }else if(clickedBtn.parentElement.children[1].id  === 'hours'){

             let value = clickedBtn.parentElement.children[1].value;

             timeArr.push((value * 0.041667).toFixed(1));

             timeArr.push(value);

            timeArr.push(timeArr[1] * 60);

            timeArr.push(timeArr[2] * 60);

            btnArr.forEach((x,i) => x.parentElement.children[1].value = timeArr[i]);

        }else if(clickedBtn.parentElement.children[1].id  === 'minutes'){

            let value = clickedBtn.parentElement.children[1].value;


            // day
            timeArr.push(Math.floor(value * 0.000695));
                // hour
            timeArr.push(Math.trunc(value * 0.016666667));
            // min
            timeArr.push(value);
            // seconds
            timeArr.push(timeArr[2] * 60);

            btnArr.forEach((x,i) => x.parentElement.children[1].value = timeArr[i]);
        }else if(clickedBtn.parentElement.children[1].id  === 'seconds'){

            let value = clickedBtn.parentElement.children[1].value;

            let mins = Math.trunc(value * 0.016666667);

            timeArr.push((mins * 0.000695).toFixed(1));

            timeArr.push(Math.trunc(mins * 0.016666667));

            timeArr.push(mins);

            timeArr.push(value);
            btnArr.forEach((x,i) => x.parentElement.children[1].value = timeArr[i]);
        }


    }
}