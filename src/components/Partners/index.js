
import React from 'react'

const Partners = () => {

    return (
        <div className="w-full mx-auto flex justify-center flex-col lg:my-20 mt-28 md:mt-12 md:px-4">
            <h2 className="text-orange-900 font-bold text-3xl md:text-5xl text-center md:text-left">Partners</h2>
            <div className="w-full flex flex-row flex-wrap">
                <div className="w-full md:w-1/3 flex items-center justify-center pt-4 px-4 md:px-0 md:py-12 ">
                    <p className="text-orange-900 text-2xl">We are proudly working together and partnered with the following:</p>
                </div>
                <div className="w-full md:w-2/3 flex items-center justify-center py-12 ">
                    <img className="" src="https://www.nicwa.org/wp-content/uploads/2016/11/nicwa-logo_1.png" alt="NICWA logo" />
                </div>
            </div>
        </div>
    )
};


export default Partners ;