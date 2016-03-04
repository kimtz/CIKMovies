using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CIK.Movies.API.Controllers;
using CIK.Movies.Core;
using CIK.Movies.Core.Tests;
using NUnit.Framework;

namespace CIK.Movies.API.Tests
{
    // Note! These tests change the content of the storage.txt file!
    [Ignore("Integration tests")]
    [TestFixture]
    public class MoviesControllerTests
    {
        private MovieCollection _collection;

        [SetUp]
        public void SetUp()
        {
            _collection = new MovieCollection(new FakeStorage());
        }

        [Test]
        public void Test_Get()
        {
            var moviesController = new MoviesController();
            var movies = moviesController.Get();
            Assert.IsEmpty(movies);
        }

        [Test]
        public void Test_Post()
        {
            var moviesController = new MoviesController();
            var createMovie = new CreateMovie();
            createMovie.Name = "Test 1";
            moviesController.Post(createMovie);
            var movies = moviesController.Get();
            Assert.AreEqual("Test 1", movies.First().Name);
        }

        [Test]
        public void Test_Delete_All()
        {
            var moviesController = new MoviesController();
            var createMovie = new CreateMovie();
            createMovie.Name = "Test 1";
            moviesController.Post(createMovie);
            moviesController.Delete();
            var movies = moviesController.Get();
            Assert.IsEmpty(movies);
        }

        [Test]
        public void Test_Delete_one_movie()
        {
            var moviesController = new MoviesController();
            moviesController.Delete();
            var createMovie = new CreateMovie();
            createMovie.Name = "Test 1";
            moviesController.Post(createMovie);
            moviesController.Delete(1);
            var movies = moviesController.Get();
            Assert.IsEmpty(movies);
        }
    }
}
