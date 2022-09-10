import React, { useContext } from 'react'
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './resume.pdf';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
   //context
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

   // transition
  const transition = {
   duration: 1,
   type: "spring",
  }

  return (
    <div className='services' id='Service'>
      {/*left side */}
      <div className='awesome'>
          <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
          <span>Services</span>
          <span>reproduced in their exact original 
              form, accompanied<br/> by English versions
              from the 1914 translation
            </span>
            <a href={Resume} download>
            <button className='button s-button'>Download CV</button>
            </a>
            <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>

      {/*right side */}
      <div className='cards'>
         <motion.div 
         initial={{ left: "25rem" }}
         whileInView={{ left: "14rem" }}
         transition={transition}
         style={{ left: '24rem' }}>
            <Card
             emoji = {HeartEmoji}
             heading = {'Languages'}
             detail = {'HTML, CSS, JavaScript, PHP'}
            />
         </motion.div>

         <motion.div 
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
         style={{ top: '12rem', left: '3rem' }}>
            <Card
             emoji = {Glasses}
             heading = {'Lib & Framworks'}
             detail = {'Laravel, React Js, Bootstraps'}
            />
         </motion.div>

         <motion.div 
         initial={{ top: "19rem", left: "25rem" }}
         whileInView={{ left: "12rem" }}
         transition={transition}
         style={{ top: '20rem', left: '22rem' }}>
            <Card
             emoji = {Humble}
             heading = {'CMS & DB'}
             detail = {'WordPress, MySql'}
            />
         </motion.div>
         <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div> 
      </div>
    </div>
  )
}

export default Services

