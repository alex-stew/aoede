import React from 'react'
import { PlusSmIcon } from '@heroicons/react/outline'

export default function addSongBtn() {
    
    function handleSubmit(e) {
        e.preventDefault();


    }
    
    return (
        <div onClick={handleSubmit} className="flex p-2 rounded-md bg-indigo-600 text-center items-center font-bold text-gray-200 cursor-pointer">
            <PlusSmIcon className="block h-8 w-8 pr-2"/><p>Add Song</p>
        </div>
    )
}
