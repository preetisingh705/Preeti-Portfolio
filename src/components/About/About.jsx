import React from 'react';
import "../../index.css";
import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import Tabbutton from './Tabbutton/Tabbutton';
import Hero from '../About/plogo3.png';
import Ring from '../../assets/shapes/ring.png';
import circle from '../../assets/shapes/circle.png';



function About() {

  return( 
  <section id='about' className='about  pt-12 lg:pt-12 lg:pb-12 dark:bg-black bg-[#e3edf7]'>
    <div className='container mx-auto'>
    <motion.h2 
        variants={fadeIn('down',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.4}}
      className='section-title main-text mt-6 lg:mt-8 text-center mx-auto text-black text-3xl lg:text-5xl text-bold'>
         About me
      </motion.h2>

     <div className='flex flex-col xl:flex-row mt-4 lg:mt-8  items-center gap-y-2'>
       <motion.div 
        variants={fadeIn('right',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.5}}
       className="about-img relative">
            <img src={Hero} alt="" className="aboutHero w-[32vw] h-auto "  />
            <div class="showcase-ring">
                <img src={Ring} className="Ring " />
                {/* <img src={circle} className="Circle" /> */}
            </div>
        </motion.div>

        <motion.div 
        variants={fadeIn('up',0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}} className='flex-1'>
      
       
        <Tabbutton />

      </motion.div>
     </div>

    </div>
  </section>
  );
};

export default About;