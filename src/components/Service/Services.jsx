import React from 'react';
import Achievements from './Achievements/Achievements';
import CodingProfile from './CodingProfile';
import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import './Service.css';
import Ring from '../../assets/shapes/ring.png';
import circle from '../../assets/shapes/circle.png';
import { FaCode } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { IoLogoAngular } from "react-icons/io";




function Services() {


  return <section id='services' className='section grid  grid-cols-1 min-h-[130vh] bg-[var(--bg-color)] dark:bg-black '>
  <motion.h2 
        variants={fadeIn('down',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.5}}
      className='section-title  main-text text-center  mx-auto  text-3xl lg:text-5xl text-bold mt-12 lg:mt-4'>
         My Achievements
      </motion.h2>

    <Achievements/>
    <CodingProfile />

  <motion.h2 
        variants={fadeIn('down',0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}
      className='section-title main-text text-center mx-auto mt-4  text-3xl lg:text-4xl text-bold'>
         My Works
      </motion.h2>

     <motion.div
        variants={fadeIn('up',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.5}} 
        className="allServices grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-2 p-4 lg:px-24 relative mt-2 ">

            <div className="servicesItem  p-4 lg:w-[80%]">
                <div class="icon-services">
                    <FaCode className=' i' />
                    <span></span>
                </div>
                <h3 className='text-[15px] lg:text-xl text-[var(--main-color)]'>Web Development</h3>
                <p className='text-sm leading-2 text-black'>Project Completed: 12 <br /> Working Project: 2</p>
                
            </div>
            
            <div className="servicesItem p-4 lg:w-[80%]">
                <div className="icon-services">
                <RiComputerLine className=' i' />

                    <span></span>
                </div>
                <h3 className='text-[15px] lg:text-xl text-[var(--main-color)]'>UI / UX Design</h3>
                <p className='text-sm leading-2 text-black'>Designing UI of  Web Apps and Logo on Figma.</p>
            </div>

            <div class="servicesItem p-4 lg:w-[80%]" >
                <div class="icon-services">
                <IoLogoAngular className=' i' />

                    <span></span>
                </div>
                <h3 className='text-[15px] lg:text-xl text-[var(--main-color)]'> Logo Design</h3>
                <p className='text-sm leading-2 text-black'> Customize Logo And Designs</p>

            </div>

            <div class="servicesItem p-4 lg:w-[80%]">
            <div class="text-box">
                <span className='text-black'>Get In Touch</span>
                <h3 className='text-black'>Have a Project ?</h3>
                <a href="mailto://preetisingh790584@gmail.com" class="btn1">Hire Me</a>
            </div>
           </div>

            
        </motion.div>

       
      
  
  
  </section>;
};

export default Services;