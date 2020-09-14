const Movie = require('../models/Movies')

module.exports = {
    findAll: function (req, res) {
        Movie.find(req.query)
            .then(movies => res.json(movies))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        Movie.create(req.body)
            .then("CREATE SUCCESS")
            .then(newMovie => res.json(newMovie))
            .catch(err => res.status(422).json(err))
    }

};