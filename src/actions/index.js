

const showMovies = (payload) => ({
        type:"SHOW_MOVIES",
        payload
    
})

const showDetail = (payload) => ({
    type: "SHOW_DETAIL", 
    payload
})

const addFavoriteAction = (payload) => ({
    type:"ADD_TO_FAVORITES", 
    payload
})

//example single movie
//https://api.themoviedb.org/3/movie/619297?api_key=96ae8e7b1b0aadb8da7142acded692dc&language=es-ES
//example movie list 
//`https://api.themoviedb.org/3/movie/popular?api_key=96ae8e7b1b0aadb8da7142acded692dc&language=es-ES&page=${page}`

export const fetchMovies = (page) => {    
    return dispatch => {
        
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=96ae8e7b1b0aadb8da7142acded692dc&language=es-ES&page=${page}`)
        .then(res => res.json())
        .then(res =>{
        
            dispatch(showMovies(res))
        })       
        
    }
}

export const fetchDetail = id => {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=96ae8e7b1b0aadb8da7142acded692dc&language=es-ES`)
        .then(res => res.json())
        .then(res => {
            dispatch(showDetail(res))
        })

    }
}

export const addFavList = id => {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=96ae8e7b1b0aadb8da7142acded692dc&language=es-ES`)
        .then(res => res.json())
        .then(res => {
            dispatch(addFavoriteAction(res))
        })

    }
}