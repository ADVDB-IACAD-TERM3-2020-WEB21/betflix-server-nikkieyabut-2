const getMovieList = () => {
    // TODO: Call the API here
    return [
        {"_id":{"$oid":"5e630851836dbc1b0b0e91c9"},"title":"Castlevania","type":"series","genres":["Fantasy","Animated"],"videos":[{"title":"Ep 1","filename":"castlevania/s01e01.mp4"}]},
        {"_id":{"$oid":"5e630851836dbc1b0b0e91c9"},"title":"Fullmetal Alchemist","type":"series","genres":["Fantasy","Animated"],"videos":[{"title":"Ep 1","filename":"castlevania/s01e01.mp4"}]}
    ]
}

const movies = getMovieList()
const movieListElement = document.querySelector("#movie-list")

const moviesElements = movies.map(movie => {
    const text = movie.title
    const listItem = document.createElement('div')
    listItem.classList.add("movie-container")
    listItem.textContent = text

    return listItem
})

movieListElement.append(...moviesElements)