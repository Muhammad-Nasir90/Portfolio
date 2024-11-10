
import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className="container pt-32 ">
        <div className="grid md:grid-cols-2 gap-20 items-center">
            <div data-aos="zoom-in-up">
                <h2 className="text-4xl md:text-5xl ">
                    My Skills 
                </h2>
                <p className="text-gray-300 pt-2">I am a passionate and dedicated web developer with expertise in modern web technologies, specializing in building fast, scalable, and responsive web applications.My skill set includes<strong>(Typescript,Css,Node.js,Tailwind Css, React.js ,Nextjs) </strong> With these technologies, I create seamless, high-performance websites that are both functional and visually appealing.</p>
            </div>
            <div className="grid grid-cols-2 text-yellow-400 text-3xl sm:text-4xl">
            <div className="space-y-2">
                <h2 data-aos="zoom-in-up">Typescript</h2>
                <h2 data-aos="zoom-in-up">Next.js</h2>
                <h2 data-aos="zoom-in-up">React.js</h2>
         </div>
           <div className="space-y-2">
                <h2 data-aos="zoom-in-up">Tailwind</h2>
                <h2 data-aos="zoom-in-up">CSS</h2>
                <h2 data-aos="zoom-in-up">Node.js</h2>
           </div>        
        
        </div>
        
         </div>       
    </div>
  );
}

export default Skills;
