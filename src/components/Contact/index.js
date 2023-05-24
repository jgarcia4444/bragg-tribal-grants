import React, {useState} from 'react'
import {FiMail} from 'react-icons/fi';

const Contact = () => {

    const [iconHovered, setIconHovered] = useState(false);

    return (
        <div className="w-full mx-auto flex justify-center flex-col lg:my-20 mt-28 md:mt-12 md:px-4 ">
            <h2 className="text-orange-900 font-bold text-3xl md:text-5xl text-center md:text-left">Contact</h2>
            <div className="w-full shadow bg-gray-100 rounded p-6 mb-12">
                <div className="flex flex-row items-center justify-center flex-wrap">
                    <div className="w-full text-center">
                        <p className="hover:text-orange-700 font-bold text-3xl text-orange-900 mr-2 ">Email</p>
                    </div>
                    <a className="" href="mailto:danielbraggteam@gmail.com">
                        <FiMail onMouseLeave={() => setIconHovered(false)} onMouseEnter={() => setIconHovered(true)} color={`${iconHovered === true ? "rgb(194, 65, 12)" : "#7c2d12"}`} size={36} />
                    </a>
                    <a className="" href="mailto:danielbraggteam@gmail.com">
                        <p className="hover:text-orange-700 text-3xl text-orange-900 ml-4">danielbraggteam@gmail.com</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;