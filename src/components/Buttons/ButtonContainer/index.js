import React from 'react'

const ButtonContainer = ({text, bgColor, to}) => {

    const configuredBgColor = () => {
        switch(bgColor) {
            case 'blue':
                return 'bg-blue-950 hover:bg-blue-800';
            case 'green':
                return 'bg-teal-800 hover:bg-teal-700';
            default: 
                return "bg-white"

        }
    }

    return (
        <a href={to}>
            <div className={`shadow rounded ${configuredBgColor()} text-gray-200 hover:text-white hover:cursor-pointer font-bold text-xl text-center w-full mt-8 mx-auto py-3`}>
                {text}
            </div>
        </a>
            
        
    )
};

export default ButtonContainer;