const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allMovieFromDb => {
            //console.log("Hello movie", allMovieFromDb);
            res.render('movies', { movies: allMovieFromDb });

        })
        .catch(error => {
            console.log(error);
        });
})
/* GET movie page */
router.get('/movie/:movieId', (req, res, next) => {
    Movie.findOne({ id: req.params.movieId })
        .then(oneMovie => {
            console.log(oneMovie);
            res.render('movie', { theMovie: oneMovie })
        })
        .catch(error => {
            console.log(error);
        });

})
module.exports = router;
