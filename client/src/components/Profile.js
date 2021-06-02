import React from 'react'
import AddSongBtn from './AddSongBtn'

function Profile(props) {
    return (
        <div className="h-full h-full flex flex-col bg-gray-200 p-5">
            <div className="box-border border-4 border-white rounded-lg mb-4">
                <h1 className="text-3xl text-center font-bold text-gray-900 pt-8 pb-2">Welcome back.</h1>
                <h2 className="text-2xl text-center font-bold text-indigo-700 p-2">Now, let's get creating!</h2>
            </div>
            
            <div className="flex flex-row justify-center bg-gray-800 rounded-md p-4">
                <div className="mx-auto p-2 justify-center">
                    <AddSongBtn/>
                </div>
            </div>
            <h2 className="text-2xl text-left font-semibold text-gray-900 pt-4 pb-1 pl-4">Your Songs</h2>
            <div className="flex flex-row justify-center bg-gray-800 rounded-md p-4">
                <div className="w-full box-border border-2 rounded-lg border-white text-gray-200 p-2 cursor-pointer">
                    <p className="text-xl font-medium text-indigo-300 hover:text-indigo-400">Chaos Calls</p>
                    <p className="italic text-sm">Magic Mountain</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
