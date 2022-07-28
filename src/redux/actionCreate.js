
import {
    ADD_TO_BASKET,
    ADD_TO_FAVORITE,
    BASKET_MINUS, CONVERT_CURRENCY,
    DELETE_TO_BASKET,
    DELETE_TO_FAVORITE,
    GET_PRODUCTS, GET_SINGLE_PRODUCT
} from "./actionTypes";



export const getProducts=()=>{
    return(dispatch)=>{
        fetch('https://fakestoreapi.com/products')
            .then((res)=>res.json())
            .then((data)=>{
                dispatch({type:GET_PRODUCTS,payload:data})
            })
    }
}


export const convertCur=(value)=>{
    return {type:CONVERT_CURRENCY,payload:value}
}
export const addToBasket = (catalog)=>{
    let basket2=JSON.parse(localStorage.getItem("basket2")) ||[]
    const findProduct = basket2.find(el => el.id === catalog.id)
    if(findProduct){
        basket2=basket2.map(el=>{
            if(el.id === catalog.id){
                return {...el,quantity:el.quantity+1}}
            else
                return  el
        })}
    else  basket2=[...basket2,{...catalog,quantity:1}]

    localStorage.setItem("basket2",JSON.stringify(basket2))
    return  {type:ADD_TO_BASKET,payload:catalog}
}


export   const deleteToBasket=(id)=>{
    let basket2=JSON.parse(localStorage.getItem("basket2"))
    const updatedBasket=basket2.filter(el=>el.id!==id)
    localStorage.setItem("basket2",JSON.stringify(updatedBasket))
    return {type:DELETE_TO_BASKET,payload:id}
}
export const basketMinus=(id)=>{
    let basket2=JSON.parse(localStorage.getItem("basket2")) ||[]
    const deleteProduct = basket2.find(el => el.id === id)
    let updatedBasket=null
    {
        if(deleteProduct.quantity>1){
      const  updatedBasket=basket2.map(el=>el.id===id ?{...el,quantity:el.quantity-1}:el)
            localStorage.setItem("basket2",JSON.stringify(updatedBasket))
        }
    }

    return  {type:BASKET_MINUS,payload:id}
}
export const addToFavorite=(catalog)=>{
    let favorites=JSON.parse(  localStorage.getItem("favorites")) || []

    catalog.isLiked=true
    favorites=[...favorites,catalog]
    localStorage.setItem("favorites",JSON.stringify(favorites))
    return {type:ADD_TO_FAVORITE,payload:catalog}
}
export const addToSize=(catalog)=>{
    let basket2=JSON.parse(  localStorage.getItem("basket2")) || []

    basket2=[...basket2,catalog]
    localStorage.setItem("basket2",JSON.stringify(basket2))
    return {type:ADD_TO_FAVORITE,payload:catalog}
}

export const getSingleProduct=(id)=>{
    return function (dispatch){
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((data)=>data.json())
            .then((res)=>dispatch({type:GET_SINGLE_PRODUCT,payload:res}))

    }
}

export  const deleteFromFav=(id)=>{
    let favorites=JSON.parse(  localStorage.getItem("favorites"))
favorites=favorites.filter(el=>el.id !==id)
    localStorage.setItem("favorites",JSON.stringify(favorites))


    return  {type:DELETE_TO_FAVORITE,payload:id}
}