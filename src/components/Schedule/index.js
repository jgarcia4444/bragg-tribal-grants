import React from 'react';
import { InlineWidget } from "react-calendly";

const Schedule = () => {

    return (
        <div id="schedule" className="w-full h-auto">
            <h2 className="text-blue-950 mb-6 font-bold text-5xl text-center">Schedule</h2>
            <p>Set up time for a 30 minute call.</p>
            <InlineWidget
                url='https://calendly.com/jgarciadev4444' 
                styles={{overflowY: 'hidden', height: '90vh'}}
            />
        </div>
    )
}

export default Schedule