var results = [
    {
        "Title": "Geo-Disaster",
        "Year": "2017",
        "imdbID": "tt7204400",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmU4ZDk1YTgtNWJmNy00NDNlLWIzN2ItYWUwZTY0MzYzYzYzXkEyXkFqcGdeQXVyNzMyNzE5OA@@._V1_SX300.jpg"
    },
    {
        "Title": "Geo: Geo's garage",
        "Year": "2006",
        "imdbID": "tt0794095",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmRlNWVlOWYtOGUwYy00NWUyLTgwOTYtNmZjZjkxNzA4YTIzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTgwOTE5NDk@._V1_SX300.jpg"
    },
    {
        "Title": "Variable Geo",
        "Year": "1999",
        "imdbID": "tt0368402",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxNTk3ODkxM15BMl5BanBnXkFtZTcwMTUyMzMyMQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Geo-Lobotomy",
        "Year": "2005",
        "imdbID": "tt1368466",
        "Type": "movie",
        "Poster": "N/A"
    },
    {
        "Title": "Alien Defender Geo-Armor: Kishin Corps",
        "Year": "1993",
        "imdbID": "tt0106046",
        "Type": "movie",
        "Poster": "https://ia.media-imdb.com/images/M/MV5BMTYxMTEzNTY0MV5BMl5BanBnXkFtZTcwOTIyMzgyMQ@@._V1_SX300.jpg"
    },
    {
        "Title": "yeo-ja jeon-jaeng: bi-yeol-han geo-lae",
        "Year": "2015",
        "imdbID": "tt6892018",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTA3NjdhMDAtYTliOS00MzY2LWI4OTItZWIyZjhkYWMxNWExXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title": "Geo: Ego Geo",
        "Year": "2008",
        "imdbID": "tt1515783",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWY2NTJiMzktYWFjMy00OTYxLTg4Y2EtYjljYTE5YjAxMmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTgwOTE5NDk@._V1_SX300.jpg"
    },
    {
        "Title": "Geo Kids",
        "Year": "1995",
        "imdbID": "tt0204343",
        "Type": "movie",
        "Poster": "N/A"
    },
    {
        "Title": "King of Fighters '96 Neo-Geo Collection",
        "Year": "1997",
        "imdbID": "tt0442798",
        "Type": "movie",
        "Poster": "N/A"
    },
    {
        "Title": "Geo. Dewey Washington",
        "Year": "1929",
        "imdbID": "tt1053250",
        "Type": "movie",
        "Poster": "N/A"
    },
    {
        "Title": "Geo. Dewey Washington",
        "Year": "1929",
        "imdbID": "tt1053250",
        "Type": "movie",
        "Poster": "N/A"
    }
]

const accumulatedTotals = results.reduce(
    (totals, p) => ({ ...totals, [p.imdbID]: (totals[p.imdbID] || 0) + 1 }),
    {}
)

var totals = []

for (id in accumulatedTotals) {
    totals.push(
        {
            movie: results.find(element => element.imdbID == id),
            frequency: accumulatedTotals[id]
        },
    )
}

console.log(totals.sort((a, b) => (b.frequency - a.frequency)))