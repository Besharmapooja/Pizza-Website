import React from 'react'
import multiple from "../assets/try.jpg"
import "../styles/About.css"
function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${multiple})`}}></div>
        <div className='aboutBottom'>
            <h1>
                ABOUT US
            </h1>
            <p>
                We started our little joint in 1997 on 19th Oct. We enjoy making great food for wonderful people. Feel free to order online and drop by with your pets!!
            </p>

        </div>
    </div>
  )
}

export default About