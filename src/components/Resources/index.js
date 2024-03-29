import React from 'react';
import {FiEdit, FiUser, FiFileText} from 'react-icons/fi'

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

    const renderList = () => {
        let listItems = [{text: "Grant Writing", img: "http://tigereye-capital.com/wp-content/uploads/2016/12/b-005-300x300.jpg"}, {text: "Grant Consulting", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR892rnzhOwW0RLOz9n32MlwUNWj44NUcfSSQ&usqp=CAU"}, {text: "Business Planning", img: "https://upraise.io/wp-content/uploads/2019/11/How-To-Make-The-Most-Of-Business-Meetings-Banner.png"}];
        return listItems.map((listItem, i) => (
            <div key={`${i}-${listItem.text}`} className="md:w-1/3 w-full flex flex-col items-center justify-center my-8">
                <div className=" w-48 h-48 transition-all duration-700 hover:shadow hover:scale-105 rounded-full flex items-center justify-center ">
                    <img className="w-full h-full rounded-full bg-white" src={listItem.img} alt="" />
                </div>
                <p className="text-white text-2xl mt-4">{listItem.text}</p>
            </div>
        ))
    }

    return (
        <div className="md:px-4">
            <h2 className="text-blue-950  font-bold text-3xl md:text-5xl text-center md:text-left">What We Do</h2>
            <div className=" flex flex-row flex-wrap w-full bg-blue-950 md:rounded py-16 mb-4">
                {/* {renderResources()} */}
                {renderList()}
            </div>
            <div className="w-full flex flex-row flex-wrap items-center justify-center ">
                <p className="mx-2 md:mx-0 mt-4 md:mt-0 w-full text-blue-950 font-bold text-2xl text-center md:w-1/2"> Representing Ohlone Tribe of Chino Valley</p>
                <img className="w-full my-2 md:my-0 md:w-1/2" src="https://assets.change.org/photos/1/md/dx/xyMDdxyFgYGtEmz-800x450-noPad.jpg?1595380577" alt="" />
                <p className="md:w-1/2 mx-2 md:mx-0 w-full text-blue-950 font-bold text-2xl text-center md:mt-2"> Serving Many Califonia Tribes and 14 Tribes in Arizona</p>
            </div>
        </div>
    )
}

export default Resources;