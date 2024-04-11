import React from "react";
import { Button } from "@/app/components/ui/button";
const TourPackage = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl lg:px-0 md:px-8 px-5 text-center">
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-1">
            <div className="div_card">
              <div className="card_img">
                <img className="rounded-md"
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/00/48/3e/hotel-country-villa.jpg?w=600&h=400&s=1"
                  alt=""
                />
              </div>
              <div className="card_content bg-black">
                <div className="tour_price">
                  <h4 className="text-white">
                    <b> Rs:800</b> <small>2 DAY</small>
                  </h4>
                </div>
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-[0.1rem] text-white mb-4">
                  Nagarkot
                </h2>
                <Button
                  className=" hover:bg-red-800 text-white rounded-none py-6"
                  style={{ width: "200px",backgroundColor:"#ff001f" }}
                >
                  View
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="div_card">
              <div className="card_img">
                <img className="rounded-md"
                  src="https://pia.caanepal.gov.np/uploads/training/1672122117.jpg"
                  alt=""
                />
              </div>
              <div className="card_content bg-black">
                <div className="tour_price">
                  <h4 className="text-white">
                    <b> Rs:600 </b> <small> 1 DAY</small>
                  </h4>
                </div>
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-[0.1rem] text-white mb-4">
                David Falls
                </h2>
                <Button
                  className=" hover:bg-red-800 text-white rounded-none py-6"
                  style={{ width: "200px",backgroundColor:"#ff001f" }}
                >
                  View
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="div_card">
              <div className="card_img">
                <img className="rounded-md"
                  src="https://c8.alamy.com/compfr/f4kxxg/temple-de-muktinath-mustang-au-nepal-f4kxxg.jpg"
                  alt=""
                />
              </div>
              <div className="card_content bg-black">
                <div className="tour_price">
                  <h4 className="text-white">
                    <b> Rs:800</b> <small>2 DAY</small>
                  </h4>
                </div>
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-[0.1rem] text-white mb-4">
                Muktinath Temple 
                </h2>
                <Button
                  className=" hover:bg-red-800 text-white rounded-none py-6"
                  style={{ width: "200px",backgroundColor:"#ff001f" }}
                >
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourPackage;
