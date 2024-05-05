import React from 'react';
import './Portofolio.css';
import UIUXDesign from '../../assets/uiux.png';
import WebDesign from '../../assets/web.png';
import AppDesign from '../../assets/app.png';

const Portofolio = () => {
  return (
    <section id="skills">
        <div className='skillContent'>
            <span className="skillTitle">SKILLS & EKSPERIENCE</span>
            <p className="skillDeks">I am skilled  and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong ubderstanding of design and a keen eye for detail. I am proficient in HTML, CSS, and Javascript, as well as design software such as Adobe Photoshop and Figma for web display design illustrations.</p>
            <div className="skillBar">
                <div className="skillBarText">
                    <img src={UIUXDesign} alt="skillBarImg" className='skillBarImg'/>
                    <h1 className="skillBarTitle">UI/UX Design</h1>
                    <h2 className="skillBarDeks">Research and visually Design</h2>
                    <p className="skillPara">"I am proficient in HTML, CSS, and Javascript, as well as design software such as Adobe Photoshop and Figma for web display design illustrations."</p>
                </div>
                <div className="skillBarText">
                    <img src={WebDesign} alt="skillBarImg" className='skillBarImg'/>
                    <h1 className="skillBarTitle">Web Design</h1>
                    <h2 className="skillBarDeks">Prototype and Coding Design to Web</h2>
                    <p className="skillPara">"I am proficient in HTML, CSS, and Javascript, as well as design software such as Adobe Photoshop and Figma for web display design illustrations."</p>
                </div>
                <div className="skillBarText">
                    <img src={AppDesign} alt="skillBarImg" className='skillBarImgA'/>
                    <h1 className="skillBarTitle">App Design</h1>
                    <h2 className="skillBarDeks">Prototype and Coding Design to App</h2>
                    <p className="skillPara">"I am proficient in HTML, CSS, and Javascript, as well as design software such as Adobe Photoshop and Figma for web display design illustrations."</p>
                </div>
            </div>
        </div>
    </section>
  )
};

export default Portofolio;