import React from 'react'
import votingBoxesData from './../../../data/votingBoxesData.json'
import { VotingBox } from './VotingBox'

export const VotingBoxes = () => {

    const data = votingBoxesData.data.map(({ bgVotingBoxes, personName, personInfo, personTimeOnMonths, personSector, upVotes, downVotes }) => {
        return {
            bgVotingBoxes,
            personName,
            personInfo,
            personTimeOnMonths,
            personSector,
            upVotes,
            downVotes
        }
    })

    return (
        <div className="voting-boxes">
            {
                data.map((u, i) =>
                    <VotingBox key={i} data={data} i={i} />
                )
            }
        </div>
    )
}
