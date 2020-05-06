function attachEvents() {

     const playerTemplate = (data) => {

        let html =
            $(`<div class="player">
           <span class="insiderSpan">Name: ${data.name}</span>
           <span class="insiderSpan" id="money">Money: ${data.money}</span>
           <span class="insiderSpan" id="bullets">Bullets: ${data.bullets}</span>
           <span class="btnHolder">
               <button class="insideBtn" id="play">Play</button>
               <button class="insideBtn" id="delete">Delete</button>
           </span>
       </div>`);

         $(html).find('#delete').click(deletePlayer);

        async function deletePlayer() {

            let url = `https://baas.kinvey.com/appdata/kid_Skxo-jnbr/players/${data['_id']}`;
            console.log('delete');
            let request = {
                method: 'delete',
                url,
                headers: {
                    "Authorization": "Basic " + btoa('guest:guest'),
                    "Content-type": "application/json"
                },
            };

            await $.ajax(request)
                .then(async () =>{
                    await initializePlayers();
                })

         }

        const saveProgress = async () =>{
            $(html)
                .find('#play')
                .off('click', startGame);
            clearInterval(document.getElementById('canvas').intervalId);
            let btns = $('#buttons')[0];
            document.getElementById('reload').removeEventListener('click', reloadBullets);
            for (let i = 0; i < btns.childElementCount; i++) {

                btns.children[i].style.display = 'none';
            }

            $('canvas').css('display', 'none');

            let player = {
                name: data.name,
                money: data.money,
                bullets: data.bullets
            };

            let url = `https://baas.kinvey.com/appdata/kid_Skxo-jnbr/players/${data['_id']}`;

            let request = {
                method: 'put',
                url,
                headers: {
                    "Authorization": "Basic " + btoa('guest:guest'),
                    "Content-type": "application/json"
                },
                data: JSON.stringify(player)
            };

            await $.ajax(request);
            document.getElementById('save').removeEventListener('click', saveProgress);

            $(html).find('#money')[0].textContent = `Money: ${data.money}`;
            $(html).find('#bullets')[0].textContent = `Bullets: ${data.bullets}`;

            await initializePlayers();
        };

        function reloadBullets() {
            data.bullets = 6;
        }

        const startGame = async()=> {

            clearInterval(document.getElementById('canvas').intervalId);
            console.log('go');
            let btns = $('#buttons')[0];

            for (let i = 0; i < btns.childElementCount; i++) {

                btns.children[i].style.display = 'inline-block';
            }

            $('canvas').css('display', 'block');

            document.getElementById('save').addEventListener('click', saveProgress);
            document.getElementById('reload').addEventListener('click', reloadBullets);

            loadCanvas(data);

        };

         $(html)
             .find('#play')
             .on('click', startGame);

         console.log($(html)[0]);
         return $(html)[0];
    };

    async function addPlayer(){

       let name = $('#addName')[0].value;

        let player = {
            name: name,
            money: 500,
            bullets: 6
        };

        let url = 'https://baas.kinvey.com/appdata/kid_Skxo-jnbr/players';
        let request = {
            method: 'post',
            url,
            headers: {
                "Authorization": "Basic " + btoa('guest:guest'),
                "Content-type": "application/json"
            },
            data: JSON.stringify(player)
        };

        await $.ajax(request)
            .then(await initializePlayers)

    }

    async function initializePlayers() {

        let players = $('#players');
        players[0].innerHTML = '';
        let url = 'https://baas.kinvey.com/appdata/kid_Skxo-jnbr/players';
        let request = {
            method: 'get',
            url,
            headers: {Authorization: `Basic ${btoa('guest:guest')}`},
        };

         await $.ajax(request)
             .then(data => {
                 for (let i = 0; i < data.length; i++) {
                     console.log('now');
                     players[0].append(playerTemplate((data[i])));
                     console.log(playerTemplate((data[i])));
                 }
             })
    }




    $('#addPlayer').click(addPlayer);

     initializePlayers();
}