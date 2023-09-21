import React from 'react'
import '../Full-Image/index.css'
const FullImage = ({source}) => {
    return (
        <div className={'image-container'}>
            <div className={'image-box'}>
                <img src={`${source}`} alt="" className={'full-image-img'}/>
            </div>
        </div>
    )
}

export default FullImage