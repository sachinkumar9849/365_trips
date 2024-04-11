import React from "react";
import { Button } from "@/app/components/ui/button";
const Process = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl lg:px-0 md:px-8 px-5 text-center mt-11">
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-1">
            <div className="process_wrap relative flex flex-col align-items-center justify-content-center rounded-full bg-white">
              <div className="process_icon mb-2">
                <img
                  className="rounded-md"
                  src="https://cdn-icons-png.flaticon.com/512/6216/6216268.png"
                  alt=""
                />
              </div>
              <div className="process_text">
                <div className="tour_price">
                  <h4 className="text-white">
                    <b>1</b>
                  </h4>
                </div>
                <h3 className="scroll-m-20 font-semibold tracking-[0.1rem] mb-2">
                  Date & Location
                </h3>
                <small>
                  Lorem ipsum, dolor sit ametculpa ipsa, Nulla, tempora
                  architecto.
                </small>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="process_wrap relative flex flex-col align-items-center justify-content-center rounded-full bg-white">
              <div className="process_icon mb-2">
                <img
                  className="rounded-md"
                  src="https://static.thenounproject.com/png/4460142-200.png"
                  alt=""
                />
              </div>
              <div className="process_text">
                <div className="tour_price">
                  <h4 className="text-white">
                    <b>2</b>
                  </h4>
                </div>
                <h3 className="scroll-m-20 font-semibold tracking-[0.1rem] mb-2">
                  Choose A Car
                </h3>
                <small>
                  Lorem ipsum, dolor sit ametculpa ipsa, Nulla, tempora
                  architecto.
                </small>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="process_wrap relative flex flex-col align-items-center justify-content-center rounded-full bg-white">
              <div className="process_icon mb-2">
                <img
                  className="rounded-md"
                  src="https://cdn-icons-png.flaticon.com/512/5110/5110947.png"
                  alt=""
                />
              </div>
              <div className="process_text">
                <div className="tour_price">
                  <h4 className="text-white">
                    <b>3</b>
                  </h4>
                </div>
                <h3 className="scroll-m-20 font-semibold tracking-[0.1rem] mb-2">
                  Make A Booking
                </h3>
                <small>
                  Lorem ipsum, dolor sit ametculpa ipsa, Nulla, tempora
                  architecto.
                </small>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="process_wrap relative flex flex-col align-items-center justify-content-center rounded-full bg-white">
              <div className="process_icon mb-2">
                <img
                  className="rounded-md"
                  src="https://cdn4.iconfinder.com/data/icons/sustainability/48/icon0009_carpool-512.png"
                  alt=""
                />
              </div>
              <div className="process_text">
                <div className="tour_price">
                  <h4 className="text-white">
                    <b>4</b>
                  </h4>
                </div>
                <h3 className="scroll-m-20 font-semibold tracking-[0.1rem] mb-2">
                  Enjoy Your Ride!
                </h3>
                <small>
                  Lorem ipsum, dolor sit ametculpa ipsa, Nulla, tempora
                  architecto.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
