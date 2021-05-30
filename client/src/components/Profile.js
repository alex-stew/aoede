import React from 'react'
import AddSongBtn from './AddSongBtn'

function Profile(props) {
    return (
        <div className="h-full h-full flex flex-col bg-gray-200 p-5">
            <div className="">

            </div>
            
            <div className="h-full flex flex-col justify-center bg-gray-800 rounded-md">
                <div className="p-10 mx-auto justify-center">
                    <AddSongBtn/>
                </div>
            </div>
        </div>
    )
}

export default Profile
