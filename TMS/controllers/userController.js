const userController = function () {

    const getRegister = function (context) {

        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs"
        }).then(function () {
            this.partial('./views/register/registerPage.hbs')
        })
    };

    const getLogin = function (context) {
        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs"
        }).then(function () {
            this.partial('./views/login/loginPage.hbs')
        })
    };

    const postRegister = function (context) {

        userModel.register(context.params)
            .then(helper.handler)
            .then((data) => {
                storage.saveUser(data);
                homeController.getHome(context);
            })
    };

    const postLogin = function (context) {

        userModel.login(context.params)
            .then(helper.handler)
            .then((data) => {
                storage.saveUser(data);
                homeController.getHome(context);
            })
    };

    const logout = function (context) {

        userModel.logout()
            .then(helper.handler)
            .then(() => {
                storage.deleteUser();
                homeController.getHome(context);
            });
    };

    const getAbout = async function (context) {
        console.log('about');
        const loggedIn = storage.getData('userInfo') !== null;

        if(loggedIn){
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
        }


       return await context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs"
        }).then(function () {
            this.partial('./views/about/about.hbs')
        })

    };

    const getCatalog = async function (context) {

            const loggedIn = storage.getData('userInfo') !== null;
            let creator = JSON.parse(storage.getData('UserCredentials'));

            if(loggedIn){
                const username = JSON.parse(storage.getData('userInfo')).username;
                context.loggedIn = loggedIn;
                context.username = username;

                const baseUrl = "https://baas.kinvey.com";
                context.hasNoTeam = true;
                let url = '/appdata/kid_Skxo-jnbr/Catalogs';

                const ftch = async () => {
                    let infoBox = $('#infoBox');
                    infoBox.text("Loading...");
                    infoBox.show();
                   const response = await fetch(baseUrl + url, {
                       method: "get",
                       headers: {"Content-type": "application/json", "Authorization": "Basic " + btoa(creator.username + ':' + creator.password)},
                   });
                    const json = await response.json();
                    infoBox.fadeOut();
                    return json;
                };

                const  doMagic =  (response) => {
                    console.log(response);
                    for (let i = 0; i < response.length; i++) {

                        if(response[i].members.filter(x => x === username).length !== 0){
                            context.hasNoTeam = false;
                        }
                        context.teams = response;

                    }

                    console.log('loading');
                    context.loadPartials({
                        header: "./views/common/header.hbs",
                        footer: "./views/common/footer.hbs",
                        team: "./views/catalog/team.hbs",
                    }).then(function() {
                        this.partial('./views/catalog/teamCatalog.hbs');
                    })

                };

                await doMagic(await ftch());
            }

    };

    const createCatalogForm = function (context) {

        const loggedIn = storage.getData('userInfo') !== null;

        if(loggedIn){
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
            //todo
            context.hasNoTeam = true;
        }

        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs",
            createForm: "./views/create/createForm.hbs"
        }).then(function () {
            this.partial('./views/create/createPage.hbs')
        })

    };


    const postCatalogForm = function (context) {

        const baseUrl = "https://baas.kinvey.com";

        let url = '/appdata/kid_Skxo-jnbr/Catalogs';

        let creator = JSON.parse(storage.getData('UserCredentials'));
        let {name,comment} = context.params;
        let data = {
            name: name,
            comment: comment,
            members: [JSON.parse(storage.getData('UserCredentials')).username],
            credentials: JSON.parse(storage.getData('UserCredentials'))
        };

        fetch(baseUrl + url, {
            method: "post",

            headers: {"Content-type": "application/json", "Authorization": "Basic " + btoa(creator.username + ':' + creator.password)},

            body: JSON.stringify(data),
        })
            .then(x => x.json())
            .then(() => {
                this.redirect('#/catalog');
            })


    };

    const displayTeam = async function (context) {

        const loggedIn = storage.getData('userInfo') !== null;
        const baseUrl = "https://baas.kinvey.com";
        let creator = JSON.parse(storage.getData('UserCredentials'));
        let url = '/appdata/kid_Skxo-jnbr/Catalogs';
        let id = context.params._id.substr(1,);
        console.log(id);
        if(loggedIn){
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;

            await fetch(baseUrl + url + "/" + id,{

                method: "get",
                headers: {"Content-type": "application/json", "Authorization": "Basic " + btoa(creator.username + ':' + creator.password)},
            }).then(x => x.json())
                .then(async (response) => {
                    context.comment = response.comment;
                    context.members = response.members;
                    let creator = response._acl.creator;
                    let userCreator = JSON.parse(storage.getData('userInfo'))._acl.creator;
                    if(creator == userCreator){
                        context.isAuthor = true;
                    }else{
                        context.isAuthor = false;
                    }
                    creator = JSON.parse(storage.getData('UserCredentials'));
                    context.teamId = response._id;
                    await fetch(baseUrl + url, {
                        method: "get",
                        headers: {"Content-type": "application/json", "Authorization": "Basic " + btoa(creator.username + ':' + creator.password)},
                    }).then(data => data.json())
                        .then(response => {

                            for (let i = 0; i < response.length; i++) {
                                if(response[i].members.filter((x) => {
                                    return x === creator.username;
                                }).length != 0){
                                    context.doesNotHaveTeam = false;
                                    break;
                                }else{
                                    context.doesNotHaveTeam = true;
                                }
                            }

                        })
                });

        }

        let all = context.members;
        for (let i = 0; i < all.length; i++) {
            if(all[i] == creator.username){
                context.isOnTeam = true;
                break;
            }
        }

        let arr = [];

        for (let i = 0; i < all.length; i++) {

            arr.push({
                username: all[i]
            })
        }

        context.members = arr;

        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs",
            teamMember: "./views/catalog/teamMember.hbs",
            teamControls: "./views/catalog/teamControls.hbs",
        }).then(function () {
            this.partial('./views/catalog/details.hbs')
        })


    };


    async function joinTeam(context) {

        let id = context.params.teamId.substr(1,);
        const baseUrl = "https://baas.kinvey.com";
        let creator = JSON.parse(storage.getData('UserCredentials'));
        let url = '/appdata/kid_Skxo-jnbr/Catalogs';
        let dataForCatalog;
       await fetch(baseUrl + url + "/" +id, {
           method: "get",
           headers: {"Content-type": "application/json", "Authorization": "Basic " + btoa(creator.username + ':' + creator.password)},
       }).then(x => x.json())
           .then(async (response) =>{
               dataForCatalog = response;
           });

        dataForCatalog.members.push(creator.username);
        console.log(dataForCatalog.credentials);
        let auth = dataForCatalog.credentials;

        await fetch(baseUrl + url + "/" + id, {
            method: "put",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Basic " + btoa(auth.username + ":" + auth.password)
            },
            body: JSON.stringify(dataForCatalog)
        }).then(async () => {
            await this.redirect(`#/catalog/:${id}`);
        })
    }


    return {
        getRegister,
        postRegister,
        getLogin,
        postLogin,
        logout,
        getAbout,
        getCatalog,
        createCatalogForm,
        postCatalogForm,
        displayTeam,
        joinTeam,
    }
}();