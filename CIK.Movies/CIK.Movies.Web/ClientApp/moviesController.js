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
                        console.log("Inne i all movies");
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
        var addMoviesController = (function () {
            function addMoviesController(moviesService) {
                this.moviesService = moviesService;
            }
            addMoviesController.prototype.initialize = function () {
                var self = this;
                var addMoviesButton = document.getElementById('addMoviesButton');
                var newMovieName = document.getElementById('newMovieName');
                if (addMoviesButton) {
                    addMoviesButton.addEventListener('click', function (event) {
                        console.log("Inne i button");
                        self.moviesService
                            .createMovies(newMovieName)
                            .then(self.onReceivedMovies(newMovieName));
                    }, false);
                }
            };
            addMoviesController.prototype.onReceivedMovies = function (newMovieName) {
                var addMoviesContainer = document.getElementById('addMoviesContainer');
                if (addMoviesContainer) {
                    var template = '<li Thank you, the movie has been added' + newMovieName + ' </li>';
                    addMoviesContainer.innerHTML = template;
                }
            };
            return addMoviesController;
        })();
        ui.addMoviesController = addMoviesController;
    })(ui = clientApp.ui || (clientApp.ui = {}));
})(clientApp || (clientApp = {}));
//# sourceMappingURL=moviesController.js.map