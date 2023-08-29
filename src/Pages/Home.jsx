import React, { useState } from "react";
import "../style/style-pages/Home.css"
import ContainerHome1 from "../Component/ContainerHome1";
import imgHead1 from "../assets/images/desktop-image-hero-1.jpg"
import imgHead2 from "../assets/images/desktop-image-hero-2.jpg"
import imgHead3 from "../assets/images/desktop-image-hero-3.jpg"
import ContainerHome2 from "../Component/ContainerHome2";

const Home = () => {

    const img = [
        imgHead1,
        imgHead2,
        imgHead3
    ]

    const text = [
        {text1:"Discover innovative ways to decorate", text2:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."},
        {text1:"We are available all across the globe", text2:"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any question?Don't hesitate to contact us today."},
        {text1:"Manufactured with the best materials", text2:"Our modem furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With thee decades of experience in this industry, we understand what coustomers want for their home and office."}
    ]

    const [index, setIndex]= useState(0)

    const handlePrevClick = ()=>{
        const newIndex = index === 0 ? img.length - 1 : index - 1;
        setIndex(newIndex)
    }

    const handleNextClick = () =>{
        const newIndex = index === img.length -1 ? 0 : index + 1;
        setIndex(newIndex)
    }

    return (
        <div className="home">
            <ContainerHome1
                img={img}
                index={index}
                text={text}
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
            />
            <ContainerHome2 />
        </div>
    )
}

export default Home