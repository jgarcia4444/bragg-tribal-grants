import React from 'react'

const Resources = () => {

    const resources = [
        {content: "Helping sole proprietors or partnerships as they grow.", img: ""},
        {content: "", img: ""},
        {content: "", img: ""},
        {content: "", img: ""}
    ]

    const renderResources = () => {
        return resources.map((info, i) => <Resource key={`${i}-${info.content}`} info={info} />)
    }

    return (
        <div className="mx-auto w-1/2">
            <h2 className="text-blue-950 mb-6 font-bold text-5xl text-center">Resources</h2>
        </div>
    )
}

export default Resources;