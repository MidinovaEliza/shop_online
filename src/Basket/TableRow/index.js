import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_BASKET, BASKET_MINUS, DELETE_TO_BASKET, DELETE_TO_FAVORITE} from "../../redux/actionTypes";

import DeleteToBasket from "../../Function/DeleteToBasket";
import {addToBasket, basketMinus} from "../../redux/actionCreate";


const TableRow=({catalog})=>{
    const dispatch=useDispatch()
    const {defaultRate,currencies}=useSelector(s=>s.catalog)
    let productTitle=" "
    catalog.title.split(" ").slice(0,3).map(el=>productTitle +=el + " ")
    let resultPrice=catalog.price * currencies[defaultRate]



    return(
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {productTitle}
            </th>
            <td className="py-4 px-6">
                <img src={ catalog.image} alt="" width="50px"/>
            </td>
            <td className="py-4 px-6">
                {catalog.size}
            </td>
            <td className="py-4 px-6">
                {(resultPrice*catalog.quantity).toFixed(2)}
            </td>
            <td className="py-4 px-6">
                <span onClick={()=>dispatch(addToBasket(catalog))} className="mx-2 font-bold text-xl ">+</span>
                {catalog.quantity}
                <span onClick={()=>dispatch(basketMinus(catalog.id))} className="mx-2 font-bold text-xl ">-</span>
            </td>
            <td className="py-4 px-6 text-right">
               <DeleteToBasket catalog={catalog} />
            </td>
        </tr>
    )
}
export default TableRow