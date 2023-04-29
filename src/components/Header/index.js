import React, {useState, useEffect} from 'react'
import HeaderImageCarousel from '../HeaderImageCarousel';
import ButtonContainer from '../Buttons/ButtonContainer';

const Header = () => {

    const [isHidden, setIsHidden] = useState(true);
    const [textHidden, setTextHidden] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsHidden(false);
        }, 1000);
        setTimeout(() => {
            setTextHidden(false);
        },1500);
    })

    return (
        <div id="header" className={`w-full lg:h-1/2 md:h-1/2 h-2/5 flex flex-col justify-center ${isHidden === true ? "opacity-0" : "opacity-100"} transition-all duration-500`}>
            <HeaderImageCarousel />
            <div className={`flex flex-col justify-center items-center gap-6 ${textHidden === true ? "translate-x-full scale-0" : "tranlate-x-0 scale-100"} transition-all duration-1000`}>
                <div className="headerContent bg-orange-900 bg-opacity-50 p-4 rounded shadow w-3/4 ">
                    <h1 className="mb-4 text-white lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold ">Songaa Grants</h1>
                    <p className="text-white lg:text-2xl md:text-xl text-lg font-bold">Bringing federal funds to tribes to supply help where it is needed.</p>
                </div>
                <div className="sm:w-3/4  headerCta flex md:flex-row sm:flex-col w-full flex-col justify-between ">
                    <ButtonContainer to={"tel:7604096073"} bgColor={'green'} text={"Call Now (760) 409-6073"} />
                    <ButtonContainer to={"#schedule"} text={"Schedule Time"} bgColor={"blue"} />
                </div>
            </div>
        </div>
    )
}

export default Header;