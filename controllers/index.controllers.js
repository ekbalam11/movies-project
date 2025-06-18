const Movie = require('../models/movies.model')

const getHome = async (req, res) => {
    res.render('home', {
    })
}

const postNewMovie = async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({
                error: "Title is required"
            });
        }

        await Movie.create({
            title: req.body.title
        });

        return res.status(201).send('Peli añadida exitosamente');
    } catch (error) {
        console.error("Error creating movie:", error.message);
        return res.status(500).json({
           error: "Internal Server Error"
        });
    }
}

module.exports = {
    getHome,
    postNewMovie
}