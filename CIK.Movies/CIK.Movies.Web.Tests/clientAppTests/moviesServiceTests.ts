/// <reference path="references.ts"/>
/// <reference path="../../cik.movies.web/clientapp/moviesservice.ts" />

describe('Movies service', () => {
    var moviesService,
        movies,
        createdMovie;

    beforeEach(() => {
        movies = [{ id: 1, title: 'Star Wars: Episode IV' }, { id: 2, title: 'The Notebook' }];
        var httpService = {
            get(baseUrl) {
                var splitUrl = baseUrl.split('/');
                if (!isNumeric(splitUrl[splitUrl.length - 1]))
                    return createPromiseWithData(movies);
                return createPromiseWithData([movies[0]]);
            },
            post(baseUrl, movie) {
                createdMovie = movie;
            }
        }
        moviesService = new clientApp.services.MoviesService(httpService);
    });

    it('should provide movies', () => {
        expect(moviesService.getMovies().then().movies).toEqual(movies);
    });

    it('should provide movie by id', () => {
        expect(moviesService.getMovie('someUrl/1').then().movies[0]).toBe(movies[0]);
    });

    it('should create movie', () => {
        var newMovie = { id: 3, title: 'The Matrix' }
        moviesService.createMovie(newMovie);
        expect(createdMovie).toBe(newMovie);
    });

    function createPromiseWithData(data) {
        return {
            then() {
                var result = { movies: data }
                return result;
            }
        }
    }

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
});