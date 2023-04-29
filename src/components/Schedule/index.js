import React from 'react';
import { InlineWidget } from "react-calendly";

const Schedule = () => {

    return (
        <div id="schedule" className="w-full h-auto">
            <h2 className="text-blue-950 font-bold text-3xl md:text-5xl text-center md:text-left">Schedule</h2>
            <p className="text-blue-950 font-bold ml-14">Use the calendly feature below to set up a 15 minute call.</p>
            <InlineWidget
                url='https://calendly.com/danielbraggteam' 
                styles={{overflowY: 'hidden', height: '90vh'}}
            />
        </div>
    )
}

export default Schedule