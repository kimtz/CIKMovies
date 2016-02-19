using System.Collections.Generic;

namespace CIK.Movies.Core
{
    public interface IStorage
    {
        IEnumerable<Movie> GetAll();
        void Add(Movie movie);
        void Remove(Movie movie);
    }
}
