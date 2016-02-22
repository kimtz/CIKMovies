using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using CIK.Movies.Core;


namespace CIK.Movies.API.Controllers
{
    public class MoviesController : ApiController
    {
        public IEnumerable<Movie> Get()
        {
            return Storage.Collection.Movies;
        }

        public Movie Get(int id)
        {
            var movie = Storage.Collection.Movies.FirstOrDefault(x => x.Id == id);

            return movie;
        }

        public void Post(CreateMovie input)
        {
            Storage.Collection.AddMovie(input.Name);
        }

        public void Delete(int id)
        {
            var movie = Storage.Collection.Movies.FirstOrDefault(x => x.Id == id);
            Storage.Collection.RemoveMovie(movie);
        }

        public void Delete()
        {
            Storage.Collection.RemoveAll();
        }
    }

    public class CreateMovie
    {
        // public int Id = Storage.Collection.GetMovieId();
        public string Name { get; set; }
    }
}
