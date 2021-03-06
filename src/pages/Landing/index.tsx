import React from 'react';
import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon  from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon  from '../../assets/images/icons/purple-heart.svg';


import './styles.css'
function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="Container">
        <div id="logo-container">
          <img src={LogoImg} alt="proffy"/>
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img 
          src={LandingImg} 
          alt="plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="Estudar"/>
          </a>

          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar"/>
          </a>
        </div>
        <span className="total-connections">
          Total de 200 conexões ja realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing;