import catalog from "../Catalog";
import {CatalogReducer} from "./reducers/CatalogReducer";
import {BasketReducer} from "./reducers/BasketReducer";
import {FavoriteReducer} from "./reducers/FavoriteReducer";
import {combineReducers} from "redux";

export const rootReducer= combineReducers(
    {
        catalog:CatalogReducer,
        basket:BasketReducer,
        favorite:FavoriteReducer
    }
)