import React from "react"
import {useSelector} from "react-redux";

const Orders=()=>{
    const {basket}=useSelector(s=>s)
    const totalSum=basket.reduce((acc,el)=>{
        return acc+(el.price*el.quantity)
    },0)
    return(
        <div className="container">

            <h1 className="text-2xl mt-4">Общая сумма:{totalSum}</h1>
            <form className="">
                <div className="mb-3 mt-5  ">
                   <h1>Имя</h1>
                    <input type="text"
                           className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           placeholder="name@flowbite.com" required/>
                </div>
                <div className="mb-2">
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Фамилия</label>
                    <input type="text"
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           required/>
                </div>
                <div className="mb-2">
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Отчество</label>
                    <input type="text"
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           required/>
                </div>
                <div className="mb-2">
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Номер телефона</label>
                    <input type="number"
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           required/>
                </div>
                <div className="mb-2">
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Адрес доставки</label>
                    <input type="text"
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           required/>
                </div>
                <div className="mb-2">
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                    <input type="email"
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           required/>
                </div>
                <div className="mb-2">
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Способ оплаты</label>
                    <input type="text"
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="repeat-password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Способ доставки</label>
                    <input type="text"
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           required/>
                </div>

                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Подтвердить заказ
                </button>
            </form>
        </div>
    )
}
export default Orders