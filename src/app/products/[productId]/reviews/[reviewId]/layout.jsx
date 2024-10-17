import React from 'react'

function ProductDetailsLayout({ children }) {
    return (
        <div>
            {children}
            <h2>Features of the product</h2>
        </div>
    )
}

export default ProductDetailsLayout
