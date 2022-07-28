import React from "react"
import {BsCartPlusFill} from "react-icons/bs";

import {useDispatch, useSelector} from "react-redux";
import {addToBasket} from "../../redux/actionCreate";
import {NavLink} from "react-router-dom";

const AddToCart=({catalog})=>{
    const dispatch=useDispatch()


    return(
        <div>

            <button onClick={() =>

                    dispatch(addToBasket(catalog))

            }



           className="flex mx-2  text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mx-2">
                в корзину   <BsCartPlusFill className="ml-1"/></button>        </div>
    )
}
export default AddToCart