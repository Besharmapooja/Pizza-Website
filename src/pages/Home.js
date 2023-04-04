import React from 'react';
import '../styles/Home.css'
import { Link } from 'react-router-dom';
import BannerImage from "../assets/pizza.jpeg"

function Home() {
  return (
    <div className='home'style={{backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer' >
        <h1> Pooh's Pizzeria</h1>
        <p> Love your Pizza</p>
        <Link to="/menu">
        <button> Order Now</button>
        </Link>
        

      </div>

    
    </div>
  )
}

export default Home;