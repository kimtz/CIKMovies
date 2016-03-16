/// <reference path="references.ts"/>
/// <reference path="../../cik.movies.web/clientapp/moviescontroller.ts" />

describe('Movies controller', () => {
    var moviesController,
        getMoviesButton,
        moviesContainer,
        serviceMovies;

    beforeEach(() => {
        setUpFakeViewComponents();

        var moviesService = {
            getMovies() {
                return {
                    then(callback) {
                        serviceMovies = [{ id: 1, name: 'The Matrix' }, { id: 2, name: 'Star Wars' }, { id: 3, name: 'Another movie' }];;
                        callback(JSON.stringify(serviceMovies));
                    }
                }
            }
        }
        moviesController = new clientApp.ui.moviesController(moviesService);
        moviesController.initialize();
    });

    describe('When clicking the get movies button', () => {
        beforeEach(() => {
            getMoviesButton.click();
        });

        it('should get movies', done => {
            setTimeout(() => {
                expect(moviesContainer.movies).toEqual(serviceMovies);
                done();
            }, 0);
        });

        it('should display movies', () => {
            serviceMovies.forEach(m => expect(moviesContainer.innerHTML.indexOf(m.title) !== -1));
        });

        it('should show movies sorted by title', () => {
            expect(getPosition('Another movie')).toBeLessThan(getPosition('Star Wars'));
            expect(getPosition('Star Wars')).toBeLessThan(getPosition('The Matrix'));
        });

        function getPosition(name) {
            return moviesContainer.innerHTML.indexOf(name);
        }
    });

    function setUpFakeViewComponents() {
        getMoviesButton = document.createElement('button');
        moviesContainer = document.createElement('container');

        document.getElementById = jasmine.createSpy('HTML Element').and.callFake(id => {
            if (id === 'getMoviesButton')
                return getMoviesButton;

            if (id === 'moviesContainer')
                return moviesContainer;

            return null;
        });
    }
});