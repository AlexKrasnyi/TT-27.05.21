import React from 'react'

export const SliderCard = ({img, text}) => {
    return (
        <div className='sliderCard'>
            <img className='sliderCard__image' src={img}/>
            <p className='sliderCard__text'>{text}</p>
        </div>
    )
}