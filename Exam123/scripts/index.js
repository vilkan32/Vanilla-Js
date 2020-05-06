// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution(){

    let questionField = document.getElementsByTagName('textarea')[0];
    let usernameField = document.getElementsByTagName('input')[0];
    document.getElementsByTagName('button')[0].addEventListener('click', addPendingQuestion);
    function addPendingQuestion() {
        console.log(questionField);

    		if(usernameField.value === ''){
                createPendingQuestions(questionField.value, 'Anonymous');
			}else{
                createPendingQuestions(questionField.value, usernameField.value);
			}
            document.getElementsByTagName('textarea')[0].value = '';
            document.getElementsByTagName('input')[0].value = '';


    }


    function createPendingQuestions(questionField, usernameField) {

    	let mainDiv = document.createElement('div');

    	mainDiv.classList.add('pendingQuestion');

    	let imgEl = document.createElement('img');
    	imgEl.setAttribute('src', './images/user.png');
    	imgEl.width = '32';
    	imgEl.height = '32';

    	mainDiv.appendChild(imgEl);

    	let spanEl = document.createElement('span');

    	spanEl.textContent = usernameField;

    	mainDiv.appendChild(spanEl);

    	let pEl = document.createElement('p');
    	pEl.textContent = questionField;
		mainDiv.appendChild(pEl);

    	let buttonHolderDiv = document.createElement('div');

    	buttonHolderDiv.classList.add('actions');

    	let buttonArchive = document.createElement('button');
    	buttonArchive.classList.add('archive');
    	buttonArchive.textContent = 'Archive';
    	buttonArchive.addEventListener('click', archive);
    	buttonHolderDiv.appendChild(buttonArchive);
    	let buttonOpen = document.createElement('button');

    	buttonOpen.classList.add('open');
    	buttonOpen.textContent = 'Open';
    	buttonOpen.addEventListener('click', open);

    	buttonHolderDiv.appendChild(buttonOpen);

    	mainDiv.appendChild(buttonHolderDiv);

    	document.getElementById('pendingQuestions').appendChild(mainDiv);
    }


    function archive(e) {
		let target = e.target.parentElement.parentElement;
        document.getElementById('pendingQuestions').removeChild(target);
    }

    function open(e) {

    	let target = e.target.parentElement.parentElement;

    	createOpenSection(target);
        document.getElementById('pendingQuestions').removeChild(target);


    }


    function createOpenSection(el) {

    	let mainDiv = document.createElement('div');
    	mainDiv.classList.add('openQuestion');

        let imgEl = document.createElement('img');
        imgEl.setAttribute('src', './images/user.png');
        imgEl.width = '32';
        imgEl.height = '32';

        mainDiv.appendChild(imgEl);

        let spanEl = document.createElement('span');

        spanEl.textContent = el.getElementsByTagName('span')[0].textContent;

        mainDiv.appendChild(spanEl);
        let pEl = document.createElement('p');
        pEl.textContent = el.getElementsByTagName('p')[0].textContent;
        mainDiv.appendChild(pEl);

        let actionsDiv = document.createElement('div');

        actionsDiv.classList.add('actions');

        let buttonInsideActions = document.createElement('button');

        buttonInsideActions.classList.add('reply');
        buttonInsideActions.textContent = 'Reply';
        buttonInsideActions.addEventListener('click', reply);
        actionsDiv.appendChild(buttonInsideActions);
        mainDiv.appendChild(actionsDiv);

        let replySection = document.createElement('div');

        replySection.classList.add('replySection');
        replySection.style.display = 'none';

        let inputEl = document.createElement('input');
        inputEl.classList.add('replyInput');
        inputEl.type = 'text';
        inputEl.placeholder = 'Reply to this question here...';
        replySection.appendChild(inputEl);
        let replyButton = document.createElement('button');
        replyButton.classList.add('replyButton');
        replyButton.textContent = 'Send';
        replyButton.addEventListener('click', rep);
        replySection.appendChild(replyButton);
        mainDiv.appendChild(replySection);
        let olEl = document.createElement('ol');
        olEl.classList.add('reply');
        olEl.type = "1";
        replySection.appendChild(olEl);
        document.getElementById('openQuestions').appendChild(mainDiv);
    }

    function reply(e) {
		let target = e.target;

        if(target.textContent === 'Reply'){
			target.textContent ='Back';
            target.parentElement.parentElement.getElementsByClassName('replySection')[0].style.display = 'block';
		}else{
            target.textContent ='Reply';
            target.parentElement.parentElement.getElementsByClassName('replySection')[0].style.display = 'none';
		}

    }

    function rep(e) {
        let target = e.target;
		let inputField = target.parentElement.getElementsByTagName('input')[0];


        if(inputField.value !== ''){

			let liEl = document.createElement('li');

			liEl.textContent = inputField.value;
            target.parentElement.getElementsByTagName('ol')[0].appendChild(liEl);
		}

		inputField.value = '';
    }
}
