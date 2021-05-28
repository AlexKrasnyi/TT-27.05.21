import React from 'react'

export const Card = ({img, title, text}) => {
    return (
        <div className='card'>
            <img className='card__image' src={img} />
            <h3 className='card__title'>{title}</h3>
            <p className='card__text'>{text}</p>
        </div>
    )
}