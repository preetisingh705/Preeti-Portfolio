import React from "react";
import "./SkillsinfoCard.css";
import "../../../index.css";




function SkillsinfoCard ({title,skills}) 
    {

return (
<div className="skills-info-card m-2 w-[300px] lg:w-[700px] dark:bg-none">
     <h6 className="text-[var(--main-color)] font-bold">{title}</h6> 

    <div className="skills-info-content  grid-cols-2 gap-2 flex-2  grid lg:grid-cols-3 lg:m-4">
        {skills.map( (item, index) => ( 
            <React.Fragment >
                
                <div className="skill-box" key={index}>
                    <div className="outer dark:shadow-none border-1 outline-[#234de4] w-[130px] h-[130px] " >
                        <div className="inner w-[90px] h-[90px]  pl-6 pt-4 ">
                        <div className="number dark:text-white  font-semibold">{item.percentage}</div> 
                        <div className= "item-center justify-center text-[#234de4]">{item.iconh}</div>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg1  w-[150px] h-[150px]">
                                            <defs>
                                                <linearGradient id="GradientColor">
                                                <stop offset="0%" stop-color="#e91e63" />
                                                <stop offset="100%" stop-color="#673ab7" />
                                                </linearGradient>
                                            </defs>
                        <circle data-ta cx="65" cy="65" r="55"  strokeDasharray={item.stroke} strokeDashoffset={item.strokeoff} stroke-linecap="round" />
                         </svg>

                    </div>
                    <div className="text-center text-black dark:text-white">{item.skill}</div>


                </div>
            </React.Fragment>
         ))} 
    </div>
</div>
);
}

export default SkillsinfoCard;