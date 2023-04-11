import React from 'react';

const Resource = ({info}) => {
    const {content, img} = info;

    return (
        <div className="w-1/2 flex flex-col justify-center mb-8">
            <div className="w-1/2 rounded shadow mx-auto">
                <img src={img} alt="Resource example"/>
                <p className="">{content}</p>
            </div>
        </div>
    )
}

export default Resource;