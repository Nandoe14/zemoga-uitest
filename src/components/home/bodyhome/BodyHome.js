import React from 'react'
import closeImg from './../../../assets/close.svg'
import { VotingBoxes } from './VotingBoxes'

export const BodyHome = () => {
    return (
        <section id="body-home">
            <div className="container">
                <div className="speak-out">
                    <div className="speakout-becounted">
                        <span>Speak out. Be heard.</span>
                        <span>Be counted</span>
                    </div>
                    <div className="speakout-cont">
                        <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
                    </div>
                    <div className="speakout-close-cont">
                        <img src={closeImg} alt="X" />
                    </div>
                </div>

                <h2>Votes</h2>

                <VotingBoxes />
            </div>
        </section>
    )
}
