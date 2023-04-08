import React from 'react'
import HeaderImageCarousel from '../HeaderImageCarousel';

const Header = () => {

    return (
        <div className="w-full">
            <HeaderImageCarousel />
            <div className="w-full h-96 flex flex-col justify-center border-2">
                <h1 className=" self-center text-white text-4xl font-bold">Tribal Grants</h1>
            </div>
        </div>
    )
}

export default Header;