module clientApp.ui {
    let httpService = new services.HttpService();
    let moviesService = new services.MoviesService(httpService);
    let moviesController = new ui.moviesController(moviesService);
    moviesController.initialize();
}