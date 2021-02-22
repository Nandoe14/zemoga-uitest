import React from 'react'
import votingBoxesData from './../../../data/votingBoxesData.json'
import { VotingBox } from './VotingBox'

export const VotingBoxes = () => {

    // Extracting the data from the "json" file
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
            {/* Mapping the data to take all persons in "json" file data, data is send to the component */}
            {
                data.map((u, i) =>
                    <VotingBox key={i} data={data} i={i} />
                )
            }
        </div>
    )
}
