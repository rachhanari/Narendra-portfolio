import {motion} from "framer-motion"
import { useAtom } from "jotai"
import { currentProjectAtom, projects } from "./Projects"
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import EmailFrom from "./EmailFrom";
import { PiLinkedinLogo } from "react-icons/pi";
import { ImGithub } from "react-icons/im";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { useState } from "react";


const Section = ({children,mobileTop})=>{
    
    return (
    <motion.section 
    className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start 
    ${mobileTop ? "justify-start md:justify-center" :"justify-center"}
    `}
    initial = {{
        opacity:0,
        y:50
    }}
    whileInView={{
        opacity:1,
        y:0,
        transition:{
            duration:1,
            delay:0.6
        }
    }}
    >       
        {children}
    </motion.section>)

}


const Interface = ({setSection}) => {
  return (
    <div className="flex flex-col items-center  w-screen">
     <AboutSection setSection = {setSection}/>
     <SkillSection/>
    <ProjectSection/>
     <ContractSection />


    </div>
  )
}
export default Interface

const AboutSection = ({setSection})=>{
    return(
     <Section mobileTop >
         <h1 className="text-4xl md:text-6xl flex flex-col md:gap-5  text-white font-extrabold leading-snug">Hi, I'm
            <br />
            <span className="bg-gray-400  text-gray-900 px-1 italic">Narendra Rachha</span>
         </h1>

         <motion.p className="text-lg text-yellow-600 mt-4"
            initial={{
                opacity:0,
                y:25
            }}
            whileInView={{
                opacity:1,
                y:0
            }}
            transition={{
                duration:1,
                delay:1.5
            }}
         >I am a frontend developer
         <br />
         with basic knowledge of backend development
         </motion.p>
         <motion.button
         onClick={()=> setSection(3)}
          className="bg-indigo-800 text-white py-4 px-8 rounded-lg font-bold text-lg mt-4 md:mt-16"
          initial={{
            opacity:0,
            y:25,
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:1,
            delay:2
          }}
          >Contact me</motion.button>

     </Section>

    ) 
 }

 const skills = [
    {
        title:"C",
        level:70
    },
    {
        title:"C++",
        level:60
    },
    {
        title:"React-Native",
        level:40
    },
    {
        title:"Java Script",
        level:80
    },
    {
        title:"Python",
        level:30 
    },
    {
        title:"HTML5",
        level:80
    },
    {
        title:"CSS3",
        level:70
    },
    {
        title:"NodeJS",
        level:70
    },
    {
        title:"ReactJs",
        level:90
    },
    
    {
        title:"Java",
        level:50
    }
 ]

 const SkillSection = ()=>{
    return(
        <Section>
            <motion.div
            className="w-full"
            whileInView={"visible"}
            >
                <h2 className="text-3xl md:text-5xl  font-bold">Skills</h2>
                <div className="mt-8 space-y-4">
                    {skills.map((skill,index) => (
                        <div className="w-full md:w-64" key={index} >
                            <motion.h3 className="text-lg md:text-xl font-bold text-gray-800"
                                        initial={{
                                            opacity:0
                                        }}
                                        variants={{
                                            visible:{
                                                opacity:1,
                                                transition:{
                                                    duration:1,
                                                    delay:1 + index *0.2,
                                                }
                                            }
                                        }}

                            >
                                {skill.title}</motion.h3>


                            <div className="h-2 w-full bg-gray-700 rounded-full mt-2">
                               <motion.div  className="h-full bg-indigo-500 "
                                style={{width:`${skill.level}%`}}
                                initial={{
                                    scaleX:0,
                                    originX:0
                                }}
                                variants={{
                                    visible:{
                                        scaleX:1,
                                        transition:{
                                            duration:1,
                                            delay:1 + index *0.2,
                                    }
                                    }      
                                }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
      </Section>
    )
 };



 const ProjectSection = ()=>{

    const [currentProject , setCurrentProject] = useAtom(currentProjectAtom);

    const nextProject = ()=>{
        setCurrentProject((currentProject + 1 ) % projects.length);
    }

    const previousProject = ()=>{
        setCurrentProject((currentProject - 1 ) % projects.length);
    }
    return (
        <Section>
            <div className="flex w-full h-full gap-8 items-center justify-center">
            <button className="hover:text-indigo-600 text-gray-400 transition-colors text-4xl" onClick={previousProject}> <GrLinkPrevious /> </button>
            <h2 className="text-3xl md:text-5xll text-gray-300 font-bold">Projects</h2>
            <button className="hover:text-indigo-600 text-gray-400 transition-colors text-4xl"
            onClick={nextProject}>
                <GrLinkNext />
            </button>
        </div>
        </Section>
    )
 };


 const ContractSection = ()=>{
    
    return(
        <Section>
            <EmailFrom />
            <footer className="flex m-5">
                
            <div className="relative group">
                <a
                    href="https://drive.google.com/file/d/1nlEZF5sJe4cImGwD4PFYNRrO4rHMdS4T/view?usp=sharing"
                    target="_blank">
                    <img src="/Images/cv.png" alt="Resume" className="cursor-pointer w-10 h-8 mr-4 transition duration-300 ease-in-out transform group-hover:grayscale" />
                </a>
                <div
                    className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <p className="p-2">Click to view my resume</p>
                </div>
            </div>
            <a href="https://www.linkedin.com/in/rachha-narendra-05a307288/" target="_blank">
            <PiLinkedinLogo  className="text-gray-400 text-3xl mr-4 cursor-pointer "/>
            </a>
            <a href="https://github.com/rachhanari" target="_blank">
            <ImGithub className="text-gray-400 text-3xl mr-4 cursor-pointer "/>
            </a>
            
            <a href="https://www.instagram.com/rachha_narendra_/" target="_blank">
            <BiLogoInstagramAlt className="text-gray-400 text-3xl mr-4 cursor-pointer "/>
            </a>

    

            <a href="https://wa.me/7499720725" target="_blank">
            <FaWhatsappSquare  className="text-gray-400 text-3xl mr-4 cursor-pointer"/>
            </a>


            </footer>
            

      </Section>
    )
 };




