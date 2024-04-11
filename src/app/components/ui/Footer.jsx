import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillTwitterCircle ,AiFillInstagram,} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa6";

import Logo from "../../../../public/logo.jpg";
import Image from "next/image";

import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <>
      <footer className="footer-img relative">
        <div className="mx-auto max-w-7xl lg:px-0 md:px-8 px-5 relative">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-10 gap-6 md:pb-11">
            <div className="col-span-1 pr-10">
              <a href="" className="navbar-logo">
            
                 <Image className="logo_img rounded-md mb-4" src={Logo} alt="Main Image" wiidth={150} height={150}/>
              </a>
              <div className="f-about">
                <p className="text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem unde eum, libero maxime repellendus consectetur excepturi eaque amet 
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="f-title">
                <h5>Quick Links</h5>
              </div>
              <ul className="f-links">
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Service</a>
                </li>
                <li>
                  <a href="">
                   Tour Package
                  </a>
                </li>
                <li>
                  <a href="">
                    Contact
                  </a>
                </li>
              
              </ul>
            </div>
            <div className="col-span-1">
              <div className="f-title">
                <h5>Follow Us</h5>
              </div>
              <ul className="f-social flex">
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                  <BiLogoFacebookCircle style={{color:"#4267b2"}}/>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                
                  <AiFillInstagram style={{color:"#e1306c"}}/>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank">
                  <TfiYoutube style={{color:"red"}}/>
                  </a>
                </li>
                <li>
                  <a
                    className="twitter"
                    href="https://www.twitter.com/"
                    target="_blank"
                  >
               <AiFillTwitterCircle style={{color:"#1c96e8"}}/>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <div className="f-title">
                <h5>Contact Info</h5>
              </div>
              <ul className="f-links">
                <li className="flex items-center">
                <FaLocationArrow />
                 <span className="ml-2"> Dillibazar , Kathmandu ,Nepal</span>
                </li>
                <li className="flex items-center">
                <BsTelephone />
                  <span className="ml-2">+971-989839898</span>
                </li>
                <li className="flex items-center">
                <AiOutlineMail />
                  <span className="ml-2">lorem@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 py-8 footer_bg rounded-tr-lg rounded-tl-lg">
            <div className="col-span-1 text-center">
              <p className="font-normal text-white">
                2024 365 Trips | All rights reserved. || Website by 
                <a href="http://www.archiesoft.com.np" target="_blank">
                  <strong className="text-white font-bold pl-2">
                     Lorem
                  </strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
