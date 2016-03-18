using System;
using System.Web.Mvc;

namespace CIK.Movies.Web.Controllers
{
    public class JasmineController : Controller
    {
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
