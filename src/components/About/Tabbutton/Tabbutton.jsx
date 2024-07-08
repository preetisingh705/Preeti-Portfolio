import React from 'react';
import {User2 , MailIcon, HomeIcon, PhoneCall , GraduationCap, Calendar, Briefcase} from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';
import './Tabs.css';
import '../../../index.css';
import Skill from '../Skill/Skill';
import Personal from '../Personal/Personal';
import Education from '../Education/Education';


function Tabbutton() {

    return (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">

    {/* List */}
    <Tabs.List className="TabsList inline-flex items-center justify-center rounded-[30px] bg-muted p-1 border-black
    text-muted-foreground dark:md:bg-secondary w-full xl:max-w-full xl:border dark:border-[#6751b9] dark:bg-none" 
    aria-label="Personal" >

      <Tabs.Trigger 
      className="TabsTrigger inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 text-black
      py-1.5 text-lg font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white
      data-[state=active]:bg-[var(--main-color)] data-[state=active]:text-white data-[state=active]:shadow-sm h-[48px] " 
      value="tab1">
        Personal
      </Tabs.Trigger>
      <Tabs.Trigger  className="TabsTrigger inline-flex items-center justify-center whitespace-nowrap rounded-full px-3
      py-1.5 text-black font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  bg-white
      data-[state=active]:bg-[var(--main-color)] data-[state=active]:text-white data-[state=active]:shadow-sm h-[48px] "  value="tab2">
        Education
      </Tabs.Trigger>
      <Tabs.Trigger  className="TabsTrigger inline-flex items-center justify-center whitespace-nowrap rounded-full px-3
      py-1.5 text-black font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  bg-white
      data-[state=active]:bg-[var(--main-color)] data-[state=active]:text-white data-[state=active]:shadow-sm h-[48px] "  value="tab3">
        Skills
      </Tabs.Trigger>
    </Tabs.List>


  <div className='text-lg mt-2 xl:mt-2 '>

    {/* Content Personal Info */}
    <Tabs.Content className=" tabbg TabsContent ring-offset-background focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-ring focus-visible:ring-offset-2 p-4 rounded-xl border dark:border-[#6751b9] dark:bg-none" 
    value="tab1">
      <Personal />
      
    </Tabs.Content>

    {/* Content Qualification */}
    <Tabs.Content className="tabbg TabsContent ring-offset-background focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-ring focus-visible:ring-offset-2 p-4  rounded-xl border dark:border-[#6751b9] dark:bg-none" value="tab2">
     <Education />
    </Tabs.Content>

    {/* Skill Content */}
    <Tabs.Content className="TabsContent ring-offset-background focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-ring focus-visible:ring-offset-2 p-4" value="tab3">

            <Skill />
      
   
    </Tabs.Content>

  </div>

  </Tabs.Root>
    );
};

export default Tabbutton;