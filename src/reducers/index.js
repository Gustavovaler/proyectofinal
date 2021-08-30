

export const LoadMoviesReducer = (state ={} , action) => {

    const {type} = action
    switch (type) {
        case "SHOW_MOVIES":
            
            return {
                ...state , results: action.payload.results
            }
    
        default:
            return state
    }

}