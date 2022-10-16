
import {combineReducers} from 'redux'
import productReducer from './product/productReducer.js'

const rootReducer =combineReducers({
    products : productReducer
})

export default rootReducer