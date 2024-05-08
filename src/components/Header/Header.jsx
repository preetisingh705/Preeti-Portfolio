import React, { useEffect, useState } from 'react';
import '../../index.css';
import { SiGithub } from "react-icons/si";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";


function Header() {

const [darkMode, setDarkMode] = useState();


//theme check
useEffect(() => {
  const theme = localStorage.getItem("theme")
if( theme === "light") setDarkMode(true)
},[]);

useEffect(() => {
 if(darkMode){
  document.documentElement.classList.add('dark');
  localStorage.setItem("theme", "light")
 }else{
  document.documentElement.classList.remove('dark');
  localStorage.setItem("theme", "dark")
 }
},[darkMode]);



  return <header className='header  lg:p-4 w-full fixed overflow-hidden dark:bg-none '>

      <div className='flex justify-between '>

      <div className="logo text-black  dark:text-white"><span className='span-logo'>PR</span>eeti</div>

      <div className='flex justify-end gap-2 lg:gap-4'>

       <a href="https://github.com/preetisingh705" className='lg:mx-2'>
       <SiGithub size={25} className='text-black dark:text-white mt-1'/>
       </a>

       <a href="#contact" className=" btn1 h-10 items-center mx-1">Let's Chat</a>

       <div className='relative w-16 h-8 flex items-center main-box cursor-pointer rounded-full p-1 lg:mx-2'
        onClick={() => setDarkMode(!darkMode)}>
        <FaMoon className='text-white' size={18} />
        <div className='absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300'
        style={ darkMode ? {left: "2px"} : {right: "2px"}}>
        </div>
        <BsSunFill className='ml-auto text-yellow-400' size={18} />
       </div>


      </div>

      </div> 
    
  </header>;
};

export default Header;