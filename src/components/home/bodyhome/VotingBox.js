import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types';
import thumbUpImage from './../../../assets/thumb-up.svg'
import thumbDownImage from './../../../assets/thumb-down.svg'

export const VotingBox = ({ data, i }) => {

    if (typeof (Storage) !== "undefined") {// Setting local storage for first time
        if (!localStorage.getItem(`upVotes${i}`)) {
            localStorage.setItem(`upVotes${i}`, data[i].upVotes);// Save to local storage the "up" votes for a specific person
        }
        if (!localStorage.getItem(`downVotes${i}`)) {
            localStorage.setItem(`downVotes${i}`, data[i].downVotes);// Save to local storage the "down" votes for a specific person
        }
    }

    const [state, setState] = useState({// Defining the component state
        upVotes: parseFloat(localStorage.getItem(`upVotes${i}`)), // Saving the actual "up" votes for a "i" person on data
        downVotes: parseFloat(localStorage.getItem(`downVotes${i}`)), // Saving the actual "down" votes for a "i" person on data
        totalVotes: parseFloat(localStorage.getItem(`upVotes${i}`)) + parseFloat(localStorage.getItem(`downVotes${i}`)), // Saving the actual total "up" and "down" votes for a "i" person on data
        upSelected: false, // Determine if the "up" button is selected or not
        downSelected: false, // Determine if the "down" button is selected or not
        showVoteButton: true // Determine if the "Vote Now" button is showed or not
    })

    const { upVotes, downVotes, totalVotes, upSelected, downSelected, showVoteButton } = state // Destructuring the State Variables

    localStorage.setItem(`upVotes${i}`, upVotes) // Saving in the LocalStorage the changed "upVotes" variable
    localStorage.setItem(`downVotes${i}`, downVotes) // Saving in the LocalStorage the changed "downVotes" variable
    localStorage.setItem(`totalVotes${i}`, totalVotes) // Saving in the LocalStorage the changed "totalVotes" variable

    const voteUpRef = useRef(null) // Handling the "up" button element
    const voteDownRef = useRef(null) // Handling the "down" button element
    const voteNowRef = useRef(null) // Handling the "Vote Now" button container
    const personTextRef = useRef(null) // Handling the person content text element
    const thankVotingRef = useRef(null) // Handling the "Thank For Voting" text element

    const handleThumbClick = (what) => { // Handling the Click event on "up" and "down" button element
        if (what) { // If the "up" button element is selected
            setState({
                ...state,
                upSelected: true,
                downSelected: false
            })
            voteUpRef.current.classList.add('thumb-selected') // Addin the white border on the "up" button element
            voteDownRef.current.classList.remove('thumb-selected') // Removing the white border on the "down" button element
        } else { // If the "down" button element is selected
            setState({
                ...state,
                upSelected: false,
                downSelected: true
            })
            voteUpRef.current.classList.remove('thumb-selected') // Removing the white border on the "up" button element
            voteDownRef.current.classList.add('thumb-selected') // Addin the white border on the "down" button element
        }
    }

    const handleVotingNowClick = () => { // Handling the Click event on "Vote Now" button
        if (upSelected && showVoteButton) { // If the "up" button element is selected and the "Vote Now" button is being shown
            setState({
                ...state,
                upVotes: upVotes + 1,
                totalVotes: (upVotes + 1) + downVotes,
                showVoteButton: !showVoteButton
            })
        } else if (downSelected && showVoteButton) { // If the "down" button element is selected and the "Vote Now" button is being shown
            setState({
                ...state,
                downVotes: downVotes + 1,
                totalVotes: upVotes + (downVotes + 1),
                showVoteButton: !showVoteButton
            })
        }
        if (upSelected || downSelected) { // If one of "up" OR "down" button elements is selected
            voteNowRef.current.classList.toggle('voting-options-again') // Hiding or showing the "Vote Now" button
            thankVotingRef.current.classList.toggle('show-person-thank') // Hiding or showing the "Thanks" text element
            personTextRef.current.classList.toggle('hidde-person-info') // Hiding or showing the "i" person text element
        }
    }

    const handleVotingAgainClick = () => { // Handling the Click event on "Vote Again" button
        if (!showVoteButton) { // If the "Vote Now" button is showed
            setState({
                ...state,
                showVoteButton: !showVoteButton
            })
            voteNowRef.current.classList.toggle('voting-options-again') // Hiding or showing the "Vote Now" button
            thankVotingRef.current.classList.toggle('show-person-thank') // Hiding or showing the "Thanks" text element
            personTextRef.current.classList.toggle('hidde-person-info') // Hiding or showing the "i" person text element
        }
    }

    return (

        // Box element to show all the "i" person information ----- the "i" background picture is assigned via style
        <div key={i} className="voting-box" style={{ backgroundImage: `url(${data[i].bgVotingBoxes})` }}>

            {/* Thumb "up" or "down" button element ----- background color is assigned depending of number of "up" and "down" votes */}
            <div className={`thumb-container ${(upVotes >= downVotes) ? 'thumb-bg-blue' : 'thumb-bg-orange'}`}>

                {/* Thumb "up" or "down" image ----- one or other depending of number of "up" and "down" votes */}
                <img src={(upVotes >= downVotes) ? thumbUpImage : thumbDownImage} alt="Thumb" />

            </div>

            {/* Gradient layer */}
            <div className="voting-box-grad"></div>

            {/* Inner "i" person information component */}
            <div className="voting-person-cont">

                {/* "i" person name */}
                <h3>{data[i].personName}</h3>

                {/* Time long and sector information of the "i" person */}
                <p className="voting-person-time"><strong>{data[i].personTimeOnMonths} month ago</strong> in {data[i].personSector}</p>

                {/* General information and "thanks" text component of "i" person */}
                <div className="voting-person-info-cont">
                    <p ref={personTextRef} className="voting-person-info">{data[i].personInfo}</p>
                    <p ref={thankVotingRef} className="voting-person-thank">Thank you for voting!</p>
                </div>

                {/* Voting options panel */}
                <div className="voting-options">

                    {/* "Vote Now" button container */}
                    <div ref={voteNowRef} className="voting-options-cont">

                        {/* "Up" vote button element */}
                        <div ref={voteUpRef} className="thumb-cont thumb-bg-blue" onClick={() => handleThumbClick(true)}>
                            <img src={thumbUpImage} alt="Thumb Up" />
                        </div>

                        {/* "Down" vote button element */}
                        <div ref={voteDownRef} className="thumb-cont thumb-bg-orange" onClick={() => handleThumbClick(false)}>
                            <img src={thumbDownImage} alt="Thumb Down" />
                        </div>

                        {/* Showing the "Vote Now" or "Vote again" button depending of "showVoteButton" variable */}
                        {
                            showVoteButton
                                ?
                                <button className="voting-person-btn" onClick={handleVotingNowClick}>Vote now</button>
                                :
                                <button className="voting-person-btn" onClick={handleVotingAgainClick}>Vote again</button>
                        }

                    </div>

                </div>

            </div>

            {/* Votes Bar progress element */}
            <div className="votes-bar-progress">

                {/* "up" side bar progress ----- the width property is assigned via style */}
                <div
                    className="up-side-progress"
                    style={{ width: `${((upVotes / totalVotes) * 100)}%` }}
                >
                    <img src={thumbUpImage} alt="Thumb Up" />
                    <span>{Math.round((upVotes / totalVotes) * 100)}%</span>
                </div>

                {/* "down" side bar progress ----- the width property is assigned via style */}
                <div
                    className="down-side-progress"
                    style={{ width: `${((downVotes / totalVotes) * 100)}%` }}
                >
                    <span>{Math.round((downVotes / totalVotes) * 100)}%</span>
                    <img src={thumbDownImage} alt="Thumb Down" />
                </div>

            </div>

        </div>
    )
}

// data should be sent to this function component for working
VotingBox.propTypes = {
    data: PropTypes.object.isRequired
}