using NUnit.Framework;
using FluentAssertions;

namespace CIK.Movies.Core.Tests
{
    [TestFixture]
    public class MovieTests
    {
        private Movie _movie;

        [SetUp]
        public void SetUp()
        {
            _movie = new Movie(1, "Name");
        }

        [Test]
        public void Should_set_id_on_creation()
        {
            _movie.Id.Should().Be(1);
        }

        [Test]
        public void Should_set_name_on_creation()
        {
            _movie.Name.Should().Be("Name");
        }
    }
}
