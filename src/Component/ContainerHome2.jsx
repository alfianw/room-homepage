import React from "react";
import "../style/style-component/ContainerHome2.css"
import imgDark from "../assets/images/image-about-dark.jpg"
import imgLight from "../assets/images/image-about-light.jpg"

const ContainerHome2=()=>{
    return(
        <div className="containerHome2">
            <img src={imgDark} alt="" id="imgBotHome"/>
            <div className="cardArticle2">
                <h1>ABOUT OUR FURNITURE</h1>
                <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary style or anything in between. Product specialists are available to help you create your dream space</p>
            </div>
            <img src={imgLight} alt="" id="imgBotHome"/>
        </div>
    )
}

export default ContainerHome2