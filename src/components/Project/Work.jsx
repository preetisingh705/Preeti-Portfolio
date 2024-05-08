import React from 'react';
import { useEffect, useState } from "react";
import "./Style.css";
import "../../index.css";
import TodoJs from "../Project/TodoJs.png";
import ss from "../Project/ss.png";
import cg from "../Project/cg.png";
import lc from "../Project/lc.png";
import sc from "../Project/sc.png";
import cd from "../Project/cd.png";
import wf from "../Project/wf.png";
import fr from "../Project/fr.png";
import sn from "../Project/sn.png";
import tl from "../Project/tl.png";
import wa from "../Project/wa.png";
import pp from "../Project/pp.png";

import { HiEye } from "react-icons/hi2";
import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import { FaCode } from "react-icons/fa6";


function Work() {
  const [items, setItems] = useState(data);
  const filterItem = (cate) => {
    const updatedItems = data.filter((currentItem) => {
      return currentItem.category === cate;
    });
    setItems(updatedItems);
  };
  return <section id='work' className='section min-h-[130vh] bg-[var(--bg-color)] flex flex-col dark:bg-black  '>
       <div className=" main-text">
       <motion.h2 
        variants={fadeIn('down',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.5}}
      className='section-title main-text text-center mx-auto mt-10 lg:mt-4  text-3xl lg:text-5xl text-bold'>
         My Projects
      </motion.h2>

        </div>

        <motion.div 
        variants={fadeIn('right',0.7)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}} 
        className="fillter-buttons mt-6">
            <button className=" button p-2 text-sm font-semibold lg:p-4 lg:font-bold  " type="button" onClick={() => setItems(data)}>All Work</button>
            <button class="button p-2 text-sm font-semibold lg:p-4 lg:font-bold  "  type="button" onClick={() => filterItem('Python')}>Python</button>
            <button class="button p-2 text-sm font-semibold lg:p-4 lg:font-bold "  type="button" onClick={() => filterItem('HTML/CSS')}>Html</button>
            <button class="button p-2 text-sm font-semibold lg:p-4 lg:font-bold " type="button" onClick={() => filterItem('JS')}>JavaScript</button>
            <button class="button p-2 text-sm font-semibold mt-2 lg:p-4 lg:font-bold" type="button" onClick={() => filterItem('React')}>React</button>
        </motion.div>

        <motion.div 
        variants={fadeIn('up',0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}} 
         className="portfolio-content  grid lg:grid-cols-4 grid-cols-2 gap-4 lg:gap-8 px-6">
{ items.map((d,index) => (
    <div className="relative overflow-hidden rounded-xl cursor-pointer portfolio-box mix uiux  row">
      <img src={d.img} className='lg:h-40 h-32 w-full block rounded-sm'/>
    <div className="layer lg:py-0 lg:px-10">
        <h5 className='lg:mt-8 mt-4 text-black text-16  lg:text-20 lg:mb-6 mb-2'>{d.title}</h5>
        <div className='lg:ml-14 ml-6 flex flex-row lg:gap-8 gap-2'> 
        <a href={d.git} className="eye cursor-pointer text-6 lg:text-10 flex items-center justify-center  h-10 w-10 rounded-full bg-white"><FaCode/></a>
        <a href={d.live} className="eye cursor-pointer text-6 lg:text-10 flex items-center justify-center h-10 w-10 rounded-full bg-white"><HiEye /></a>
       </div>
    </div>
    </div>
  ))}
</motion.div>
  </section>;
};
const data = [
  {
    title: "To-Do List",
    img:TodoJs,
    git:"https://github.com/preetisingh705/ToDo-App.github.io?tab=readme-ov-file",
    category:"JS",
   live:"https://preetisingh705.github.io/ToDo-App.github.io/"
  },
  {
    title:"Simon Says",
    img:ss,
    git:"https://github.com/preetisingh705/Simon-Says.github.io?tab=readme-ov-file",
    category:"JS",
    live:"https://preetisingh705.github.io/Simon-Says.github.io/"
  },
  {
    title:"Color-Gradient Generator",
    img:cg,
    git:"https://github.com/preetisingh705/Color-and-Gradient-Generator.github.io?tab=readme-ov-file",
    category:"JS",
    live:" https://preetisingh705.github.io/Color-and-Gradient-Generator.github.io/"
  },
   {
    title:"Cat-Dog Facts",
    img:cd,
    git:"https://github.com/preetisingh705/Cat-Dogs-RandomApi.github.io?tab=readme-ov-file",
    category:"JS",
    live:"https://preetisingh705.github.io/Cat-Dogs-RandomApi.github.io/"
  },
  {
    title:"Weather Forecasting",
    img:wf,
    git:"https://github.com/preetisingh705/Weather-Forecasting.github.io?tab=readme-ov-file",
    category:"JS",
    live:"https://preetisingh705.github.io/Weather-Forecasting.github.io/"
  },
 

  {
    title: "Facial Recognition",
    img: fr,
    git: "https://github.com/preetisingh705/Facial-Recognition-Attendance-System",
    category: "Python",
    live:"https://github.com/preetisingh705/Facial-Recognition-Attendance-System" 
  }, 


  // React Projects

  {
    title:"Preeti's Portfolio",
    img:pp,
    git:"https://github.com/preetisingh705/Preeti-Portfolio",
    category:"React",
    live:"https://preeti-portfolio-seven.vercel.app/"
  },
 
  {
    title:"Todo List",
    img:tl,
    git:"https://github.com/preetisingh705/To-Do-List",
    category:"React",
    live:"https://to-list-yux5d8r32-preetisingh705s-projects.vercel.app/"
  },
  
 
  {
    title:"Weather App",
    img:wa,
    git:"https://github.com/preetisingh705/Weather-App",
    category:"React",
    live:"https://weather-eiwvnc9pe-preetisingh705s-projects.vercel.app/"
  },

  // html Projcets

  {
    title:"Spotify-Clone",
    img:sc,
    git:"https://github.com/preetisingh705/Spotify-Clone.github.io",
    category:"HTML/CSS",
    live:" https://preetisingh705.github.io/Spotify-Clone.github.io/"
  },
  
  {
    title:"Side Navbar",
    img:sn,
    git:"https://github.com/preetisingh705/Navbar.github.io?tab=readme-ov-file",
    category:"HTML/CSS",
    live:" https://preetisingh705.github.io/Navbar.github.io/"
  },
  {
    title:"Linktree Clone",
    img:lc,
    git:"https://github.com/preetisingh705/Portfolio-linktree-clone.github.io?tab=readme-ov-file",
    category:"HTML/CSS",
    live:" https://preetisingh705.github.io/Portfolio-linktree-clone.github.io/"
  },
 
];

export default Work;