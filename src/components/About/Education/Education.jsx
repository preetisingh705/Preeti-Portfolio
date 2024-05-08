import React from 'react';
import { GraduationCap, Briefcase} from 'lucide-react';
import '../../../index.css';
import {motion} from 'framer-motion';
import { fadeIn } from '../../Varients';

const qualificationData = [
    {
      title: 'education',
      data:[
        {
          university: '',
          qualification: 'Bachelor of Science',
          years: '2025 - 2022',
        },
        {
          university: 'Another University',
          qualification: 'Diploma in Computer Science',
          years: '2019 - 2022',
        },
        {
          university: 'Yet Another University',
          qualification: 'High Scool',
          years: '2016 - 2018',
        },
      ],
    },
    {
      title: 'experience',
      data:[
        {
          company: 'Abc Inc.',
          role: 'Software Engineer',
          years: '2018 - 2020',

        },
        {
          company: 'XYZ Corporation',
          role: 'Event oragnizer',
          years: '2019 - 2022',
          
        },
        {
          company: 'Yet Another University',
          role: 'High Scool',
          years: '2016 - 2018',
          
        },
      ],
    },
  ];
  
  

function Education(){
    const getData = (arr, title) =>{
        return arr.find((item) => item.title === title);
      };
    
      const [value, setValue] = React.useState(0);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      
    return (
        <div>  
        <h3 className='h3 mb-4 lg:mx-56 items-center justify-center xl:text-left text-black dark:text-white'>My Awesome Journey</h3>
          
        <div className='grid md:grid-cols-2 gap-y-8'>
    
        
    
        {/* Education */}
        <div className='flex flex-col gap-y-2'>
          <div className='flex gap-x-4 items-center text-[22px] text-[var(--main-color)]'>
            <GraduationCap size={28} />
            <h4 className='capitalize font-medium'>
              {getData(qualificationData,'education').title}
            </h4>
          </div>
    
           {/* list */}
        <div className='flex flex-col'>
                  
              <div className="mt-2 pb-2 relative  before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-4  sm:before:bottom-2 before:w-1 before:bg-black dark:before:bg-white">
              <div className="pl-24   before:w-4 before:h-4 before:bg-gradient-to-t before:from-[var(--main-color)] before:to-[var(--main-color)] before:absolute before:rounded-full before:left-[58px]">
              <div 
              className='border-slate-200 border-2 rounded-xl p-2 h-[92px] w-[210px] lg:w-[260px] tab-content'>
              <h3 className="absolute left-2 text-lg font-semibold text-black dark:text-white">2025</h3>
              <p className='text-black font-semibold text-xl leading-none'>
                    Dr. AITD Kanpur
                      </p>
                      <p className='text-black text-lg leading-2 text-muted-foreground'>
                      Bachelor of Technology
                      </p>
                      <p className='text-black text-lg leading-2 text-muted-foreground mb-2'>
                      8.33 CGPA
                      </p>
              </div>
              </div>

              <div className="pl-24 mt-4 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-[var(--main-color)] before:to-[var(--main-color)] before:absolute before:rounded-full before:left-[58px]">
              <div className='border-slate-200 border-2 rounded-xl p-2 h-[92px] w-[210px] lg:w-[260px] tab-content'>
              <h3 className="absolute left-2 text-lg font-semibold text-black dark:text-white">2022</h3>
              <p className='text-black font-semibold text-xl leading-none items-center '>
                    G.G.P. GKP
                      </p>
                      <p className='text-black text-lg leading-2 text-muted-foreground '>
                      Diploma In Cse
                      </p>
                      <p className='text-black text-lg leading-2 text-muted-foreground mb-2'>
                      82.43%
                      </p>
                      </div>
              </div>
              
              <div className="pl-24 mt-4 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-[var(--main-color)] before:to-[var(--main-color)] before:absolute before:rounded-full before:left-[58px]">
              <div className='border-slate-200 border-2 rounded-xl p-2 h-[92px] w-[210px] lg:w-[260px] tab-content'>

              <h3 className="absolute left-2 text-lg font-semibold text-black dark:text-white">2018</h3>
              <p className='text-black font-semibold text-xl leading-none items-center '>
                    A.I.C Deoria
                      </p>
                      <p className='text-black text-lg leading-2 text-muted-foreground '>
                      High School
                      </p>
                      <p className='text-black text-lg leading-2 text-muted-foreground'>
                      87.06%
                      </p>
                      </div>
              </div>
              </div>
                  
        </div>
        </div>

        {/* Experience */}
        <div className='flex flex-col gap-y-6'>
          <div className='flex gap-x-4 items-center text-[22px] text-[var(--main-color)]'>
            <Briefcase />
            <h4 className='capitalize font-medium'>
              {getData(qualificationData,'experience').title}
            </h4>
          </div>
    
          {/* list */}
          <div className='flex flex-col gap-y-8'>
              <div className="mt-4 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-8 sm:before:bottom-2 before:w-1 before:bg-black dark:before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-[var(--main-color)] before:to-[var(--main-color)] before:absolute before:rounded-full before:left-[58px]">
              <div className='border-slate-200 border-2 rounded-xl p-2 h-[100px] w-[210px] lg:w-[250px] tab-content'>

                <h3 className="absolute left-2 text-lg font-semibold text-black dark:text-white">2023</h3>
                <p className='text-black'>
                DR. AITD Kanpur <br />
                Debate Club Event Oragnizer 

                </p>
                </div>
              </div>
              
                  </div>
            
        </div>
    
        </div>
    
      </div>
    
      </div>
    );
};

export default Education;