import React, {useState, useEffect} from 'react'

import logo from '../../media/logo/logo.png';
import ButtonContainer from '../Buttons/ButtonContainer';

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);
    const [lastScrolly, setLastScrolY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            let {scrollY} = window;
            if (scrollY > 450) {
                setShowNav(true);
            } else if (scrollY < 451) {
                setShowNav(false);
            } 
            setLastScrolY(window.scrollY);
        }
    }


    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar)
            }
        }
    },[lastScrolly])

    return (
        <div className={`opacity-0 ${showNav === true ? "fixed opacity-100" : ""} top-0 left-0 w-full flex flex-row shadow z-10 bg-white transition-all duration-1000`}>
            <div className="w-1/3">
                <a href="#header" >
                    <img src={logo} alt="" className="rounded w-1/4 m-2" />
                </a>
            </div>
            <div className="w-2/3 flex flex-row items-center justify-end pr-6 gap-4">
                <ButtonContainer text="Call (760) 409-6073" bgColor={'green'} to={"tel:7604096073"} />
                <ButtonContainer text="Schedule Time" to="#schedule" bgColor={'blue'}/>
            </div>
        </div>
    )
}

export default Navbar;