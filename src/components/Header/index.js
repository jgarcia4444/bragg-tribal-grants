import React from 'react'
import HeaderImageCarousel from '../HeaderImageCarousel';
import ButtonContainer from '../Buttons/ButtonContainer';

const Header = () => {

    return (
        <div className="w-ful h-1/2 flex flex-col justify-center">
            <HeaderImageCarousel />
            <div className="mx-2">
                <div className="headerContent bg-orange-900 bg-opacity-50 p-4 rounded shadow">
                    <h1 className="mb-2 text-white text-6xl font-bold">Tribal Grants</h1>
                    <p className="mt-2 text-white text-2xl font-bold">Bringing federal funds to tribes to supply help where it is needed.</p>
                </div>
                <div className="headerCta flex lg:flex-row md:flex-row sm:flex-col w-full flex-col justify-between">
                    <ButtonContainer to={"tel:7604096073"} bgColor={'green'} text={"Call Now (760) 409-6073"} />
                    <ButtonContainer to={"#schedule"} text={"Schedule Time"} bgColor={"blue"} />
                </div>
            </div>
        </div>
    )
}

export default Header;