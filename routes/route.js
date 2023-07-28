const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController")
const genreController = require("../controllers/genreController")
const copyController = require("../controllers/copyController")


// ----- MOVIE ROUTES -----

router.get("/", movieController.movie_list);

router.get("/movie/create", movieController.movie_get_create);

router.post("/movie/create",movieController.movie_post_create);

router.get("/movie/delete", movieController.movie_get_delete);

router.post("/movie/delete", movieController.movie_post_delete);

router.get("/movie/update", movieController.movie_get_update)

router.post("/movie/update", movieController.movie_post_update)

router.get("/movie:id", movieController.movie_detail)

router.get("/movie", movieController.movie_list)




