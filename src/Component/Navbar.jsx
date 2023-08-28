import React from "react";
import "../style/style-component/Navbar.css"
import { Link } from 'react-router-dom';


const Navbar =()=>{
    return(
        <nav>
            <h1>room</h1>
            <Link>home</Link>
            <Link>shop</Link>
            <Link>about</Link>
            <Link>contact</Link>
        </nav>
    )
}

export default Navbar