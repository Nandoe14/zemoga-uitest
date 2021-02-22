import React from 'react'
import {
    Link
} from "react-router-dom";
import searchImg from './../../assets/search-icon.svg'

export const NavBarDesktop = () => {
    return (
        <section id="navbar-desktop">

            {/* Gradient layer */}
            <div className="gradient-top"></div>

            {/* NavBar element */}
            <div className="container-wrapper animate-navbar">
                <div className="container">

                    {/* Logo element container */}
                    <div className="logo-cont">
                        <Link to="/"><h4>Rule of Thumb.</h4></Link>
                    </div>

                    {/* Menu element container */}
                    <div className="menu">
                        <ul>
                            <li><Link to="/past-trials">Past Trials</Link></li>
                            <li><Link to="/how-it-works">How It Works</Link></li>
                            <li><Link to="/">Log In / Sign Up</Link></li>
                        </ul>
                    </div>

                    {/* Search Icon element container */}
                    <div className="menu-search">
                        <img src={searchImg} alt="Search" />
                    </div>
                </div>
            </div>
        </section>
    )
}
