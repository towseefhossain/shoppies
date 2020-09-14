const router = require('express').Router();
const movieRoutes = require('./movies');
const path = require('path');

router.use('/api/movies', movieRoutes)

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;