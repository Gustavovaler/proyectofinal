

export const LoadMoviesReducer = (state = {favs:[], detail: {}, results:[]} , action) => {

    const {type} = action
    switch (type) {
        case "SHOW_MOVIES":
            
            return {
                ...state , results: action.payload.results
            }

        case "SHOW_DETAIL":
            return {
                ...state, 
                detail:action.payload
            }

        case "ADD_TO_FAVORITES":
            state.favs.push(action.payload)
            let results = state.results
            return {
                ...state ,
                favs: state.favs ,
                results:results
            }
    
        default:
            return state
    }

}