import React from "react"
import {RiDeleteBinLine} from "react-icons/ri";

import {useDispatch} from "react-redux";
import {deleteToBasket} from "../../redux/actionCreate";

const DeleteToBasket=({catalog})=>{
  const dispatch=useDispatch()
    return(
        <button
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
  <span onClick={()=>dispatch(deleteToBasket(catalog.id))}
        className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  <RiDeleteBinLine className="text-red-800"/>
  </span>
    </button>
    )
}
export default DeleteToBasket