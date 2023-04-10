import React from 'react'

const ButtonContainer = ({children, bgColor}) => {

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
        <div className={`shadow rounded ${configuredBgColor()} text-gray-200 hover:text-white hover:cursor-pointer font-bold text-xl text-center w-full mt-8 mx-auto py-3`}>
            {children}
        </div>
    )
};

export default ButtonContainer;