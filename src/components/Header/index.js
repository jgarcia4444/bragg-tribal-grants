import React from 'react'
import landscape1 from '../../media/headerImgs/native-landscape-1.jpeg';

const Header = () => {

    return (
        <div className="w-full">
            <img className="w-full fixed left-0 top-0 -z-10" src={landscape1}/>
            <div className="w-full  h-full ">
                <h1 className=" text-white">Tribal Grants</h1>
            </div>
        </div>
    )
}

export default Header;