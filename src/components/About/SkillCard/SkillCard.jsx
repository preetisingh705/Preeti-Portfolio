import React from "react";
import "./SkillCard.css";


function SkillCard({title, iconUrl, isActive, onClick}){
    return(
        <div
        className={`skills-card ${isActive ? "active" : ""} bg-[#e3edf7] dark:bg-black lg:w-32 lg:h-28 w-[50px] h-[50px] overflow-hidden  `}
        onClick={ () => onClick()} >
        <div className="w-6 h-6 rounded-sm lg:w-14 lg:h-14 flex  bg-slate-300 lg:rounded-md dark:bg-black border dark:border-[#6751b9]">
            <div className="skill-icon lg:w-12 lg:h-12 justify-center items-center m-[2px] lg:m-1" >{iconUrl}</div>
        </div>

        <span className=" text-[8px] lg:text-xl font-medium  text-black dark:text-white ">{title}</span>
        </div>
    );
};

export default SkillCard;