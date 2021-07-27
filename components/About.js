import React from 'react';
import aboutImage from '../images/about.png';

const About = ()=>{
    return(
        <div id='about'>
            <div className='about-image'>
            <img src={aboutImage} alt=''/>
            </div>
            <div className='about-text'>
                <h1>LEARN MORE ABOUT US</h1>
                <button>READ MORE</button>
            </div>
        </div>
    )
}

export default About;