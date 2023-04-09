import React from 'react'

const OurServices = () => {

    const services = [
        "Business Loans for Corporations",
        "Grant Writing",
        "Secure the capital necessary to start or grow business",
        "Capital needed to establish good business credit"
    ];

    const renderServices = () => {
        return services.map((service, i) => <li className="text-white font-bold text-xl" key={`${i}-${service}`}>{service}</li>)
    }

    return (
        <div className=" mt-12 w-full relative flex flex-col justify-center align-middle p-2">
            <h2 className="mb-4 font-bold text-4xl text-center text-white">Our Services</h2>
            <div className="w-full">
                <ul className="list-disc w-1/2 m-auto">
                    {renderServices()}
                </ul>
            </div>
        </div>
    )
};

export default OurServices;