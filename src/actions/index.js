

const showMovies = (payload) => ({
        type:"SHOW_MOVIES",
        payload
    
})

export const fetchMovies = (page) => {    
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=96ae8e7b1b0aadb8da7142acded692dc&language=es-ES&page=${page}`)
        .then(res => res.json())
        .then(res =>{
        
            dispatch(showMovies(res))
        })       
        
    }
}