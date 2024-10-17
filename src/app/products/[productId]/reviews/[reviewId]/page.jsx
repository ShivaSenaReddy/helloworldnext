
'use client'
import React from 'react'
import NotFound from './not-found'
//import randomNumberGen from './randomNumGen'
function ReviewDetails({ params }) {

    // randomNumberGen(2);
    // console.log(params.reviewId)
    // if (params.reviewId > 1000)
    //     return NotFound();
    // if (randomNumberGen(2) === 1)
    //     throw new Error('review not found for this')
    return (
        <div>
            Details of Product{params.productId} Review {params.reviewId} {randomNumberGen(2)}
        </div>
    )
}

export default ReviewDetails
