import React from "react";
import SearchOverlay from "@/app/components/ui/Search";
import Icon from "@mdi/react";

import Logo from "../../../../public/logo.jpg";
import Image from "next/image";

import {
  mdiPhone,
  mdiMapMarker,
  mdiEmailArrowLeft,
  mdiFacebook,
  mdiTwitter,
  mdiInstagram,
} from "@mdi/js";
const Header = () => {
  return (
    <>
      <div className="top_header ml-4 py-2">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <p className=""></p>
          </div>
          <div className="col-span-1">
            <div className="header_top-wrap flex justify-between">
              <ul className="flex">
                <li className="flex pr-4">
                  <span className="pr-1">
                    <Icon path={mdiPhone} size={1} />
                  </span>
                  +977-9807687689
                </li>
                <li className="flex pr-4">
                  <span className="pr-1">
                    <Icon path={mdiMapMarker} size={1} />
                  </span>
                  Dillibazar kathmandu, Nepal
                </li>
                <li className="flex pr-4">
                  <span className="pr-1">
                    <Icon path={mdiEmailArrowLeft} size={1} />
                  </span>
                  kjhasachin@gmail.com
                </li>
              </ul>
              <div className="social_header mr-6">
                <ul className="flex">
                  <li className="mr-4">
                    <span>
                      <Icon path={mdiFacebook} size={1} />
                    </span>
                  </li>
                  <li className="mr-4">
                    <span>
                      <Icon path={mdiTwitter} size={1} />
                    </span>
                  </li>
                  <li className="mr-4">
                    <span>
                      <Icon path={mdiInstagram} size={1} />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <a href="#" className="text-white font-bold text-lg ml-4">
              <Image
                className="logo_img"
                src={Logo}
                alt="Main Image"
                wiidth={150}
                height={150}
              />
            </a>
          </div>
          <div className="col-span-1">
            <nav className="home_nav py-3 flex">
              <div className="container mx-auto flex justify-between items-center">
                <div>
                  <a href="#" className="text-white hover:text-white mr-6">
                    Home
                  </a>
                  <a href="#" className="text-white hover:text-white mr-6">
                    About
                  </a>
                  <a href="#" className="text-white hover:text-white mr-6">
                    Tour Package
                  </a>
                  <a href="#" className="text-white hover:text-white mr-6">
                    Blogs
                  </a>

                  <a href="#" className="text-white hover:text-white">
                    Contact
                  </a>
                </div>
              </div>
              {/* <SearchOverlay /> */}
              <div className="login_img mr-8">
                <img src="https://a0.anyrgb.com/pngimg/1140/162/user-profile-login-avatar-heroes-user-blue-icons-circle-symbol-logo-thumbnail.png" alt="" />
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
