import React, { useState } from "react";
import "../style/style-component/Navbar.css"
import { Link } from 'react-router-dom';
import hamburger from "../assets/images/icon-hamburger.svg"
import close from "../assets/images/icon-close.svg"

const Navbar = () => {

    const [handleNavbar, setHandleNavbar] = useState(0)
    const [navOpen, setNavOpen] = useState(false)

    const imgNav = [
        hamburger,
        close,

    ]

    const navClick = () => {
        const index = handleNavbar === imgNav.length - 1 ? 0 : handleNavbar + 1;
        setHandleNavbar(index)
        setNavOpen(!navOpen)
    }

    return (
        <>
            <nav>
                <button className={`btnNav ${navOpen ? "active" : ""}`} onClick={navClick}><img src={imgNav[handleNavbar]} alt="" /></button>
                <div className={`navList ${navOpen ? "active" : ""}`}>
                    <h1>room</h1>
                    <Link to="/">home</Link>
                    <Link>shop</Link>
                    <Link>about</Link>
                    <Link>contact</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar