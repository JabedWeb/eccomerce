
import {combineReducers} from 'redux'
import productReducer from './product/productReducer.js'

const rootReducer =combineReducers({
    product : productReducer
})

export default rootReducer