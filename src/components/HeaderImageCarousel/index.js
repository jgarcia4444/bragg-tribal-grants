import React, {useEffect, useState} from 'react'

import '../../styles/HeaderImageCarousel/index.css';

import landscape1 from '../../media/headerImgs/native-landscape-1.jpeg';
import landscape2 from '../../media/headerImgs/native-landscape-2.jpeg';
import landscape3 from '../../media/headerImgs/native-landscape-3.jpeg';

const HeaderImageCarousel = () => {

    const imgs = [landscape1, landscape2, landscape3];

    const [imageIndex, setImageIndex] = useState(0);
    const [animationClass, saetAnimationClass] = useState('carouselImg')

    const handleImageChange = () => {
        if (imageIndex === imgs.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex + 1);
        }
    }

    const renderImage = () => {
        return <img className={`w-full h-96 absoute top-0 left-0 -z-10 ${animationClass}`} src={imgs[imageIndex]} />
    }

    useEffect(() => {
        setInterval(handleImageChange, 5000);
    })

    return (
        renderImage()
    )
};

export default HeaderImageCarousel;