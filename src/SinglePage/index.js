import React, {useEffect, useState} from 'react';
import {addToBasket, getSingleProduct} from "../redux/actionCreate";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import AddedToCard from "../Function/AddedToCard";
import AddToCart from "../Function/AddToCart";
import AddToFavorite from "../Function/AddToFavorite";

const SinglePage = () => {


    const dispatch = useDispatch()
    const {id} = useParams()

    const {basket} = useSelector(s => s.basket)
    const {defaultRate, currencies, singleProduct} = useSelector(s => s.catalog)
    const {title, price, image, description} = singleProduct


    let isAdded = basket.find(el => el.id === singleProduct.id)

    const basket2 = JSON.parse(localStorage.getItem("basket2")) || []
    const found = basket2.find(el => el.id === singleProduct.id)


    let resultPrice = singleProduct.price * currencies[defaultRate]
    const [size, setSize] = useState("")
    const handleChange = (e) => {
        setSize(e.target.value)
        singleProduct.size = (e.target.value)

    }
    console.log(size)


    const handleCard = () => {

            return isAdded ? <AddedToCard/>
                : size.length ? <AddToCart catalog={singleProduct}/> : <AddToCart />

    }


    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [])
    return (
        <div className="container">
            <div className="flex flex-wrap flex-row">
                <div className="basis-1/2">
                    <img style={{
                        width: "500px",
                        height: "600px",
                        marginTop: "30px",
                        marginBottom: "30px"
                    }} src={image} alt=""/>
                </div>
                <div className="basis-1/2 my-10">
                    <h1 className=" text-red-500 text-center text-3xl p-4 ">{title}</h1>
                    <p className="my-2 text-red-500 text-center text-xl   p-6">{description}</p>
                    <p className=" my-2 text-red-500 text-center text-xl   p-6">Price:{resultPrice}</p>

                    <div onChange={handleChange} style={{
                        marginBottom: "20px",
                        marginTop: "10px",
                        marginLeft: "170px"
                    }} className="flex flex-wrap ">

                        <input type="radio" className="radio-button" name="size" value="42"/>
                        <label className="label" htmlFor="">42</label>


                        <input type="radio" className="radio-button" name="size" value="44"/>
                        <label className="label" htmlFor="">44</label>


                        <input type="radio" value="46" className="radio-button" name="size"/>
                        <label className="label" htmlFor="">46</label>


                        <input type="radio" name="size" className="radio-button" value="48"/>
                        <label className="label" htmlFor="">48</label>

                    </div>


                    <div className="flex items-center text-center " style={{
                        marginLeft: "190px"
                    }}>
                          <span>{

                              handleCard()

                          }</span>
                        <span><AddToFavorite catalog={singleProduct}/></span>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default SinglePage;