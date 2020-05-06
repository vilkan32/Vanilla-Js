const app = Sammy("#main", function () {

     this.use('Handlebars', 'hbs');

    // Home
     this.get('#/home', homeController.getHome);

    // User
     this.get('#/register', userController.getRegister);
     this.get('#/login', userController.getLogin);

     this.post('#/register',  userController.postRegister);
     this.post('#/login', userController.postLogin);
     this.get('#/logout', userController.logout);
     this.get('#/about',  userController.getAbout);
     this.get('#/catalog', userController.getCatalog);
     this.get('#/create', userController.createCatalogForm);
     this.post('#/create', userController.postCatalogForm);
     this.get('#/catalog/:_id', userController.displayTeam);
     this.get('#/join/:teamId', userController.joinTeam);

});

(() => {
     app.run('#/home');
})();