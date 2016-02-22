using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CIK.Movies.API.Controllers;
using NUnit.Framework;

namespace CIK.Movies.Core.Tests
{
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
            var createMovieName = new CreateMovieName();
            createMovieName.Name = "Test 1";
            moviesController.Post(createMovieName);
            var movies = moviesController.Get();
            Assert.AreEqual("Test 1", movies.First().Name);
        }

        [Test]
        public void Test_Delete_All()
        {
            var moviesController = new MoviesController();
            var createMovieName = new CreateMovieName();
            createMovieName.Name = "Test 1";
            moviesController.Post(createMovieName);
            moviesController.Delete();
            var movies = moviesController.Get();
            Assert.IsEmpty(movies);
        }

        [Test]
        public void Test_Delete_one_movie()
        {
            var moviesController = new MoviesController();
            moviesController.Delete();
            var createMovieName = new CreateMovieName();
            createMovieName.Name = "Test 1";
            moviesController.Post(createMovieName);
            moviesController.Delete(1);
            var movies = moviesController.Get();
            Assert.IsEmpty(movies);
        }
    }
}
