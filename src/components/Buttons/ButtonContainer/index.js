import React from 'react'

const ButtonContainer = ({text, bgColor, to, icon}) => {

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
        <a className={`shadow rounded ${configuredBgColor()} bg-opacity-80 text-gray-200 hover:text-white hover:cursor-pointer font-bold text-xs sm:text-base lg:text-xl text-center w-1/5 lg:w-2/5 md:w-2/5 transition-all py-3 mx-auto flex items-center justify-center `} href={to}>
            <p className="hidden sm:block">{text}</p>
            {icon}
        </a>
        
    )
};

export default ButtonContainer;