import React from "react";
import Picture from "../img/fonstola.ru_276026.jpg"


const Home=()=>{
    return(
        <div>

            <div className="boxImg">
                <img src={Picture} alt="Природа"/>
                <div className="block">
                    <div className="text">
                        <h1>Покупайте меньше и выбирайте лучше</h1>
                        <p>«Ваша жизнь становится гораздо лучше, когда вы носите одежду, которая вызывает восхищение»</p>
                        <a href="" className="bt text-pink-600">Подробнее </a>
                    </div>
                </div>
            </div>
        </div>



    
    )
}
export default Home