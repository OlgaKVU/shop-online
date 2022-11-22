import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/banner.jpg';
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'style={{backgroundImage: `url(${BannerImage})`}}>
        
        <div className='headerContainer' >
          <h1>Discover your favorite </h1>
          
             <Link to="/menu">
             
             </Link>
        </div>
    </div>
  )
}

export default Home