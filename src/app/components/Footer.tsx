
import React from 'react'

const Footer = () => {
  return (
    
     <footer className="bg-blue-600 text-black py-4 md:py-1 mt-1 text-center opacity-3">
  <div className="container mx-auto text-center px-4">
    <p className="font-semibold text-sm md:text-base mb-2">
      &copy; {new Date().getFullYear()} My Website. All rights reserved.
    </p>
    <p className="font-semibold text-sm md:text-base mb-2">
      Authored by: Muhammad Nasir
    </p>
    <p className="font-semibold text-sm md:text-base mb-4">
      Follow us on social media:
    </p>
    
    <div className="flex justify-center space-x-4 mb-4">
      <a
        href="https://github.com/Muhammad-Nasir90"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-105"
      >
        <img
          src="./github.png"
          alt="GitHub Logo"
          className="w-10 h-10 md:w-12 md:h-12" // Adjusted size for responsiveness
        />
      </a>
      <a
        href="https://www.linkedin.com/in/muhammad-nasir-180b9a2bb"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-105 "
      >
        <img
          src="./Linkedin.png"
          alt="LinkedIn Logo"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full" // Rounded icon for LinkedIn and adjustable size
        />
      </a>
    </div>
    
    {/* Optional: Add a small text or a quick note */}
    <p className="text-xs md:text-sm mt-4">
      Designed with ❤️ by Muhammad Nasir
    </p>
  </div>
</footer>
 
    
  )
}

export default Footer;
