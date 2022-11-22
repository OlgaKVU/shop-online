import React from 'react';
import Blue from '../assets/blue.png';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop'style={{backgroundImage: `url(${Blue})`}}>
            
        </div>
        <div className='aboutBottom'>
            <h1>About us</h1>
            <p>First, lets dig a little deeper into what makes a great product description.

A great starting point is thinking in terms of your customer. Instead of listing the benefits of your product, let them know how it will help them specifically.

This is essential for clothing stores. Instead of only talking about your lovely, soft fabric  also tell them how warm they’ll be on a crisp winter’s morning.

You want to create an image in their mind so that they can see themselves in their product.

You want to be one step ahead of your customer. Think about what problem your clothes might solve. If you sell clothing for kids, maybe you want to appeal to parents about how your clothes make getting dressed in the morning that much easier.

See if you can spot some of these techniques in the following fashion product descriptions…</p>
        </div>

    </div>
  )
}

export default About