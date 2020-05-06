function getData () {

    let input = JSON.parse(document.getElementById('input').children[0].value);

    let lastElement = input[input.length - 1];
    let peopleInElement = document.getElementById('peopleIn').children[1];
    let peopleOutElement = document.getElementById('peopleOut').children[1];
    let peopleInBlacklist = document.getElementById('blacklist').children[1];

    let peopleIn = [];
    let peopleOut = [];
    let blacklist = [];

    for (let i = 0; i < input.length -1; i++) {

        let current = input[i];

        if(current['action'] === 'peopleIn'){
            if(blacklist.filter(x => x.firstName === current.firstName && x.lastName === current.lastName).length !== 0){

            }else
            peopleIn.push(current);
        } else if(current['action'] === 'peopleOut'){

            if(peopleIn.filter(x => x.firstName === current.firstName && x.lastName === current.lastName).length !== 0){

               let index = peopleIn.findIndex(x => x.firstName === current.firstName && x.lastName === current.lastName);

                peopleOut.push(peopleIn[index]);

                peopleIn.splice(index,1);

            }

        }else if(current['action'] === 'blacklist'){

            if(peopleIn.filter(x => x.firstName === current.firstName && x.lastName === current.lastName).length !== 0){

                let index = peopleIn.findIndex(x => x.firstName === current.firstName && x.lastName === current.lastName);

                peopleOut.push(peopleIn[index]);

                peopleIn.splice(index,1);

            }

            blacklist.push(current);
        }
    }


    if(lastElement['criteria'] !== '' && lastElement['action'] !== ''){

        if(lastElement['action'] === 'peopleIn'){
            peopleIn.sort((a,b) => a[lastElement['criteria']].localeCompare(b[lastElement['criteria']]));
        }else if(lastElement['action'] === 'peopleOut'){
            peopleOut.sort((a,b) => a[lastElement['criteria']].localeCompare(b[lastElement['criteria']]));
        }else{
            blacklist.sort((a,b) => a[lastElement['criteria']].localeCompare(b[lastElement['criteria']]));
        }

    }

    peopleIn.forEach(x => {
        peopleInElement.textContent += `{"firstName":"${x.firstName}","lastName":"${x.lastName}"} `;
    });

    peopleOut.forEach(x => {
        peopleOutElement.textContent += `{"firstName":"${x.firstName}","lastName":"${x.lastName}"} `;
    });

    blacklist.forEach(x => {
        peopleInBlacklist.textContent += `{"firstName":"${x.firstName}","lastName":"${x.lastName}"} `;
    });

}