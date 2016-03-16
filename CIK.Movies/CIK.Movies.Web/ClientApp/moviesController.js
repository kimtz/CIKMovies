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
                    var moviesTemplate = '<ul class="movies-list">' +
                        JSON.parse(data)
                            .sort(compareByName)
                            .map(toClientMovie)
                            .map(toMovieTemplate)
                            .join('') +
                        '</ul>';
                    moviesContainer.movies = JSON.parse(data);
                    moviesContainer.innerHTML = moviesTemplate;
                }
                function compareByName(a, b) {
                    return +(a.name > b.name) || +(a.name === b.name) - 1;
                }
                function toClientMovie(m) {
                    var genre = m.genre != null ? m.genre : 'Action/Adventure';
                    var runtime = m.runTime != null ? m.runtime : '98 minutes';
                    var logoUrl = m.logoUrl != null ? m.logoUrl :
                        "http://www-images.theonering.org/torwp/wp-content/uploads/2011/04/LOTR_Trilogy_door_poster_L1.jpg";
                    return ({ title: m.Name, logoUrl: logoUrl, genre: genre, runtime: runtime });
                }
                function toMovieTemplate(m) {
                    return '<li><img src="' + m.logoUrl + '" class="logo" width="377" height="159"/>' +
                        '<div>' +
                        '<h2>' + m.title + '</h2>' +
                        '<div><span style="font-weight: bold;"> Genre: </span><span>' + m.genre + '</span></div>' +
                        '<div><span style="font-weight: bold;"> Runtime: </span><span>' + m.runtime + '</span></div>' +
                        '</div>' +
                        '</li>';
                }
            };
            return moviesController;
        })();
        ui.moviesController = moviesController;
    })(ui = clientApp.ui || (clientApp.ui = {}));
})(clientApp || (clientApp = {}));
//# sourceMappingURL=moviesController.js.map