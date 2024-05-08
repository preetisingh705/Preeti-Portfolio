import React, { useState } from "react";
import gfg from '../Achievements/Tshirtgfg.jpg';
import python from '../Achievements/Pyhtonbadge.jpg';
import c from '../Achievements/C++badge.jpg';
import bag from '../Achievements/Bag.jpg';
import {motion} from 'framer-motion';
import { fadeIn } from '../../Varients';
import './Achievements.css'
import { CSSTransition } from 'react-transition-group';



export default function Achievements() {
  const data = [
    { img: python, text: "5* in python awarded by Hackerrank" },
    { img: c, text: "C" },
    { img: bag, text: "Gold" },
    { img: gfg, text: "GFG" },
   
  ];

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  return (
    <>
       <motion.div
        variants={fadeIn('right',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.5}} 
        className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 bottom-3 p-4 lg:px-20 mt-2 lg:mt-4" data-aos="fade-left">
        {data.map((item, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl cursor-pointer portfolio-box mix uiux  row" onClick={() => openModal(index)}>
            <img
              className="lg:h-40 h-28 w-full block rounded-sm cursor-pointer border border-red-50 shadow-2xl hover:shadow-md hover:ease-in duration-300 hover:shadow-blue-700"
              src={item.img}
              alt={item.text}
            />
          </div>
        ))}
      </motion.div>
      
      <CSSTransition in={showModal} classNames="modal" timeout={300} unmountOnExit>
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative max-w-[600px] max-h-[500px]" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-0 right-0 m-4 h-10 w-10 bg-opacity-55 text-white text-xl p-1 bg-slate-600 rounded-full" onClick={closeModal}>
              &times;
            </button>
            <button className="absolute top-1/2 transform -translate-y-1/2 left-0 m-4 text-white text-2xl" onClick={prevImage}>
              &#10094;
            </button>
            <button className="absolute top-1/2 transform -translate-y-1/2 right-0 m-4 text-white text-2xl" onClick={nextImage}>
              &#10095;
            </button>
            <img
              className="max-h-full max-w-full rounded-lg"
              src={data[currentIndex].img}
              alt={data[currentIndex].text}
            />
          </div>
        </div>
      </CSSTransition>
    
    </>
  );
}