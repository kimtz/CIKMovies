﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CIK.Movies.Core;

namespace CIK.Movies.API.Controllers
{
    public static class Storage
    {
        public static MovieCollection Collection = new MovieCollection(new JsonStorage());

        static Storage()
        {
            //Collection.AddMovie("I'm batman");
            //Collection.AddMovie("Star Wars IV");
        }
    }
}
