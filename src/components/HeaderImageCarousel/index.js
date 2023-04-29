import React, {useEffect, useState} from 'react'

import '../../styles/components/HeaderImageCarousel/index.css';

import landscape1 from '../../media/headerImgs/native-landscape-1.jpeg';
import landscape2 from '../../media/headerImgs/native-landscape-2.jpeg';
import landscape3 from '../../media/headerImgs/native-landscape-3.jpeg';
import HeaderImage from './HeaderImage';

const HeaderImageCarousel = () => {

    const imgs = [landscape1, landscape2, landscape3];

    const [imageIndex, setImageIndex] = useState(0);

    const handleImageChange = () => {
        if (imageIndex === imgs.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex + 1);
        }
    }

    const renderImage = () => {
        let src = imgs[imageIndex];
        return <HeaderImage key={src} src={src} />
    }

    useEffect(() => {
        let transitionTimeout = setInterval(handleImageChange, 5000);
        return () => {
            window.clearInterval(transitionTimeout);
        }
    })

    return (
        renderImage()
    )
};

export default HeaderImageCarousel;