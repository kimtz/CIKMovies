module clientApp.ui {
    export class moviesController {

        private moviesService;
        constructor(moviesService) {
            this.moviesService = moviesService;
        }

        initialize() {
            var self = this;
            const moviesButton = document.getElementById('getMoviesButton');
            if (moviesButton) {
                moviesButton.addEventListener('click', event => {
                    self.moviesService
                        .getMovies()
                        .then(self.onReceivedMovies);
                }, false);
            }
        }

        private onReceivedMovies(data) {
            const moviesContainer = document.getElementById('moviesContainer');
            if (moviesContainer) {
                let movies = JSON.parse(data);
                var template = '<ul>';
                movies.forEach(m => {
                    template += '<li id="movie-' + m.id + '">' + m.name + '</li>';
                });
                template += '</ul>';
                moviesContainer.innerHTML = template;
            }
        }
    }
}