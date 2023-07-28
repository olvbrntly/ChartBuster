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

// ----- COPY ROUTES -----

//handles the creation of copies
router.get("/copy/create", copyController.copy_get_create);

router.post("/copy/create",copyController.copy_post_create);

//handles deletion of copies
router.get("/copy/delete", copyController.copy_get_delete);

router.post("/copy/delete", copyController.copy_post_delete);

//handles updating copies
router.get("/copy/update", copyController.copy_get_update)

router.post("/copy/update", copyController.copy_post_update)

//displays the detail of the selected copy
router.get("/copy:id", copyController.copy_detail)

//displays list of copies
router.get("/copy", copyController.copy_list)

// ----- GENRE ROUTES -----

//handles the creation of genres
router.get("/genre/create", genreController.genre_get_create);

router.post("/genre/create",genreController.genre_post_create);

//handles deletion of genres
router.get("/genre/delete", genreController.genre_get_delete);

router.post("/genre/delete", genreController.genre_post_delete);

//handles updating genres
router.get("/genre/update", genreController.genre_get_update)

router.post("/genre/update", genreController.genre_post_update)

//displays the detail of the selected genre
router.get("/genre:id", genreController.genre_detail)

//displays list of genres
router.get("/genre", genreController.genre_list)
