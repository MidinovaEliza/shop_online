import React from "react";

import {useSelector} from "react-redux";
import Card from "./Card";
const Favorites=()=>{
const {favorites}=useSelector(s => s.favorite)
    return (
        <div className="container">
            <h1 className="text-red-700 text-center py-1 bg-white text-2xl text-left my-5">Ваши избранные  товары</h1>
            <div className="row flex flex-row flex-wrap">
                {
                    favorites.map(catalog => (
                            <Card catalog={catalog}/>
                        )
                    )
                }

            </div>
        </div>
    )
}
export default Favorites