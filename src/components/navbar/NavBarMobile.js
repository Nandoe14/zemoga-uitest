import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import hamburgerImg from './../../assets/hamburger.svg'

export const NavBarMobile = () => {

    const menuRef = useRef(null) // Handling the Drop Menu
    const hamburgerRef = useRef(null) // Handling the Hamburger svg

    const handleGeneralClick = () => { // Handling the Click event on Hamburger and the unordered list form Menu
        menuRef.current.classList.toggle('show-menu-drop') // Switching: Show / Hiding the Drop Menu
        hamburgerRef.current.classList.toggle('rotate-hamburger') // Rotating the Haburger
    }

    const handleLogoClick = () => {
        menuRef.current.classList.remove('show-menu-drop') // Hiding the Drop Menu
        hamburgerRef.current.classList.remove('rotate-hamburger') // Removing the class to rotate the Haburger
        window.scrollTo(0, 0); // Go up to home when clicking on the Logo
    }

    return (
        <section className="animate-navbar" id="navbar-mobile">

            {/* Visible Mobil NavBar Part */}
            <div className="mob-nav-cont">
                <div className="logo-cont">
                    <Link onClick={handleLogoClick} to="/"><h4>Rule of Thumb.</h4></Link>
                </div>
                <div className="menu-hamburger">
                    <img ref={hamburgerRef} onClick={handleGeneralClick} src={hamburgerImg} alt="Menu" />
                </div>
            </div>

            {/* Droppable Mobil Menu */}
            <div ref={menuRef} className="menu-drop">
                <ul onClick={handleGeneralClick} >
                    <li><Link className="special-a" to="/">Home</Link></li>
                    <li><Link to="/past-trials">Past Trials</Link></li>
                    <li><Link to="/how-it-works">How It Works</Link></li>
                    <li><Link to="/">Log In / Sign Up</Link></li>
                    <li><Link to="/">Search</Link></li>
                </ul>
            </div>

        </section>
    )
}
