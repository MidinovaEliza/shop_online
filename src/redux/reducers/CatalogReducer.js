import {CONVERT_CURRENCY, GET_PRODUCTS, GET_SINGLE_PRODUCT} from "../actionTypes";

const initialState = {
    products: [],

    singleProduct: {},

    defaultRate:"$",
    currencies:{
        "$":1,
        "som":83.05,
        "рубль":57.82,
    },
    amount:1


}

export const CatalogReducer=(state=initialState, action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state,products: action.payload}

        case CONVERT_CURRENCY:
            return {...state,defaultRate: action.payload}
        case   GET_SINGLE_PRODUCT:
            return {...state,singleProduct: {...action.payload}}
        default :
            return state

    }

}