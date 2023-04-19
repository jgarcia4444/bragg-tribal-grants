import React from 'react'

const VerticalCard = ({info, txtColor}) => {

    const {content, img} = info;

    const configureTxtProperties = () => {
        switch(txtColor) {
            case 'blue':
                return 'text-blue-950 hover:text-blue-800';
            case 'orange':
                return 'text-orange-900 hover:text-orange-800';
            default:
                return 'text-blue-950 hover:text-blue-800'
        }
    }

    return (
        <div className="lg:w-1/2 md:w-1/2 sm:w-full sm:mb-12 flex flex-col justify-start mb-12">
            <div className="lg:w-3/4 md:w-3/4 lg:mx-auto md:mx-auto  sm:w-screen">
                <img className="lg:rounded lg:h-48 lg:w-full md:h-48 md:w-full md:rounded sm:w-screen w-screen" src={img} alt="Resource example"/>
                <p className={`font-bold font-sans text-xl ${configureTxtProperties()}`}>{content}</p>
            </div>
        </div>
    )
};

export default VerticalCard