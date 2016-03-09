module clientApp.ui {
    export class moviesController {

        private moviesService;

        constructor(moviesService) {
            this.moviesService = moviesService;
        }

        initialize() {
            console.log("init");
            var self = this;
            const moviesButton = document.getElementById('getMoviesButton');
            if (moviesButton) {
                moviesButton.addEventListener('click', event => {
                    console.log("Inne i all movies")
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

module clientApp.ui {

export class addMoviesController {

        private moviesService;
        constructor(moviesService) {
            this.moviesService = moviesService;
        }

        initialize() {
            var self = this;
            const addMoviesButton = document.getElementById('addMoviesButton');
            const newMovieName = document.getElementById('newMovieName');
            if (addMoviesButton) {
                addMoviesButton.addEventListener('click', event => {
                    console.log("Inne i button")
                    self.moviesService
                        .createMovies(newMovieName)
                        .then(self.onReceivedMovies(newMovieName));
                }, false);
            }
        }

        private onReceivedMovies(newMovieName) {
            const addMoviesContainer = document.getElementById('addMoviesContainer');
            if (addMoviesContainer) {
                var template = '<li Thank you, the movie has been added' + newMovieName + ' </li>';
                addMoviesContainer.innerHTML = template;
            }
        }

    }
}