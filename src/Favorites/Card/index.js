import React from "react"

import {FaTimesCircle} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import AddToCart from "../../Function/AddToCart";
import DeleteToFavorite from "../../Function/DeleteToFavorite";
import {DELETE_TO_FAVORITE} from "../../redux/actionTypes";
import AddedToCard from "../../Function/AddedToCard";
import {Link} from "react-router-dom";
const Card=({catalog})=>{
    const dispatch=useDispatch()


    const {basket}=useSelector(s=>s.basket)
    const {defaultRate,currencies}=useSelector(s=>s.catalog)
    let isAdded=basket.find(el=>el.id===catalog.id)
    const deleteFromFav=(id)=>{
        dispatch({type:DELETE_TO_FAVORITE,payload:id})
    }
    let productTitle=" "
    catalog.title.split(" ").slice(0,3).map(el=>productTitle +=el + " ")
    let resultPrice=catalog.price * currencies[defaultRate]
    return(
        <div className="basis-1/4">
            <div
                className="max-w-sm mx-4 my-3  bg-green-400 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/product-detail/${catalog.id}`}>
                    <img className="rounded-t-lg img2"
                         style={{
                             height:"300px",
                             width:"300px"
                         }}
                         src={catalog.image} alt=""/>
                </Link>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">{productTitle}
                        </h5>
                        <p className="mb-3  tracking-tight text-gray-900 dark:text-white">price: {resultPrice.toFixed(2)}</p>
                        <div className="flex items-center">
                          <span>

                                 {/*{*/}
                                 {/*    isAdded ? <AddedToCard/> :<AddToCart catalog={catalog}  />*/}
                                 {/*}*/}
                              <Link to={`/product-detail/${catalog.id}`}>
                                  <button
                                      className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
  <span
      className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      перейти
  </span>
</button>
                             </Link>

                          </span>
                            <span>

                                <DeleteToFavorite  catalog={catalog}/>
                            </span>


                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}
export default Card