import { FaCss3, FaHtml5, FaJsSquare, FaReact, FaLaptopCode ,FaTools,FaGithubSquare, FaGithub,FaDatabase } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { PiCodeFill } from "react-icons/pi";
import { BsMicrosoftTeams } from "react-icons/bs";
import { SiTailwindcss, SiExpress, SiPython, SiVisualstudio, SiFigma,SiCanva ,SiCplusplus} from "react-icons/si";
import { FaNodeJs, FaJava } from "react-icons/fa6";
import { RiTeamFill,RiPresentationFill,RiAndroidFill } from "react-icons/ri";
import { MdCoPresent } from "react-icons/md";
import { BiDonateHeart, BiSolidDonateHeart } from "react-icons/bi";
import { FaPeopleArrows } from "react-icons/fa6";





export const SKILLS =[
{
    title: "Fronted",
    icon: <FaLaptopCode className="lg:text-5xl text-xl text-[var(--main-color)]" />,
    skills: [
        { skill:"Html", percentage: "90%", iconh: <FaHtml5 className=" text-4xl " />, stroke: 385 , strokeoff: 88},
        { skill: "CSS3", percentage: "80%", iconh: <FaCss3 className="text-4xl " />,stroke: 385 , strokeoff: 110 },
        { skill: "JavaScript", percentage: "70%", iconh: <FaJsSquare className="text-4xl " />,stroke: 385 , strokeoff: 140},
        { skill: "React.js", percentage: "60%", iconh: <FaReact className="text-4xl" />,stroke: 385 , strokeoff: 170},
        { skill: "Tailwind", percentage: "75%", iconh: <SiTailwindcss className="text-4xl " />,stroke: 385 , strokeoff: 125},
    ],
},
{
    title: "Backend",
    icon: <TbWorldCode className="lg:text-5xl text-xl text-[var(--main-color)]" />,
    skills: [
        { skill: "Node.js", percentage: "50%" , iconh: <FaNodeJs className="text-5xl" />,stroke: 385 , strokeoff:220},
        { skill: "Express.js", percentage: "50%" , iconh: <SiExpress className="text-5xl" />,stroke: 385 , strokeoff: 220},
        
    ],
},
{
    title: "Programming Language",
    icon: <PiCodeFill className="lg:text-5xl text-xl text-[var(--main-color)]" />,
    skills: [
        { skill: "Java", percentage: "70%", iconh: <FaJava className="text-4xl " />,stroke: 385 , strokeoff: 140},
        { skill: "C++", percentage: "80%", iconh: <SiCplusplus className="text-4xl " />,stroke: 385 , strokeoff: 110},
        { skill: "Python", percentage: "85%", iconh: <SiPython className="text-4xl " />,stroke: 385 , strokeoff: 95},
        { skill: "DSA", percentage: "90%", iconh: <FaDatabase className="text-4xl"  />,stroke: 385 , strokeoff: 80},
    ],
},
{
    title: "Tools",
    icon: <FaTools className="lg:text-4xl text-xl text-[var(--main-color)]" />,
    skills: [
        { skill: "Git & Github", percentage: "85%", iconh: <FaGithubSquare className=" text-4xl" />,stroke: 385 , strokeoff: 95},
        { skill: "Visual Studio", percentage: "75%", iconh: <SiVisualstudio className=" text-4xl" />,stroke: 385 , strokeoff: 125},
        { skill: "Figma", percentage: "70%" ,iconh: <SiFigma className=" text-4xl" />,stroke: 385, strokeoff: 140},
        { skill: "Canva", percentage: "80%", iconh: <SiCanva className=" text-4xl" />,stroke: 385 , strokeoff: 110},
        { skill: "Android Studio", percentage: "70%", iconh: <RiAndroidFill className="text-4xl" />,stroke: 385 , strokeoff: 140},
    ],
},
{
    title: "Soft Skills",
    icon: <BiSolidDonateHeart className="lg:text-4xl text-xl text-[var(--main-color)]" />,
    skills: [
        { skill: "Communication", percentage: "60%", iconh: <FaPeopleArrows className="text-4xl" />,stroke: 385 , strokeoff: 170},
        { skill: "Team Work", percentage: "80%", iconh: <RiTeamFill className="text-4xl" />,stroke: 385 , strokeoff: 110},
        { skill: "Enthusiast", percentage: "75%", iconh: <RiPresentationFill className="text-4xl" />,stroke: 385 , strokeoff: 125},
        
    ],
},
];