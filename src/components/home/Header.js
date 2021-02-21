import React from 'react'
import { Link } from 'react-router-dom'
import wikiImage from './../../assets/wiki.svg'
import thumbUpImage from './../../assets/thumb-up.svg'
import thumbDownImage from './../../assets/thumb-down.svg'

export const Header = () => {
    return (
        <header>
            <div className="header-cont">
                <div>
                    <div className="blured-cont-pope">
                        <div className="blured-layer-pope">
                        </div>
                    </div>
                    <div className="general-info-pope">
                        <span className="first-quest-pope">What’s your opinion on</span>
                        <h1>Pope Francis?</h1>
                        <p className="info-pope">He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>
                        <div className="wiki-info-pope">
                            <img src={wikiImage} alt="W" />
                            <Link to="/information-pope">More information</Link>
                        </div>
                        <span className="last-quest-pope">What’s Your Verdict?</span>
                    </div>
                    <div className="thumb-panel-pope">
                        <div className="thumb-up-pope">
                            <img src={thumbUpImage} alt="Thumb Up" />
                        </div>
                        <div className="thumb-down-pope">
                            <img src={thumbDownImage} alt="Thumb Down" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="closing-pope">
                <div className="closing-left-pope">
                    <div className="closing-pope-cont">
                        <span className="closing-in">CLOSING IN</span>
                    </div>
                </div>
                <div className="closing-right-pope">
                    <div className="daysleft-pope-cont">
                        <span className="days-left">22 days</span>
                        <div className="closing-triangle-cont">
                            <div className="closing-rectangle"></div>
                            <div className="closing-triangle"></div>
                            <div className="closing-rectangle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
