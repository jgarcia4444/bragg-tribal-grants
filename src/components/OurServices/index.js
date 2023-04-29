import React from 'react'
import VerticalCard from '../Cards/VerticalCard';

const OurServices = () => {

    const services = [
        {content: "Business Loans for Corporations", img: "https://www.incimages.com/uploaded_files/image/1920x1080/business-loan-illustration-1940x900_35212.jpg"},
        {content: "Grant Writing", img: "https://www.ed2go.com/common/images/1/18680.jpg"},
        {content: "Secure the capital necessary to start or grow business", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegHb6QtkdWTO1TP6Y8vBm9YjyTq_YTxNFwQ&usqp=CAU"},
        {content: "Capital needed to establish good business credit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7d8PsRIRSV8j5A0GUYhCtPGqjZi2RckTYg&usqp=CAU"}
    ];

    const renderServices = () => {
        return services.map((service, i) => <VerticalCard info={service} txtColor={'orange'} key={`${i}-${service.content}`} />)
    }

    return (
        <div className="w-full mx-auto flex justify-center flex-col lg:my-20 sm: md:mt-48 mt-12 md:px-4">
            <h2 className="text-orange-900 mb-6 font-bold text-3xl md:text-5xl text-center md:text-left">Our Services</h2>
            <div className="w-full flex flex-row flex-wrap ">
                {renderServices()}
            </div>
        </div>
    )
};

export default OurServices;