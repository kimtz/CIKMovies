var clientApp;
(function (clientApp) {
    var services;
    (function (services) {
        var MoviesService = (function () {
            function MoviesService(httpService) {
                this.httpService = httpService;
                this.baseUrl = 'http://localhost:56794/api/Movies';
            }
            MoviesService.prototype.getMovies = function () {
                return this.httpService.get(this.baseUrl);
            };
            MoviesService.prototype.getMovie = function (id) {
                return this.httpService.get(this.baseUrl + id);
            };
            MoviesService.prototype.createMovie = function (movie) {
                return this.httpService.post(this.baseUrl, movie);
            };
            return MoviesService;
        })();
        services.MoviesService = MoviesService;
    })(services = clientApp.services || (clientApp.services = {}));
})(clientApp || (clientApp = {}));
//# sourceMappingURL=moviesService.js.map