import React from 'react';

function Cards({ title, description }) {
    return (
        <div className="bg-gray-200 p-5 rounded-lg shadow-md border border-gray-100">
        <div className="pb-2 mb-2 border-b border-gray-300">
            <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <div>
            <p className="text-lg text-gray-500">{description}</p>
        </div>
    </div>
    
    );
}

export default Cards;
