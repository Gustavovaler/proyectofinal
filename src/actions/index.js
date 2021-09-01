

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

//GENERATE REQUEST TOKEN

//
//https://api.themoviedb.org/3/authentication/token/new?api_key=96ae8e7b1b0aadb8da7142acded692dc

// {
//     "success": true,
//     "expires_at": "2021-09-01 22:48:45 UTC",
//     "request_token": "72de08baa9941b7dd61ae708ec7eb6f834f56c54"
//   }
//CREAR UNA SESION

//https://www.themoviedb.org/authenticate/72de08baa9941b7dd61ae708ec7eb6f834f56c54
//https://api.themoviedb.org/3/authentication/session/new?api_key=96ae8e7b1b0aadb8da7142acded692dc


// https://api.themoviedb.org/3/authentication/guest_session/new?api_key=96ae8e7b1b0aadb8da7142acded692dc

// const session_id = {
//     success: true,
//     guest_session_id: "5421381990c81ec985d1723a0498f8a6",
//     expires_at: "2021-09-02 22:05:48 UTC"
//   }


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