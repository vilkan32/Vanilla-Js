function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', handlePosts);
    let url = `https://blog-apps-c12bf.firebaseio.com/posts.json`;
    let select = document.getElementById('posts');

    function handlePosts() {

        fetch(url)
            .then((response) => response.json())
            .then((data) => handleDataPosts(data));
        document.getElementById('btnViewPost').addEventListener('click', handleDisplayPosts);
    }

    async function handleDisplayPosts() {
        await handlePosts();
        let result = Array.from(document.getElementById('posts')).filter(x => x.selected === true)[0];

         fetch(`https://blog-apps-c12bf.firebaseio.com/posts/${result.value}.json`)
            .then((response) => response.json())
            .then((data) => handleDataPostDisplay(data))
            .then((data) => handleDisplayComments(data));

    }


    function handleDataPosts(data) {
        while (select.childElementCount){
            select.removeChild(select.firstElementChild);
        }

        for (let key in data){
            let optionsEl = document.createElement('option');
            optionsEl.value = key;
            optionsEl.textContent = data[key].title;

            select.appendChild(optionsEl);
        }
    }


    function handleDataPostDisplay(data) {
        document.getElementById('post-title').textContent = data.title;
        document.getElementById('post-body').textContent = data.body;
        return data.id;
    }

    function handleDisplayComments(data) {

        fetch('https://blog-apps-c12bf.firebaseio.com/comments.json')
            .then((response) => response.json())
            .then((requiredData) => handleComments(requiredData, data));
    }


    function handleComments(reqData, data) {

        let comments = document.getElementById('post-comments');

        while(comments.childElementCount){
            comments.removeChild(comments.firstElementChild);
        }

        for(let k in reqData){
            if(reqData[k].postId === data){
                let liEl = document.createElement('li');
                liEl.textContent = reqData[k].text;
               comments.appendChild(liEl);
            }
        }

    }
}

attachEvents();