import React from 'react'
import facebookImg from './../../assets/facebook.png'
import twitterImg from './../../assets/twitter.png'

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="terms">
                    <ul>
                        <li>
                            <a href="/terms">Terms and Conditions</a>
                        </li>
                        <li>
                            <a href="/privacy">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/contact-us">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="follow">
                    <ul>
                        <li>Follow Us</li>
                        <li>
                            <a href="www.facebook.com" target="_blank">
                                <img src={facebookImg} alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="www.twitter.com" target="_blank">
                                <img src={twitterImg} alt="Twitter" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
