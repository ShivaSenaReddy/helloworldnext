'use client'

export default function Error({ error, reset }) {
    return (
        <div>
            <h2>{error.message}</h2>
            <button onClick={() => {
                console.log('trying again')
                reset()
            }}>Try again</button>
        </div>
    )
}