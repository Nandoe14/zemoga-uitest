import React from 'react'
import searchImg from './../../assets/search-icon.svg'

export const NavBarDesktop = () => {
    return (
        <section id="navbar-desktop">
            <div className="container">
                <div className="logo-cont">
                    <a href="/"><h4>Rule of Thumb.</h4></a>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="/past-trials">Past Trials</a></li>
                        <li><a href="/how-it-works">How It Works</a></li>
                        <li><a href="/">Log In / Sign Up</a></li>
                    </ul>
                </div>
                <div className="menu-search">
                    <img src={searchImg} alt="Search" />
                </div>
            </div>
        </section>
    )
}
