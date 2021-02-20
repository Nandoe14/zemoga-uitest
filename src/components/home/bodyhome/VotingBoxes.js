import React, { useRef } from 'react'
import votingBoxesData from './../../../data/votingBoxesData.json'
import thumbUpImage from './../../../assets/thumb-up.svg'
import thumbDownImage from './../../../assets/thumb-down.svg'

export const VotingBoxes = () => {

    const voteUpRef = useRef(null)
    const voteDownRef = useRef(null)

    const data = votingBoxesData.data.map(({ bgVotingBoxes, personName, personInfo, personTimeOnMonths, personSector, totalVotes, upVotes, downVotes }) => {
        return {
            bgVotingBoxes,
            personName,
            personInfo,
            personTimeOnMonths,
            personSector,
            totalVotes,
            upVotes,
            downVotes
        }
    })

    const handleVoteClick = (what) => {
        if (what) {
            voteUpRef.current.classList.add('thumb-selected')
            voteDownRef.current.classList.remove('thumb-selected')
            console.log(what)
        } else {
            voteUpRef.current.classList.remove('thumb-selected')
            voteDownRef.current.classList.add('thumb-selected')
            console.log(what)
        }
        console.log(voteUpRef)
    }

    return (
        <div className="voting-boxes">
            {
                data.map((u, i) =>
                    <div key={i} className="voting-box" style={{ backgroundImage: `url(${data[i].bgVotingBoxes})` }}>
                        <div className={`thumb-container ${(data[i].upVotes > data[i].downVotes) ? 'thumb-bg-blue' : 'thumb-bg-orange'}`}>
                            <img src={(data[i].upVotes > data[i].downVotes) ? thumbUpImage : thumbDownImage} alt="Thumb" />
                        </div>
                        <div className="voting-box-grad"></div>
                        <div className="voting-person-cont">
                            <h3>{data[i].personName}</h3>
                            <p className="voting-person-time"><strong>{data[i].personTimeOnMonths} month ago</strong> in {data[i].personSector}</p>
                            <p className="voting-person-info">{data[i].personInfo}</p>
                            <div className="voting-options">
                                <div ref={voteUpRef} className="thumb-cont thumb-bg-blue" onClick={() => handleVoteClick(true)}>
                                    <img src={thumbUpImage} alt="Thumb Up" />
                                </div>
                                <div ref={voteDownRef} className="thumb-cont thumb-bg-orange" onClick={() => handleVoteClick(false)}>
                                    <img src={thumbDownImage} alt="Thumb Down" />
                                </div>
                                <button className="voting-person-btn">Vote now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
