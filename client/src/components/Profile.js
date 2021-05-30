import React from 'react'

function Profile(props) {
    return (
        <div className="h-full flex flex-col justify-center bg-gray-600">
            <div className="container mx-auto">
                <div className="text-3xl text-center text-gray-200 py-5 ">Welcome back, {props.username}</div>
            </div>
        </div>
    )
}

export default Profile
