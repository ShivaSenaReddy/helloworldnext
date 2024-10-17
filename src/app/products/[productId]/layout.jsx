'use client'
import React from 'react'

function ProductLayout({ children }) {
    function randomNumberGen(num) {
        console.log('running the numgen function')
        console.log(Math.floor(Math.random() * num))
        return Math.floor(Math.random() * num)
    }
    if (randomNumberGen(2) === 1)
        throw new Error('review not found for this')

    return (
        <div>
            Products Layout starts here
            {children}
        </div>
    )
}

export default ProductLayout
