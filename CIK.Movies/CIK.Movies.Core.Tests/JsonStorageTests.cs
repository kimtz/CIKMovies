using System;
using System.IO;
using System.Linq;
using FluentAssertions;
using NUnit.Framework;

namespace CIK.Movies.Core.Tests
{
    [Ignore("Integration tests")]
    [TestFixture]
    public class JsonStorageTests
    {
        private JsonStorage _storage;

        [SetUp]
        public void SetUp()
        {
            _storage = new JsonStorage();
        }

        [TearDown]
        public void TearDown()
        {
            if (File.Exists("storage.txt"))
                File.Delete("storage.txt");
        }

        [Test]
        public void Should_Not_Contain_Movies_When_Created()
        {
            _storage.GetAll().Count().Should().Be(0);
        }

        [Test]
        public void Should_Persist_Movies()
        {
            var movie = new Movie(1, "Star Wars: Episode X");
            _storage.Add(movie);
            _storage.GetAll().First().Should().Be(movie);
        }

        [Test]
        public void Should_Not_Add_Movie_That_Already_Exists()
        {
            var movie = new Movie(1, "Star Wars: Episode X");
            _storage.Add(movie);
            _storage.Add(movie);
            _storage.GetAll().Count().Should().Be(1);
        }

        [Test]
        public void Should_Remove_Movie_If_It_Exists()
        {
            var movie = new Movie(1, "Star Wars: Episode X");
            _storage.Add(movie);
            _storage.Remove(movie);
            _storage.GetAll().Count().Should().Be(0);
        }

        [Test]
        public void Should_Not_Remove_Movie_If_It_Does_Not_Exists()
        {
            ArgumentException exception = null;
            var movie_Star_Wars = new Movie(1, "Star Wars: Episode X");
            _storage.Add(movie_Star_Wars);
            var movie_LOTR = new Movie(2, "The Lord of the Rings: The Fellowship of the Ring");
            try
            {
                _storage.Remove(movie_LOTR);
            }
            catch (ArgumentException ex)
            {
                exception = ex;
            }
           Assert.IsNotNull(exception);
        }
    }
}
