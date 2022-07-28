import {ADD_TO_FAVORITE, DELETE_TO_BASKET, DELETE_TO_FAVORITE} from "../actionTypes";

const initialState={
    favorites:JSON.parse(localStorage.getItem("favorites")) ||[]
}
export const FavoriteReducer=(state=initialState, action)=>{
    switch (action.type){
        case ADD_TO_FAVORITE:

        {
            return {...state,favorites: [...state.favorites,action.payload]}
        }

        case DELETE_TO_FAVORITE: {

            return {...state, favorites: state.favorites.filter(el => el.id !== action.payload)}

        }
        default:
            return state
    }
}