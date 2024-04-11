import React from 'react'
import Image from "next/image";

import Apple from '../../../../public/apple.jpg';


import Androdi from "../../../../public/androdi.jpg";


import Title from './Title';



const AppMobile = () => {
  return (
    
    <section className="app_bg padding_y relative pb-0 overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-0 md:px-8 px-5 text-left z-20 relative">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <div className="app_title">
                <Title
                  title="Get Free 365 Trips App On Online Store"
                  subDescription="Download app now"
                />
                <div className="flex">
                  <div className="mr-5">
                    <a href="">
                    <Image className="img_full rounded-xl" src={Apple} alt="Main Image" wiidth={800} height={800}/>
                    </a>
                  </div>
                  <div className="mr-5">
                    <a href="">
                    <Image className="img_full rounded-xl" src={Androdi} alt="Main Image" wiidth={800} height={800}/>
                    </a>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="app_mobile-img">
                <img
                  src="https://dashdevs.com/images/keen-2-phones.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AppMobile