import React from 'react'
import { PlusSmIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import Song from './Song'

export default function addSongBtn() {
    
    function handleSubmit(e) {
        e.preventDefault();
        <Link to="./song"/>        
    }
    
    return (
        <div onClick={handleSubmit} className="flex p-2 rounded-lg bg-indigo-700 hover:bg-indigo-400 text-center items-center font-bold text-gray-200 cursor-pointer">
            <PlusSmIcon className="block h-8 w-8 pr-2"/><p>Add Song</p>
        </div>
    ) 
}
