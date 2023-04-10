import React from 'react'
import ButtonContainer from '../ButtonContainer';

const CalendlyButton = ({text, bgColor}) => {

    return (
        <ButtonContainer bgColor={bgColor}>
            <a href="">{text}</a>
        </ButtonContainer>
    )
};

export default CalendlyButton;