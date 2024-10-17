import React from 'react'

function FeaturesConcepts({ params }) {
    if (params.slug?.length === 1)
        return (
            <div>
                Viewing Docs
                {params.slug[0]}
            </div>
        )
    else if (params.slug?.length === 2) {
        return <div>
            Viewing Docs
            {params.slug[0]}  {params.slug[1]}
        </div>
    }

    return <div>Viewing docs here</div>
}

export default FeaturesConcepts
