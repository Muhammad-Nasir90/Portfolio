
import React from 'react'
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="container pt">
        <div className="flex justify-between items-center py-3">

        <img
                        src="./mn.jpeg" 
                        alt="logo" 
                        className="h-14 rounded-full transition-transform duration-300 hover:scale-110" 
                    /> 
                
            <ul className="gap-10 lg:gap-16 hidder md:flex">
                <li className="menulink"><a href='#hero'>Home</a></li>
                <li className="menulink"><a href='#about'>About</a></li>
                <li className="menulink"><a href='#projects'>Projects</a></li>
                <li className="menulink"><a href='#skills'>Skills</a></li>
                <li className="menulink"><a href='#contact'>Contact</a></li>
            </ul>
            <IoMenuSharp className="md:hidder" size={30}/>
        </div>
        
    </div>
  )
}

export default Navbar
