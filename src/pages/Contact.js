import React from 'react';
import Independance  from  '../assets/image.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'style={{backgroundImage: `url(${Independance})`}}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form  id="contact-form">
                <label htmlFor='name'>Full Name</label>
                <input name="name" placeholder='Enter full name..' type='text'/>
                <label htmlFor='email'>Email</label>
                <input name="email" placeholder='Enter email..' type='email'/>
                <label htmlFor='message'>Message</label>
                <textarea name="message"  rows="6"  placeholder="Enter massege" required></textarea>
                <button type="submit">Send message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact