import React from 'react'

function Band(props) {
    return (
        <div className="h-full">
            <h1 className="text-4xl text-center">{props.band.name}</h1>
            <p className="text-medium font-bold">{props.band.genre}</p>
            <p className="text-muted text-medium font-bold">{props.band.description}</p>
        </div>
    )
}

export default Band
