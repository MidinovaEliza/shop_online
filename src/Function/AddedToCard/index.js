import React from "react"
import {Link, NavLink} from "react-router-dom";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {BsCartPlusFill} from "react-icons/bs";
import {useState} from "react";
import {useSelector} from "react-redux";
const AddedToCard=({catalog})=>{



    return(
   <div>
<Link to="/basket">

    <button


        className="flex mx-2  text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mx-2">
        перейти
        <AiOutlineCheckCircle/>
    </button>
</Link>

   </div>
    )
}
export default AddedToCard