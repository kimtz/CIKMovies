using System;
using System.Linq;
using FluentAssertions;
using NUnit.Framework;

namespace CIK.Movies.Core.Tests
{
    [TestFixture]
    public class MovieCollectionTests
    {
        private MovieCollection _collection;

        [SetUp]
        public void SetUp()
        {
            _collection = new MovieCollection(new FakeStorage());
        }

        [Test]
        public void AddMovie_should_add_the_movie_to_the_collection()
        {
            var movie = new Movie(1, "Test");
            _collection.AddMovie(movie);

            _collection.Movies.Should().Contain(movie);
        }

        [Test]
        public void Should_not_be_able_to_add_the_same_movie_twice()
        {
            var movie = new Movie(1, "Test");

            _collection.AddMovie(movie);
            _collection.AddMovie(movie);

            _collection.Movies.Should().HaveCount(1);
        }

        [Test]
        public void Should_be_able_to_fetch_all_movies()
        {
            var movie = new Movie(1, "Test");

            _collection.AddMovie(movie);

            var movieFromCollection = _collection.Movies.First();

            movieFromCollection.Should().Be(movie);
        }

        [Test]
        public void RemoveMovie_should_remove_movie_from_the_collection()
        {
            var movie = new Movie(1, "Test");
            _collection.AddMovie(movie);
            _collection.RemoveMovie(movie);
            _collection.Movies.Should().NotContain(movie);
        }

        [Test]
        public void Should_Not_Remove_Movie_If_It_Does_Not_Exist()
        {
            ArgumentException exception = null;
            var movie_Star_Wars = new Movie(1, "Star Wars: Episode X");
            _collection.AddMovie(movie_Star_Wars);
            var movie_LOTR = new Movie(2, "The Lord of the Rings: The Fellowship of the Ring");
            try
            {
                _collection.RemoveMovie(movie_LOTR);
            }
            catch (ArgumentException ex)
            {
                exception = ex;
            }
            Assert.IsNotNull(exception);
        }
    }
}
