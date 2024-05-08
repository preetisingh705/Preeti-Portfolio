import '../../../index.css';
import {User2 , MailIcon, HomeIcon, PhoneCall , GraduationCap, Calendar, Briefcase} from 'lucide-react';

const infoData = [
    {
      icon: <User2 size={20} />,
      text: 'Preeti Singh',
    },
    {
      icon: <PhoneCall size={20} />,
      text: '+91 7905845454',
    },
    {
      icon: <Calendar size={20} />,
      text: 'Born on 1 march, 2003',
    },
    {
      icon: <GraduationCap size={20} />,
      text: 'Bachelor on Infromation Technology',
    },
    {
      icon: <HomeIcon size={20} />,
      text: '81 Deoria',
    },
    ];

    
function Personal() {
  const info = [
    { text: "Completed Projects", count: "12" },
    { text: "Working on Project", count: "01" },
  ];

return (
<div className='text-center xl:text-left '>
        <p className='text-48  text-black font-bold mt-2 dark:text-white'>Preeti Singh</p>
        <p className='text-16 text-black font-bold  dark:text-white mx-auto xl:mx-0'>Frontend Developer</p>
        <p className='text-black text-base mx-auto xl:mx-0 mt-2 dark:text-white'>I'm Preeti , a Passionate Student Pursuing a Bachelor of 
        Technology (B.Tech) Degree in Information Technology from Dr. AITD Kanpur. I have Huge Interest in Exploring the 
        Engrossing World Of Technology and Its Applications.
        <br />
        I am Constantly Driven to Enhance my Skills and Knowledge in Programming Algorithms and Software development. </p>

        <div className="flex mt-4 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-[var(--main-color)]">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs text-[var(--main-color)]">{content.text}</span>
          </div>
                ))}
              </div>
              <a href='./src/assets/Document 1.pdf' download>
                <button className="btn1">Download CV</button>
              </a>
            <br />

        {/* language */}
        <div >
          <div className='text-[var(--main-color)] text-center'>Language Skill</div>
          <div className='border-b border-border'></div>
          <div className='text-black text-center dark:text-white'>English, Hindi </div>
        </div>
      </div>

);
};

export default Personal;