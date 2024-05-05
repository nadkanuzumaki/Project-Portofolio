import React from 'react';
import './Intro.css';


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span>Hello,</span>
            <span className="introText1">I'm Web Developer <br /><span className="introText2">& Web Designer</span></span>
            <p className="introPara">Web Developer and Graphic Designer with over 1 years of experience specializing in IT Development management, I can implement effective IT Strategies at local levels. My greatest strength is business awareness, which enables me to permanently streamline infrastructure and applications.</p>
            <button className="introBtn">Resume</button>
        </div>
    </section>
  )
};

export default Intro;