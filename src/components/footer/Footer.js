import React from 'react'
import { Link } from 'react-router-dom'
import facebookImg from './../../assets/facebook.png'
import twitterImg from './../../assets/twitter.png'

export const Footer = () => {
    return (
        <footer>

            {/* Dot Separator Line */}
            <div className="container">
                <div className="dot-separator"></div>
            </div>

            {/* Footer Container */}
            <div className="container footer-container">

                {/* Terms Container */}
                <div className="terms">
                    <ul>
                        <li>
                            <Link to="/terms">Terms and Conditions</Link>
                        </li>
                        <li>
                            <Link to="/privacy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Follow Container */}
                <div className="follow">
                    <ul>
                        <li className="follow-us">Follow Us</li>
                        <li>
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                <img src={facebookImg} alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                                <img src={twitterImg} alt="Twitter" />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}
