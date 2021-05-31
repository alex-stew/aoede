import React from 'react'

function Song() {
    return (
        <div className="h-full h-full flex flex-col bg-gray-900 p-5">
        <div className="box-border border-4 border-gray-900 rounded-lg mb-4">
            <input className="bg-gray-50 p-5" placeholder="New Song Name" type="text"></input>
        </div>
        
        <form className="flex flex-row justify-center bg-gray-50 rounded-md p-4">
            <div className="mx-auto p-2 justify-center">
                {/* <AddBarBtn/> */}
            </div>
        </form>
        <h2 className="text-2xl text-center font-semibold text-gray-900 pt-4 pb-4">Pick up where you left off?</h2>
        <hr className="text-gray-900"></hr>
        <div className="flex flex-row justify-center bg-gray-800 rounded-md p-4">
            <div className="w-full box-border border-2 rounded-lg border-white text-gray-200 p-2">
                <p className="text-xl font-medium text-indigo-300 hover:text-indigo-400">Chaos Calls</p>
                <p className="italic text-sm">Magic Mountain</p>
            </div>
        </div>
    </div>
    )
}

export default Song

