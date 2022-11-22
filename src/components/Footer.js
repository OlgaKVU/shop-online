import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkeInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'
 
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <LinkeInIcon />  
        </div>
        <p> &copy; 2022 shop-online.com</p>
        </div>
  )
}

export default Footer