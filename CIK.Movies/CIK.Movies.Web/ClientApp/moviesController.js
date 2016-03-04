var clientApp;
(function (clientApp) {
    var ui;
    (function (ui) {
        var moviesController = (function () {
            function moviesController(moviesService) {
                this.moviesService = moviesService;
            }
            moviesController.prototype.initialize = function () {
                var self = this;
                var moviesButton = document.getElementById('getMoviesButton');
                if (moviesButton) {
                    moviesButton.addEventListener('click', function (event) {
                        self.moviesService
                            .getMovies()
                            .then(self.onReceivedMovies);
                    }, false);
                }
            };
            moviesController.prototype.onReceivedMovies = function (data) {
                var moviesContainer = document.getElementById('moviesContainer');
                if (moviesContainer) {
                    var movies = JSON.parse(data);
                    var template = '<ul>';
                    movies.forEach(function (m) {
                        template += '<li id="movie-' + m.id + '">' + m.name + '</li>';
                    });
                    template += '</ul>';
                    moviesContainer.innerHTML = template;
                }
            };
            return moviesController;
        })();
        ui.moviesController = moviesController;
    })(ui = clientApp.ui || (clientApp.ui = {}));
})(clientApp || (clientApp = {}));
//# sourceMappingURL=moviesController.js.map