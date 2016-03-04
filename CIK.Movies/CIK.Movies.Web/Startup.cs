using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CIK.Movies.Web.Startup))]
namespace CIK.Movies.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
