import React from "react";
import { Link } from "react-router-dom";
import "../style/style-component/ContainerHome1.css"
import arrow from "../assets/images/icon-arrow.svg"
import angleL from "../assets/images/icon-angle-left.svg"
import angleR from "../assets/images/icon-angle-right.svg"

const ContainerHome1 =({handlePrevClick, handleNextClick, text, img, index})=>{
    return(
        <div className="container1">
            <img src={img[index]} alt={`img ${index}`} id="imgHead"/>
            <div className="warpArticle1">
                <div className="cardArticle1">
                    <h1>{text[index].text1}</h1>
                    <p>{text[index].text2}</p>
                    <Link>SHOP NOW <img src={arrow} alt="" /></Link>
                </div>
                <div className="button1">
                    <button onClick={handlePrevClick} id="btnHead"><img src={angleL} alt=""/></button>
                    <button onClick={handleNextClick} id="btnHead"><img src={angleR} alt=""/></button>
                </div>
            </div>
        </div>
    )
}

export default ContainerHome1