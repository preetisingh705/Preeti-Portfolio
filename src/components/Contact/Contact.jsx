import React from 'react';
import {MailIcon, HomeIcon,MessageCircle} from 'lucide-react';
import "./Contact.css";
import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import { FaWhatsapp } from "react-icons/fa";


function Contact() {

  
  return(
     <section id='contact' className='section justify-center grid grid-cols-1  items-center dark:bg-black bg-[var(--bg-color)] min-h-[120vh]'>

  <div className='text-center mt-12 md:mt-16 lg:mt-2'>
  <motion.h2 
        variants={fadeIn('down',0.9)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.9}}
      className='section-title main-text text-center mx-auto text-3xl lg:text-5xl text-bold'>
         Contact Me
      </motion.h2>
  <motion.h2 
        variants={fadeIn('down',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.5}}
      className='section-title main-text text-center mx-auto text-sm lg:text-xl text-bold'>
         Get in Touch With Me
      </motion.h2>
  </div>

  <div className='container  flex flex-col-reverse md:flex-row lg:flex-row justify-between  mx-1 lg:mx-20 mb-32 lg:mb-6 mt-4 lg:mt-2'>

    <div className=' flex flex-col gap-2 lg:gap-3 items-center mt-4 lg:mt-0 lg:mx-20'>
    <motion.div 
        variants={fadeIn('right',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.5}} className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-4'>


      <article className='box  rounded-xl text-center w-[160px] lg:w-[250px] '>
        <MailIcon className='mx-14 md:mx-16 lg:mx-24' />
        <h4>Gmail</h4>
          <h5 className="text-[8px] lg:text-[18px]">preetisingh790584@gmail.com</h5>
          <a href="mailto:preetisingh790584@gmail.com">Send</a>
      </article>



      <article className='box p-1 rounded-xl text-center lg:w-[250px]'>
        <HomeIcon className='mx-12 md:mx-16 lg:mx-24'/>
           <h6>Location</h6>
          <h5>Kanpur</h5>
      </article>


      <article className='box p-1 rounded-xl text-center lg:w-[250px]'>
        <MessageCircle  className='mx-12 md:mx-16 lg:mx-24 '/>
          <h4>Whatsapp</h4>
          <h5>+917905845454</h5>
          <a href="https://wa.me/7905845454">Connect Me</a>
      </article>
    </motion.div>
    </div>


   {/* Contact Form */}
   <motion.div
        variants={fadeIn('up',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.5}} 
        className='grid grid-cols-1 p-4  tabbg  rounded-lg mx-2 lg:w-[70%]  '>

    <div className='text-center lg:h-14 h-10 justify-center'>
      
    <motion.div 
        variants={fadeIn('down',0.9)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.9}}
      className='section-title main-text text-center mx-auto text-2xl lg:text-4xl text-bold border-b-4 w-32 lg:w-52 rounded-sm border-[var(--main-color)]'>
         Message Me
      </motion.div>
      </div>

    <form method='POST' action='https://formspree.io/f/xvoedrgy' target='blank' >
      <div className='lg:mb-8  mt-4'>
      <div className='items-center justify-center mx-6 px-4 lg:px-8 border-b-2 border-black-900 '>
       <input type="text" name='name' placeholder='Your Name'className='p-2  w-full font-bold text-black w-full' required />
       </div>
       <div className='items-center justify-center mx-6 px-4 lg:px-8 mt-4 lg:mt-8 border-b-2 border-black-900'>
       <input type="email" name='email' placeholder='Your Email'  className='p-2  w-full font-bold text-black'required />
       </div>
       <div className='items-center justify-center px-4 lg:px-8 mt-4 lg:mt-8 border-black-900 border-b-2  mx-6'>
       <input name="message"  placeholder='Write Your Query Here' className='p-2 w-full  font-bold text-black ' required />
       </div>
       <div className=''>
       <button type='submit' className='btn1 mt-6 mx-14 md:mx-40  lg:mx-72' >Send Message</button>
       </div>
       </div>
    </form>
    </motion.div>


  </div>


  </section>
  );
};

export default Contact;