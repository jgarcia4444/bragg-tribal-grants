import React from 'react';

import '../../../styles/components/HeaderImage/index.css';

const HeaderImage = ({src}) => {

    return (
        <img src={src} className="w-full h-1/2 absolute top-0 left-0 -z-10 carouselImg"/>
    )
}

export default HeaderImage;