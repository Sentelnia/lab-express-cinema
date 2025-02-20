const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema(
    {
        title: String,
        director: String,
        stars: Array,
        image: String,
        description: String,
        showTimes: Array
    }
)

module.exports = model("Movie", movieSchema);