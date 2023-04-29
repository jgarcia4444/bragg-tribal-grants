import React, {useState, useEffect} from 'react'

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);
    const [lastScrolly, setLastScrolY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            let {scrollY} = window;
            if (scrollY > 20) {
                setShowNav(true);
            } else if (scrollY < 21) {
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
        <div className={`${showNav === true ? "fixed" : "hidden"} top-0 left-0 w-full flex flex-row shadow z-10 bg-white`}>
            Nav
            <div className="w-1/3">
                {/* // logo */}
            </div>
            <div className="w-2/3">
                {/* // cta links */}
            </div>
        </div>
    )
}

export default Navbar;