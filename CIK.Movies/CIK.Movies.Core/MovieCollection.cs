using System.Collections.Generic;
using System.Linq;

namespace CIK.Movies.Core
{
    public class MovieCollection
    {
        private readonly IStorage _storage;
        public IEnumerable<Movie> Movies => _storage.GetAll();

        public MovieCollection(IStorage storage)
        {
            _storage = storage;
        }

        public void AddMovie(Movie movie)
        {
            _storage.Add(movie);
        }

        public void RemoveMovie(Movie movie)
        {
            if (Movies.Contains(movie))
            {
                _storage.Remove(movie);
            } else
            {
                throw new System.ArgumentException("The movie does not exist");
            }
        }
    }
}
