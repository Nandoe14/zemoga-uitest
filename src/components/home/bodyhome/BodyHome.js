import React, { useRef } from 'react'
import closeImg from './../../../assets/close.svg'
import { VotingBoxes } from './VotingBoxes'

export const BodyHome = () => {

    const speakOutWindowRef = useRef(null) // Handling the Speak Out Window

    const handleCloseSpeakOutClick = () => { // Handling the Click event on the "X" from the Speak Out Window
        speakOutWindowRef.current.classList.add('closeSpeakOutWindow') // Closing the Speak Out Window
    }

    return (
        <section id="body-home">
            <div className="container">

                {/* Speak Out Window */}
                <div ref={speakOutWindowRef} className="speak-out">
                    <div className="speakout-becounted">
                        <span>Speak out. Be heard.</span>
                        <span>Be counted</span>
                    </div>
                    <div className="speakout-cont">
                        <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
                    </div>
                    <div className="speakout-close-cont">
                        <img src={closeImg} alt="X" onClick={handleCloseSpeakOutClick} />
                    </div>
                </div>

                <h2>Votes</h2>

                {/* Voting Boxes Panel */}
                <VotingBoxes />

                {/* Submit Name Window */}
                <div className="submit-name-cont">
                    <div className="white-submit-layer">
                        <div className="submit-name-info">
                            <p>Is there anyone else you would want us to add?</p>
                        </div>
                        <div className="submit-name-button">
                            <button>Submit a Name</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
