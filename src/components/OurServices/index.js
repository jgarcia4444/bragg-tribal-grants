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

    const renderLis = () => {
        let lis = ["Lack of Housing", "Lack of Funding", "Lack of Education", "Lack of Health Services", "Lack of Entrepreneurs", "Substance Abuse", "Lack of Income Opportunities"];
        return lis.map((text, i) => <li className={`py-2 px-2 md:px-4 text-base md:text-2xl font-bold mb-4 text-white rounded shadow-xl bg-orange-800 mx-2 transition-all duration-700 hover:shadow hover:scale-105 cursor-pointer`} key={`${i}-${text}`}>{text}</li>)
    }

    return (
        <div className="w-full mx-auto flex justify-center flex-col lg:my-20 mt-28 md:mt-12 md:px-4">
            <h2 className="text-orange-900 font-bold text-3xl md:text-5xl text-center md:text-left">Is Your Tribe Dealing With the Following?</h2>
            <div className="w-full flex flex-row flex-wrap items-center justify-center md:rounded">
                {/* {renderServices()} */}
                <ul className=" list-inside w-full flex flex-row flex-wrap px-4 py-10 items-center justify-center">
                    {renderLis()}
                </ul>
            </div>
            <div className="w-full flex flex-row flex-wrap items-center justify-center mt-4">
                <p className="text-orange-900 text-2xl font-bold md:w-1/2 w-full text-center mb-4 md:mb-0">Billions of dollars are available in grants specifically set aside for tribes.</p>
                <img className="w-1/2 rounded" src="https://www.collegegrant.net/wp-content/uploads/young-pair-of-native-americans.png" alt="" />
            </div>
        </div>
    )
};

export default OurServices;