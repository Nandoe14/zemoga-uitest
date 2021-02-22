import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import hamburgerImg from './../../assets/hamburger.svg'

export const NavBarMobile = () => {

    const menuRef = useRef(null)
    const hamburgerRef = useRef(null)

    const handleGeneralClick = () => {
        menuRef.current.classList.toggle('show-menu-drop')
        hamburgerRef.current.classList.toggle('rotate-hamburger')
    }

    const handleLogoClick = () => {
        menuRef.current.classList.remove('show-menu-drop')
        hamburgerRef.current.classList.remove('rotate-hamburger')
        window.scrollTo(0, 0);
    }

    return (
        <section id="navbar-mobile">
            <div className="mob-nav-cont">
                <div className="logo-cont">
                    <Link onClick={handleLogoClick} to="/"><h4>Rule of Thumb.</h4></Link>
                </div>
                <div className="menu-hamburger">
                    <img ref={hamburgerRef} onClick={handleGeneralClick} src={hamburgerImg} alt="Menu" />
                </div>
            </div>
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
