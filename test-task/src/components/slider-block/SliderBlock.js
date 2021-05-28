import React from 'react'
import './SliderBlock.css'
import  Sliderr  from './components/Slider'

export const SlideBlock = () => {
    return (
        <div className='sliderBlock'>
            <h2 className='sliderBlock__title'>iCaria Living - Explore the wonders of life</h2>
            <Sliderr />
        </div>
    )
}