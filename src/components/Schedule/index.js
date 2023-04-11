import React from 'react';
import { InlineWidget } from "react-calendly";

const Schedule = () => {

    return (
        <div id="schedule" className="w-full h-auto">
            <InlineWidget
                url='https://calendly.com/jgarciadev4444' 
                styles={{overflowY: 'hidden', height: '90vh'}}
            />
        </div>
    )
}

export default Schedule