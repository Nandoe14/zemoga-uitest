import React, { useRef, useState } from 'react'
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

    const [state, setState] = useState({
        upVotes: parseFloat(localStorage.getItem(`upVotes${i}`)),
        downVotes: parseFloat(localStorage.getItem(`downVotes${i}`)),
        totalVotes: parseFloat(localStorage.getItem(`upVotes${i}`)) + parseFloat(localStorage.getItem(`downVotes${i}`)),
        upSelected: false,
        downSelected: false,
        showVoteButton: true
    })

    const { upVotes, downVotes, totalVotes, upSelected, downSelected, showVoteButton } = state

    localStorage.setItem(`upVotes${i}`, upVotes)
    localStorage.setItem(`downVotes${i}`, downVotes)
    localStorage.setItem(`totalVotes${i}`, totalVotes)

    const voteUpRef = useRef(null)
    const voteDownRef = useRef(null)
    const voteNowRef = useRef(null)
    const personTextRef = useRef(null)
    const thankVotingRef = useRef(null)

    const handleThumbClick = (what) => {
        if (what) {
            setState({
                ...state,
                upSelected: true,
                downSelected: false
            })
            voteUpRef.current.classList.add('thumb-selected')
            voteDownRef.current.classList.remove('thumb-selected')
        } else {
            setState({
                ...state,
                upSelected: false,
                downSelected: true
            })
            voteUpRef.current.classList.remove('thumb-selected')
            voteDownRef.current.classList.add('thumb-selected')
        }
    }

    const handleVotingNowClick = () => {
        if (upSelected && showVoteButton) {
            setState({
                ...state,
                upVotes: upVotes + 1,
                totalVotes: (upVotes + 1) + downVotes,
                showVoteButton: !showVoteButton
            })
        } else if (downSelected && showVoteButton) {
            setState({
                ...state,
                downVotes: downVotes + 1,
                totalVotes: upVotes + (downVotes + 1),
                showVoteButton: !showVoteButton
            })
        }
        if (upSelected || downSelected) {
            voteNowRef.current.classList.toggle('voting-options-again')
            thankVotingRef.current.classList.toggle('show-person-thank')
            personTextRef.current.classList.toggle('hidde-person-info')
        }
    }

    const handleVotingAgainClick = () => {
        if (!showVoteButton) {
            setState({
                ...state,
                showVoteButton: !showVoteButton
            })
            voteNowRef.current.classList.toggle('voting-options-again')
            personTextRef.current.classList.toggle('hidde-person-info')
            thankVotingRef.current.classList.toggle('show-person-thank')
        }
    }

    return (
        <div key={i} className="voting-box" style={{ backgroundImage: `url(${data[i].bgVotingBoxes})` }}>
            <div className={`thumb-container ${(upVotes >= downVotes) ? 'thumb-bg-blue' : 'thumb-bg-orange'}`}>
                <img src={(upVotes >= downVotes) ? thumbUpImage : thumbDownImage} alt="Thumb" />
            </div>

            <div className="voting-box-grad"></div>

            <div className="voting-person-cont">
                <h3>{data[i].personName}</h3>
                <p className="voting-person-time"><strong>{data[i].personTimeOnMonths} month ago</strong> in {data[i].personSector}</p>
                <div className="voting-person-info-cont">
                    <p ref={personTextRef} className="voting-person-info">{data[i].personInfo}</p>
                    <p ref={thankVotingRef} className="voting-person-thank">Thank you for voting!</p>
                </div>
                <div className="voting-options">
                    <div ref={voteNowRef} className="voting-options-cont">
                        <div ref={voteUpRef} className="thumb-cont thumb-bg-blue" onClick={() => handleThumbClick(true)}>
                            <img src={thumbUpImage} alt="Thumb Up" />
                        </div>
                        <div ref={voteDownRef} className="thumb-cont thumb-bg-orange" onClick={() => handleThumbClick(false)}>
                            <img src={thumbDownImage} alt="Thumb Down" />
                        </div>
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

            <div className="votes-bar-progress">
                <div
                    className="up-side-progress"
                    style={{ width: `${((upVotes / totalVotes) * 100)}%` }}
                >
                    <img src={thumbUpImage} alt="Thumb Up" />
                    <span>{Math.round((upVotes / totalVotes) * 100)}%</span>
                </div>
                <div className="down-side-progress" style={{ width: `${((downVotes / totalVotes) * 100)}%` }}>
                    <span>{Math.round((downVotes / totalVotes) * 100)}%</span>
                    <img src={thumbDownImage} alt="Thumb Down" />
                </div>
            </div>
        </div>
    )
}
