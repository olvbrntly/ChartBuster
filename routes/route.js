const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController")
const genreController = require("../controllers/genreController")
const copyController = require("../controllers/copyController")


// ----- MOVIE ROUTES -----

router.get("/", movieController.movie_list);

router.get("/movie/create", movieController.movie_get_create);

router.post("/movie/create",movieController.movie_create_post);

router.get("/movie/delete", movieController.movie_delete_)



