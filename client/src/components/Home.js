import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

function Home() {
    return (
        <div className="container h-full mx-auto px-4 align-middle bg-gray-700 text-center align-items-center">
            <h1 className="text-5xl text-yellow-600 font-bold">.Aoede</h1>
            <Login /> 
            <Dashboard />
        </div>
    )
}

export default Home
