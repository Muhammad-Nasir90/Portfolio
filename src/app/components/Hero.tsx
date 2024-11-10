
import React from 'react'


const Hero = () => {
  return (
    <div 
  id="hero" 
  className="min-h-screen bg-no-repeat bg-cover bg-left-[100px] bg-top-[100px] bg-[url(/nasir.png)]"
  style={{backgroundSize: "40%"}}  // If custom background size is needed.
>
         

          <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
             <div className="hidder lg:block"></div>
             <div className="text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center">
              <div>
              <p data-aos="zoom-in-up">I&apos;m</p>
                <p data-aos="zoom-in-up">Muhammad</p>
                <p data-aos="zoom-in-up">Nasir</p>


              </div>
             </div>
          </div>
      
    </div>
  )
}

export default Hero;
