import React, {useState} from "react"
import {AiFillHeart} from "react-icons/ai";

import {useDispatch} from "react-redux";
import {addToFavorite, deleteFromFav} from "../../redux/actionCreate";

const AddToFavorite=({catalog})=>{
    const favorites=  JSON.parse(localStorage.getItem("favorites")) || []
    const foundProduct=favorites.find(el=>el.id===catalog.id)
    const [isLiked,setIsLiked]=useState(foundProduct ?foundProduct.isLiked || false:false)
    const filBtn=()=>{
        if(isLiked){
            setIsLiked(false)
            return dispatch(deleteFromFav(catalog.id))
        }
        else{
            setIsLiked(true)
            return dispatch(addToFavorite(catalog))
        }
    }
    const colorize=()=>{
        if(foundProduct){
            if(foundProduct.isLiked){
return "text-red-500 "
            }else{
                return "text-white"
            }
        }
        else {
            return "text-white"
        }
    }
const dispatch=useDispatch()
    return(

            <button

onClick={()=>filBtn()}
                className="bg-gradient-to-r bg-lime-500  hover:bg-gradient-to-br focus:ring-4 focus:outline-none  shadow-lg shadow-red-500/50 dark:shadow-lg  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <AiFillHeart className={colorize()}/>
            </button>

    )
}
export default AddToFavorite