import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { PiHandWavingFill } from "react-icons/pi";
import { FiTwitter } from "react-icons/fi";
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import { CiSaveDown1 } from "react-icons/ci";
import "./Banner.css";
import "../../index.css";
import resume from './PREETI SINGH.pdf';


function Banner() {
  return <section id='home' className='banner min-h-[95vh] lg:min-h-[95vh] flex dark:bg-none overflow-hidden' >
    {/* <AnimatedBg /> */}
    <div className='container home_container mx-auto mt-20 lg:mt-26'>
    <div className='flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-x-6'>
   
   <motion.div 
   variants={fadeIn('down',0.9)}
   initial='hidden'
   whileInView={'show'}
   viewport={{once: false, amount: 0.8}}

   className='home_img  max-w-[150px] max-h-[150px] md:max-w-[200px] md:max-h-[200px]
    lg:max-w-[320px] lg:max-h-[320px] justify-center items-center '>
  </motion.div>

   {/* data */}
  <div className='home_data flex-1 text-center font-secondary lg:text-left '>
    
    <motion.h1
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
     className='home_title text-[40px] font-bold leading-[1.4] lg:text-[70px] 
     main-text flex flex-row lg:flex-row lg:gap-x-4 justify-center lg:justify-start items-center'> 
            <PiHandWavingFill className='text-[25px] lg:text-[30px] text-[var(--main-color)] home_hand '/>

      Preeti Singh
    
    </motion.h1>
    
    <motion.div 
        variants={fadeIn('up',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className=' text-[25px] mb-2 lg:text-[50px] font-secondary font-semibold uppercase leading-none lg:leading-[1] text-black dark:text-white'>
    <span className="home_subtitle mr-4 ">I am a</span>
    <TypeAnimation
     sequence={[
      'Developer',
      2000,
      'Designer',
      2000,
      'Youtuber',
      2000,
     ]}
     speed={50}
     className='main-text'
     wrapper='span'
     repeat={Infinity}
     />
    </motion.div>

    <motion.p 
    variants={fadeIn('up',0.5)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.5}} 
    className="home_description mb-2  lg:mb-6 max-w-lg mx-auto lg:mx-0 text-black dark:text-white leading-10">
      I am very passionate and dedicated to doing work . I constantly driven to enhance my Skills. </motion.p>

      <motion.div
      variants={fadeIn('up',0.6)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.6}}
      className='btn-box flex max-w-max gap-x-6 items-center mb-4 lg:mb-8 mx-auto lg:mx-0 text-black dark:text-white'
      >
     
       <a href={resume} className="btn1 d-CV" download>
      Download CV
       </a>
       <a href="#contact" className=" btn1 ">
      Hire Me
       </a>
      </motion.div>

      <motion.div 
       variants={fadeIn('up',0.7)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once: false, amount: 0.7}}
       className='social text-[25px] mx-auto max-w-max lg:mx-0 flex gap-x-4 lg:gap-x-10'>        
        <div className='bg-icon'>
        <a href="https://www.linkedin.com/in/preeti-singh-764190258/"><FaLinkedin className='text-black dark:text-black' /></a>
         <span></span>
        </div><div className='bg-icon'>
        <a href="https://t.me/+917905845454"><FaTelegram  className='text-black dark:text-black ' /></a>
         <span></span>
        </div><div className='bg-icon'>
        <a href="https://x.com/singh_preeti7?t=RV2Of7sbPm1-X0RiQBqipw&s=03"><FiTwitter className='text-black dark:text-black ' /></a>
         <span></span>
        </div>
   </motion.div>
    
  </div>
  

  </div>

 <div className='home_scroll flex items-center justify-center  dark:text-white text-black'>
<a href="#about" className='home_scroll_button'>
<CiSaveDown1 className='lg:text-[40px] text-[40px] dark:text-white' />
</a>Down</div>
  </div>

  </section>;
};

export default Banner;