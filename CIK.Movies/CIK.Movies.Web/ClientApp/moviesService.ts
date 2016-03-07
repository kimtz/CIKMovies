module clientApp.services {

    export class MoviesService {
        private httpService;
        private baseUrl;

        constructor(httpService) {
            this.httpService = httpService;
            this.baseUrl = 'http://localhost:56794/api/Movies';
        }

        getMovies() {
            return this.httpService.get(this.baseUrl);
        }

        getMovie(id) {
            return this.httpService.get(this.baseUrl + id);
        }

        createMovie(name) {
            return this.httpService.post(this.baseUrl, name);
        }
    }
}