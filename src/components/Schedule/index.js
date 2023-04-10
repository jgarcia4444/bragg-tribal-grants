import React from 'react';
import { InlineWidget } from "react-calendly";

const Schedule = () => {

    return (
        <div id="schedule" className="w-full h-auto bg-orange-900">
            <InlineWidget
                url='https://calendly.com/jgarciadev4444' 
                styles={{overflow: 'hidden', height: '75vh'}}
            />
        </div>
    )
}

export default Schedule