
import React from 'react'
import ButtonContainer from '../ButtonContainer';

const CallButton = ({text, bgColor}) => {
    return (
        <ButtonContainer bgColor={bgColor}>
            <a href="tel:7604096073" >{text}</a>
        </ButtonContainer>
    )
}

export default CallButton;