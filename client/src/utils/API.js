import axios from 'axios';

export default {
    getMovies: function () {
        return axios.get('/api/movies');
    },
    saveMovies: function (movieData) {
        console.log(movieData)
        return axios.post('/api/movies', movieData);
    }
}