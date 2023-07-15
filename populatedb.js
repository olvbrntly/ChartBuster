#! /usr/bin/env node

  // Get arguments passed on command line
  const userArgs = process.argv.slice(2);
  
  const Movie = require("./models/movie");
  const Genre = require("./models/genre");
  const Copy = require("./models/copy");
  
  const genres = [];
  const movies = [];
  const copies = [];
  
  
  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false); // Prepare for Mongoose 7
  
  const mongoDB = userArgs[0];
  
  main().catch((err) => console.log(err));
  
  async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createGenres();
    await createMovies();
    await createCopies();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
  }
  
  // We pass the index to the ...Create functions so that, for example,
  // genre[0] will always be the Fantasy genre, regardless of the order
  // in which the elements of promise.all's argument complete.
  async function genreCreate(index, name) {
    const genre = new Genre({ name: name});
    await genre.save();
    genres[index] = genre;
    console.log(`Added genre: ${name}`);
  }
  
  async function movieCreate(index, title, director_fname, director_lname,genre,description,run_time,year_released) {
    const moviedetail = { title:title,director_fname:director_fname, director_lname:director_lname,genre:genre, description:description, run_time:run_time, year_released:year_released };
  
    const movie = new Movie(moviedetail);
  
    await movie.save();
    movies[index] = movie;
    console.log(`Added movie: ${title}`);
  }
  
  
  async function copyCreate(index, movie,  price,rental_period, status) {
    const copydetail = {
      movie: movie,
      price:price,
      rental_period:rental_period
    };
    //if (status != false) moviedetail.status = status;
  
    const copy = new Copy(copydetail);
    await copy.save();
    copies[index] = copy;
    console.log(`Added copy: ${movie}`);
  }
  
  async function createGenres() {
    console.log("Adding genres");
    await Promise.all([
      genreCreate(0, "Family"),
      genreCreate(1, "Adventure"),
      genreCreate(2, "Comedy"),
      genreCreate(3, "Sci-Fi"),

    ]);
  }
  
  //index, title, director_fname, director_lname,genre,description,run_time,year_released
  async function createMovies() {
    console.log("Adding movies");
    await Promise.all([
      movieCreate(0, 
        "Finding Nemo", 
        "Andrew", 
        "Stanton", 
        [genres[0],genres[1]],
        "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist’s office aquarium. It’s up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home – meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
        100,
        2003,
    ),
      movieCreate(1, 
        "Bridesmaids", 
        "Paul", 
        "Feig", 
        [genres[2]],
        "Annie’s life is a mess. But when she finds out her lifetime best friend is engaged, she simply must serve as Lillian’s maid of honor. Though lovelorn and broke, Annie bluffs her way through the expensive and bizarre rituals. With one chance to get it perfect, she’ll show Lillian and her bridesmaids just how far you’ll go for someone you love.",
        125,
        2011),

      movieCreate(2, 
        "Asteroid City", 
        "Wes", 
        "Anderson", 
        [genres[2], genres[3]],
        "Set in a fictional American desert town circa 1955, the itinerary of a Junior Stargazer/Space Cadet convention (organized to bring together students and parents from across the country for fellowship and scholarly competition) is spectacularly disrupted by world-changing events.",
        105,
        2023),
    ]);
  }

  //index, movie,  price, rental_period, status
  async function createCopies() {
    console.log("Adding authors");
    await Promise.all([
      copyCreate(0, movies[0], 1.99, 3, "Available"),
      copyCreate(1, movies[0], 1.99, 3, "Not Available"),
      copyCreate(2, movies[1], 2.99, 5, "Available"),
      copyCreate(3,
        movies[1],
        2.99,
        5,
        "Available"
      ),
      copyCreate(4,
        movies[1],
        2.99,
        5,
        "Available"
      ),
      copyCreate(5,
        movies[2],
        5.99,
        3,
        "Not Available"
      ),
      copyCreate(6,
        movies[2],
        5.99,
        3,
        "Available"
      ),
      copyCreate(7,
        movies[2],
        5.99,
        3,
        "Available"
      ),
      copyCreate(8,
        movies[2],
        5.99,
        3,
        "Not Available"
      ),
    ]);
  }