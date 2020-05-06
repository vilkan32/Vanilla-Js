$(() => {
    const app = Sammy("#main", function () {

        this.get('#/index', function () {

            this.swap('<p>Hello</p>')
        })
    });

    app.run();
});