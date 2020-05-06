function solve () {

    //{ ID: Number,
    //   author: String,
    //   description: String,
    //   reproducible: Boolean,
    //   severity: Number,
    //   status: String }
    let privateFunc = (function () {

        let id = 0;

        let mainDiv = document.createElement('div');
        mainDiv.classList.add('report');

        let bodyDiv =document.createElement('div');
        bodyDiv.classList.add('body');
        bodyDiv.appendChild(document.createElement('p'));
        mainDiv.appendChild(bodyDiv);
        let divTitle  = document.createElement('div');
        divTitle.classList.add('title');
        let spanAuthor = document.createElement('span');
        spanAuthor.classList.add('author');
        divTitle.appendChild(spanAuthor);
        let statusSpan = document.createElement('span');
        statusSpan.classList.add('status');
        divTitle.appendChild(statusSpan);
        mainDiv.appendChild(divTitle);



        let content;
        return {

            report(author, description, reproducible, severity){
                let element = mainDiv.cloneNode(true);
                element.id = `report_${id}`;
                this.author = author;
                this.description = description;
                this.reproducible = reproducible;
                this.severity = severity;
                this.status = 'Open';
                element.getElementsByClassName('body')[0].firstElementChild.textContent = this.description;
                element.getElementsByClassName('author')[0].textContent =`Submitted by: ${this.author}`;
                element.getElementsByClassName('status')[0].textContent = `${this.status} | ${this.severity}`;
                content.appendChild(element);
                id++;
            },

            setStatus(id, newStatus){
                let el = document.querySelector(`#report_${id}`);
                let arr = el.getElementsByClassName('status')[0].textContent.split(' | ');
                arr[0] = newStatus;
                el.getElementsByClassName('status')[0].textContent = arr.join(' | ');
            },

            output(selector){
                content  = document.querySelector(selector);
            },

            remove(id){
                content.removeChild(document.getElementById(`report_${id}`))
            },

            sort(criterion){

                let children = content.children;
                if(criterion === 'ID'){
                   let result =  Array.from(children).sort((a,b) => {
                        let idA = a.id.split('_');
                        let idB = b.id.split('_');

                       return idA[1] - idB[1];
                    });
                    for (let i = 0; i < content.children.length; i++) {

                        content.removeChild(content.children[i]);
                    }

                    result.forEach(x => {
                        content.appendChild(x);
                    })

                }else if(criterion === 'severity'){

                    let result = Array.from(children).sort((a,b) => {
                        let arr = a.getElementsByClassName('status')[0].textContent.split(' | ');
                        let arr1 = b.getElementsByClassName('status')[0].textContent.split(' | ');

                        let firstNum = Number(arr[1]);
                        let secondNum = Number(arr1[1]);

                        return firstNum - secondNum;
                    });
                    console.log(result);

                    for (let i = 0; i < content.children.length; i++) {

                        content.removeChild(content.children[i]);
                    }

                    result.forEach(x => {
                        content.appendChild(x);
                    })

                }else if(criterion === 'author'){
                    let result = Array.from(children).sort((a,b) => {
                        let au = a.getElementsByClassName('author')[0].textContent.split(': ').filter(x => x != '');
                        let au1 = b.getElementsByClassName('author')[0].textContent.split(': ').filter(x => x != '');
                        return au[1].localeCompare(au1[1]);
                    });

                    for (let i = 0; i < content.children.length; i++) {

                        content.removeChild(content.children[i]);
                    }

                    result.forEach(x => {
                        content.appendChild(x);
                    })
                }
            }
        }


    })();

    return privateFunc;
}
let tracker = solve();
tracker.output('#content');
tracker.report('guy', 'report content', true, 5);
tracker.report('second guy', 'report content 2', true, 3);
tracker.report('abv', 'report content three', true, 4);

tracker.sort('ID');