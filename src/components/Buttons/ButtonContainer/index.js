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
        <a className={`shadow rounded ${configuredBgColor()} text-gray-200 hover:text-white hover:cursor-pointer font-bold text-xl text-center lg:w-2/5 md:w-2/5 mt-8 py-3`} href={to}>
            {text}
        </a>
            
        
    )
};

export default ButtonContainer;