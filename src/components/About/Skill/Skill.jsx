import React, { useState } from "react";
import "./Skill.css";
import { SKILLS } from "../SkillCard/SkillData";
import SkillCard from "../SkillCard/SkillCard";
import SkillsinfoCard from "../SkillInfoCard/SkillsinfoCard";

function Skill(){
    
    const [selectedSkill, setselectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill =(data) => {
        setselectedSkill(data);
    };
    return(
        <section className="skills-container">
         <div className="skill-content">
            <div className=" flex-1 grid grid-cols-5 lg:gap-2 gap-2 ">
                {SKILLS.map((item) =>(
                    <SkillCard 
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={() =>{ handleSelectSkill(item);
                    }}
                    />
                ))}
            </div>

            <div className="skills-info  flex-1 grid grid-cols-2 gap-2">
                <SkillsinfoCard 
                title={selectedSkill.title}
                skills={selectedSkill.skills}
                />
            </div>
         </div>
        </section>
    );
};

export default Skill;