import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../assets/Navbar.css"

export const Navbar =()=>{

const navRef = useRef()

const showNavbar = () =>{
    navRef.current.classList.toggle("move_nav");
}

return(

    <div>
        <header>
            <div>
                <a><img src="#"></img></a>
            </div>
  

        <nav ref={navRef}>
            <a href="/">Inicio</a>
            <a href="/componente2">Componente2</a>
            <a href="/">About us</a>
            <a href="/">Login</a>
            <button className="nava close" onClick={showNavbar}>
            <FaTimes></FaTimes>

            </button>
        </nav>
        <button className="nava" onClick={showNavbar}>
        <FaBars></FaBars>

        </button>
        </header>
    </div>
)

}