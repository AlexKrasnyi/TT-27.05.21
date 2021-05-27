import React from 'react'


export const Form = () => {
    return (
        <form className='form'>
            <input type='text' className='form__name' name='name' placeholder='Name*'/>
            <input type='email' className='form__email' name='email' placeholder='Email*'/>
            <input type='date' className='form__name' name='name' placeholder='Date of Birth*'/>
            <input type='text' className='form__message' name='message' placeholder='Message*'/>
            <input  type='button'/>
        </form>
    )
}