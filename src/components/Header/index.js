import React from 'react'
import HeaderImageCarousel from '../HeaderImageCarousel';
import ButtonContainer from '../Buttons/ButtonContainer';

const Header = () => {

    return (
        <div className="w-full lg:h-1/2 md:h-1/2 h-2/5 flex flex-col justify-top">
            <HeaderImageCarousel />
            <div className="flex flex-col justify-center lg:mt-20 md:mt-20">
                <div className="headerContent bg-orange-900 bg-opacity-50 p-4 rounded shadow lg:w-3/4 md:w-3/4 sm:w-3/4 self-center">
                    <h1 className="mb-2 text-white lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold ">Songaa Grants</h1>
                    <p className="mt-2 text-white lg:text-2xl md:text-xl text-lg font-bold">Bringing federal funds to tribes to supply help where it is needed.</p>
                </div>
                <div className="lg:w-3/4 md:w-3/4 sm:w-3/4 self-center headerCta flex lg:flex-row md:flex-row sm:flex-col w-full flex-col justify-between mt-28">
                    <ButtonContainer to={"tel:7604096073"} bgColor={'green'} text={"Call Now (760) 409-6073"} />
                    <ButtonContainer to={"#schedule"} text={"Schedule Time"} bgColor={"blue"} />
                </div>
            </div>
        </div>
    )
}

export default Header;