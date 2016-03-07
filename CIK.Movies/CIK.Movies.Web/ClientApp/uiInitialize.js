var clientApp;
(function (clientApp) {
    var ui;
    (function (ui) {
        var httpService = new clientApp.services.HttpService();
        var moviesService = new clientApp.services.MoviesService(httpService);
        var moviesController = new ui.moviesController(moviesService);
        var addMoviesController = new ui.addMoviesController(moviesService);
        moviesController.initialize();
        addMoviesController.initialize();
    })(ui = clientApp.ui || (clientApp.ui = {}));
})(clientApp || (clientApp = {}));
//# sourceMappingURL=uiInitialize.js.map