import React from 'react'
import HeaderImageCarousel from '../HeaderImageCarousel';

const Header = () => {

    return (
        <div className="w-full">
            <HeaderImageCarousel />
            <div className="w-full  h-full ">
                <h1 className=" text-white">Tribal Grants</h1>
            </div>
        </div>
    )
}

export default Header;