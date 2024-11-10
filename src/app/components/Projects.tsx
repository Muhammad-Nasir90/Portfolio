import React from 'react'
import Heading from "@/app/components/Heading";
import Card from "@/app/components/Card";

const data =[
{

    id:0,
    title: "Static Interactive Resume",
    desc: "A Typescript-based interactive resume built with Html & Css, allowing user showcase their skills dynamically.",
    img:  "/Project_01.JPG",
    tags:["HTML","Node","Css","Typescript"],

},

{

    id:1,
    title: "Key-Code-Explorer",
    desc: "Key-code explorer (using html,css and javascript)",
    img:  "/Project_02.JPG",
    tags:["HTML","Node","Css","Typescript"],

},

{

    id:2,
    title: "Nextjs Project (Figma UI/Ux Design)",
    desc: "This project involves creating a pixel-perfect web page based on a provided Figma design.",
    img:  "/Project_03.JPG",
    tags:["Nextjs","Node","Tailwind Css","Reactjs"],

},

{

    id:3,
    title: "Websie Based on Component Architecture",
    desc: "This project using Next.js and Tailwind CSS, showcasing component architecture, routing, and modern web development principles.",
    img:  "/Project_04.JPG",
    tags:["Nextjs","Node","Tailwind Css","Reactjs"],

},


{

    id:4,
    title: "Nextjs Project (Figma UI/Ux Design)",
    desc: "This project involves creating a pixel-perfect web page based on a provided Figma design.",
    img:  "/Project_05.JPG",
    tags:["Nextjs","Node","Tailwind Css","Reactjs"],

},

{

    id:5,
    title: "Portfolio",
    desc: "Personal Portfolio built with Tailwind CSS, Next.js, and React.",
    img:  "/Project_06.JPG",
    tags:["Nextjs","Node","Tailwind Css","Reactjs"],

},













];

const Projects = () => {
  return (
    <div id="projects" className="pt-32">
        <Heading title="My Projects"/>
        <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {data.map((el)=>(<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
      
    </div>
  )
}

export default Projects;
