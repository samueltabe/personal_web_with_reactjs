import React, { useContext } from 'react'
import './Hero.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Sam from '../../img/Sam.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Hero = () => {
    // Transition
    const transition = { duration: 2, type: "spring" };

  //context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='hero'>
      <div className="h-left">
          <div className="h-name">
              <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
              <span>Samuel Tabe</span>
              <span>Frontend Developer with high level of experience
              in web design and development, producing quality
              works</span>
          </div>
          <button className='button h-button'>Hire Me</button>
          <div className="h-icons">
            <a href=""><img src={Github} alt="" /></a>
            <a href=""><img src={LinkedIn} alt="" /></a>
            <a href=""><img src={Instagram} alt="" /></a>
          </div>
      </div>
      <div className="h-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={Sam}  alt="" className='pic'/>
          <motion.img
          initial={{ left:'-36%' }}
          whileInView={{ left: '-24%' }}
          transition={{ transition }} 
          src={ glassesimoji} alt="" />
          <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition} 
          style={{ top: '-4%', left : '60%' }}>
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
          </motion.div>
          <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: '18rem', left : '-5rem' }}>
            <FloatingDiv image={Thumbup} txt1='Best Design' txt2='Award'/>
          </motion.div>
          <div className='blur' style={{ background:'rgb(238 210 255)' }}></div>
          <div className="blur" style={{ 
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem'
           }}></div>
      </div>
    </div>
  )
}

export default Hero
