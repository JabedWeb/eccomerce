

//get all products

import GET_ALL_PRODUCT from "./actionTypes"

export const getAllProducts=(payload)=>{
    return {
        type : GET_ALL_PRODUCT,
        payload : payload
    }
}