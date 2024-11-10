import React from 'react'
import { MdMail } from "react-icons/md";
import { BsTelephoneForward } from "react-icons/bs";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";


const Contact = () => {
  return (
    <div id='contact' className="pt-32 container" >
        <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
                <h2 className="text-5xl" data-aos="zoom-in-up">Contact me</h2>
                <p className="text-gray-300 text-[18px] pt-2" data-aos="zoom-in-up">I&apos;d love to hear from you! Feel free to reach out for any inquiries or collaborations.
              </p>
                        <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                            <MdMail size={30}/> muhammadnasir8787914@gmail.com
                        </div>
                        <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                            <TiSocialFacebook size={30}/> https://www.facebook.com/profile.php?id=100043292269688                        
                            </div>
                        <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                            <BsTelephoneForward size={30}/> (+92) 311-2840093
                        </div>
                        <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                            <BiLogoLinkedinSquare size={30}/> www.linkedin.com/in/muhammad-nasir-180b9a2bb                        
                            </div>
                            <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                            <FaGithub size={30}/> https://github.com/Muhammad-Nasir90                        
                            </div> 



            </div>
            <div className="space-y-8">
                <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    className="h-[40px] bg-transparent border border-yellow-300" id="name"/>
                </div>
                <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                    className="h-[40px] bg-transparent border border-yellow-300" id="email"/>
                </div>
                <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                    <label htmlFor="message">Message</label>
                    <textarea 
                    className="bg-transparent border border-yellow-300" id="message" rows={8}>
                        </textarea>
                </div>
                <button className="bg-accent p-2 px-6" data-aos="zoom-in-up">Send</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact;
