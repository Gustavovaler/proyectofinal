import { createStore, applyMiddleware, compose } from  'redux'
import { LoadMoviesReducer } from './reducers/index'
import thunk from 'redux-thunk'

const composed = compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(LoadMoviesReducer,undefined, composed)

export default store