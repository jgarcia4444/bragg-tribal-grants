import React from 'react'

const OurServices = () => {

    const services = [
        "Business Loans for Corporations",
        "Grant Writing",
        "Secure the capital necessary to start or grow business",
        "Capital needed to establish good business credit"
    ];

    const renderServices = () => {
        return services.map((service, i) => <li className=" text-orange-900 font-bold text-xl mb-4" key={`${i}-${service}`}>{service}</li>)
    }

    return (
        <div className=" mt-20 relative w-1/2 m-auto">
            <h2 className="text-orange-900 mb-6 font-bold text-5xl text-center">Our Services</h2>
            <div className="">
                <ul className="list-disc w-full">
                    {renderServices()}
                </ul>
            </div>
        </div>
    )
};

export default OurServices;