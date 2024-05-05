import React from 'react';
import './About.css';
import PageDesign from '../../assets/page1.png';
import PageResearch from '../../assets/page2.png';
import PageCoding from '../../assets/page3.png';

const About = () => {
  return (
    <section id="projects">
        <span className="project">PROJECT</span>
        <div className="projectContent">
            <h1 className="projectTitle">Research User Need</h1>
            <img src={PageResearch} alt="pgresearch" className="projectImg" />
            <p className="projectDeks">Research what users need and also develop these findings so that it becomes a platform that user-friendly.</p>
        </div>
        <div className="projectContent">
            <h1 className="projectTitle">Web Design & Prototype</h1>
            <img src={PageDesign} alt="pgdesign" className="projectImg" />
            <p className="projectDeks">There are several features that users need in it, create designs and also prototype them.</p>
        </div>
        <div className="projectContent">
            <h1 className="projectTitle">Landing Page Design Web</h1>
            <img src={PageCoding} alt="pgcoding" className="projectImg" />
            <p className="projectDeks">The process of implementing a prototype design into coding.</p>
        </div>
    </section>
  )
}

export default About;