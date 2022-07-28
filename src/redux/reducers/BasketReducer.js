import {ADD_TO_BASKET, BASKET_MINUS, DELETE_TO_BASKET} from "../actionTypes";

const initialState={
    basket:JSON.parse(localStorage.getItem("basket2")) || [],
}
export  const  BasketReducer=(state=initialState,action)=>{
    switch (action.type){
        case ADD_TO_BASKET:


            const findProduct = state.basket.find(el => el.id === action.payload.id)
            if (findProduct) {
                return {
                    ...state, basket: state.basket.map(el => el.id === action.payload.id ?
                        {...el, quantity: el.quantity + 1} : el
                    )
                }
            } else {

                return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
            }



        case BASKET_MINUS: {
            const secondProduct = state.basket.find(el => el.id === action.payload)
            if (secondProduct.quantity > 1) {
                return {
                    ...state, basket: state.basket.map(el => {
                        if (el.id === action.payload) {
                            return {...el, quantity: el.quantity - 1}
                        } else {
                            return el;
                        }
                    })
                }

            }


        }
        case DELETE_TO_BASKET: {
            const id = action.payload
            return {...state, basket: state.basket.filter(el => el.id !== id)}
        }

        default :
            return state
    }
}