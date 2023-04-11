import React from 'react';

const Resource = ({info}) => {
    const {content, img} = info;

    return (
        <div className="w-1/2 flex flex-col justify-center mb-8">
            <div className="w-3/4 rounded shadow mx-auto bg-blue-950 hover:bg-blue-800">
                <img className="w-full rounded-t h-48" src={img} alt="Resource example"/>
                <p className="p-2  text-white font-bold font-sans">{content}</p>
            </div>
        </div>
    )
}

export default Resource;