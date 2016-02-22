using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;

namespace CIK.Movies.Core.Tests
{
    public class FakeStorage : IStorage
    {
        public FakeStorage()
        {
            _movies = new List<Movie>();
        }

        private readonly List<Movie> _movies;

        public IEnumerable<Movie> GetAll() => _movies;

        public void Add(Movie movie)
        {
            if (!_movies.Contains(movie))
                _movies.Add(movie);
        }

        public void Remove(Movie movie)
        {
            if (_movies.Contains(movie))
            {
                _movies.Remove(movie);
            }
        }

        public void RemoveAll()
        {
            _movies.Clear();
        }
    }
}
