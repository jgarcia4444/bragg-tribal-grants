import React, {useEffect, useState} from 'react';

import '../../../styles/components/HeaderImage/index.css';

const HeaderImage = ({src}) => {

    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFadeIn(true);
        },25)
    })

    return (
        <img src={src} className={`w-full h-1/2 absolute top-0 left-0 -z-10 carouselImg transition-all duration-1000 ${fadeIn === true ? "opacity-100" : "opacity-0"}`}/>
    )
}

export default HeaderImage;