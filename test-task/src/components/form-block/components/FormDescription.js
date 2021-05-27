import React from 'react'
import '../../../img/'

export const FormDescription = () => {
    return (
        <div className='formDescription'>
            <h2 className='formDescription__title'>Request info</h2>
            <p className='formDescription__text'>Got a question? Need to see a demo? Want to start your free trial subscription? We'd love to hear from you!
             Contact us and we will get back to you shortly.</p>
            <img className='formDescription__image' src='../../../img/ContactUs.png' />
        </div>
    )
}