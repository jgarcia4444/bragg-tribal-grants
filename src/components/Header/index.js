import React from 'react'
import HeaderImageCarousel from '../HeaderImageCarousel';
import CallButton from '../Buttons/CallButton';
import CalendlyButton from '../Buttons/CalendlyButton';

const Header = () => {

    return (
        <div className="w-ful h-1/2 flex flex-col justify-center">
            <HeaderImageCarousel />
            <div className=" mx-2 self-center bg-orange-900 bg-opacity-50 p-4 rounded shadow">
                <h1 className="mb-2 text-white text-6xl font-bold">Tribal Grants</h1>
                {/* <hr/> */}
                <p className="mt-2 text-white text-2xl font-bold">Bringing federal funds to tribes to supply help where it is needed.</p>
                <CallButton bgColor={'green'} text={'Call (760) 409-6073'} />
                <CalendlyButton text={"Schedule Time"} bgColor={"blue"} />
            </div>
        </div>
    )
}

export default Header;