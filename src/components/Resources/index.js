import React from 'react';

import Resource from './Resource';
import VerticalCard from '../Cards/VerticalCard';

const Resources = () => {

    const resources = [
        {content: "Helping businesses that start out as sole proprietors or partnerships as they grow.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPUiQNx3mVAQLBFpMYpHdExhT92Kd9hMfmQ&usqp=CAU"},
        {content: "Grants for nonprofits, small businesses and individuals to develop a marketing strategy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjNdYifFQgHAQiyJuak-hquyU9-mawe0YKQ&usqp=CAU"},
        {content: "Joints ventures are available for affordable housing, construction loans, healthcare centures and commercial real estate", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqElt4Nusf_UpptFIMCE79Tg3Ui-VQKpce3w&usqp=CAU"},
        {content: "Farm Loan Programs are available to family-size farmers and ranchers to “start, improve, expand, transition, market, and strengthen  operations", img: "https://static01.nyt.com/images/2022/08/31/dining/31gardens-1/29gardens-1-videoSixteenByNine3000.jpg"}
    ]

    const renderResources = () => {
        return resources.map((info, i) => <VerticalCard txtColor={'blue'} key={`${i}-${info.content}`} info={info} />)
    }

    return (
        <div className="md:px-4">
            <h2 className="text-blue-950 mb-6 font-bold text-5xl text-center md:text-left">Resources</h2>
            <div className=" mt-10 flex flex-row flex-wrap w-full">
                {renderResources()}
            </div>
        </div>
    )
}

export default Resources;