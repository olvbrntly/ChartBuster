const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController")
const genreController = require("../controllers/genreController")
const copyController = require("../controllers/copyController")


// ----- MOVIE ROUTES -----

//will display list of movies as default
router.get("/", movieController.movie_list);

//handles the creation of movies
router.get("/movie/create", movieController.movie_get_create);

router.post("/movie/create",movieController.movie_post_create);

//handles deletion of movies
router.get("/movie/delete", movieController.movie_get_delete);

router.post("/movie/delete", movieController.movie_post_delete);

//handles updating movies
router.get("/movie/update", movieController.movie_get_update)

router.post("/movie/update", movieController.movie_post_update)

//displays the detail of the selected movie
router.get("/movie:id", movieController.movie_detail)

//displays list of movies
router.get("/movie", movieController.movie_list)




