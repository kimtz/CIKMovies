using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;

namespace CIK.Movies.Core
{
    public class JsonStorage : IStorage
    {
        public JsonStorage()
        {
            if (!StorageExists)
                Save(new List<Movie>());
        }

        public IEnumerable<Movie> GetAll()
        {
            return JsonConvert.DeserializeObject<IEnumerable<Movie>>(File.ReadAllText(FilePath));
        }

        public void Add(Movie movie)
        {
            var movies = GetAll().ToList();
            if (!movies.Contains(movie))
            {
                movies.Add(movie);
                Save(movies);
            }
        }

        public void Remove(Movie movie)
        {
            var movies = GetAll().ToList();
            if (movies.Contains(movie))
            {
                movies.Remove(movie);
                Save(movies);
            }
            else
            {
                throw new System.ArgumentException("The movie does not exist");
            }
        }

        private static bool StorageExists => File.Exists(FilePath);

        private static string FilePath => "C:/Users/kim.tengbom/Documents/Storage/storage.txt";

        private static void Save(IEnumerable<Movie> movies)
        {
            File.WriteAllText(FilePath, JsonConvert.SerializeObject(movies));
        }
    }
}
