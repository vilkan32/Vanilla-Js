function loadCommits() {

    let username = document.getElementById('username').value;

    let repo = document.getElementById('repo').value;

    let commits = document.getElementById('commits');

    let url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
        .then(function (response) {
            if(response.status > 300){
                throw new Error(`Error ${response.status} (${response.statusText})`);
            }
            return response.json();
        })
        .then((data) => displayElements(data))
        .catch((err) => handleError(err));


    function handleError(err) {
        while (commits.childElementCount) {
            commits.removeChild(commits.firstElementChild);
        }
        let liEl = document.createElement('li');
        liEl.textContent = err.message;
        commits.appendChild(liEl);
    }

    function displayElements(data) {
        console.log(data);
        while (commits.childElementCount) {
            commits.removeChild(commits.firstElementChild);
        }

        for (let item of data) {

            let author = item.commit.author.name;
            let message = item.commit.message;
            let liEl = document.createElement('li');
            liEl.textContent = `${author}: ${message}`;
            commits.appendChild(liEl);
        }
    }
}