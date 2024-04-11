import { Button } from "@/app/components/ui/button";
import { SlCalender } from "react-icons/sl";
const Blog = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl lg:px-0 md:px-8 px-5 text-center mt-11">
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-1">
            <div className="blog_main relative">
              <div className="blog_main-img relative">
                <img
                className="object-cover w-full"
                  src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2021/11/GettyImages-1065238506.jpg"
                  alt=""
                />
              </div>
              <div className="blog_main-content text-left p-10 absolute bottom-0 left-0 z-20">
                <h4 className="text-red-500  text-lg font-semibold pb-0 mb-0">
                  4-10-2024
                </h4>
                <h2 class="scroll-m-20 text-2xl font-semibold tracking-[0.1rem]  pb-5 pt-2 text-white">
                  Lorem ipsum dolor sit adipisicing elit. Laudantium quis amet
                  magn
                </h2>
                <Button
                  className=" hover:bg-red-800 text-white rounded-none py-6"
                  style={{ width: "150px", backgroundColor: "#ff001f" }}
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-1 ">
              <div className="col-span-1">
                <div className="blog_sub flex">
                  <div className="blog_img ">
                    <img
                    className="object-cover w-full"
                      src="https://s.yimg.com/ny/api/res/1.2/EYL4Su7hJAXD_C.f80Gxcg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNQ--/https://media.zenfs.com/en/insidermonkey.com/e0313f1b5fbe19d081b24c0ac3d58947"
                      alt=""
                    />
                  </div>
                  <div className="blog_sub-text text-left p-7 bg-gray-200">
                    <h3 className="text-md scroll-m-20 font-semibold  mb-2">
                      365 Days of Adventure: A Yearlong Journey Through Travel
                      Tales and Tips
                    </h3>
                    <h4 className="flex  mt-3">
                      <SlCalender /> <span className="pl-2">4-10-2024</span>{" "}
                    </h4>
                    <Button
                      variant="link"
                      style={{ paddingLeft: "0px", color: "red" }}
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-span-1 mt-8">
                <div className="blog_sub flex">
                  <div className="blog_img ">
                    <img
                    className="object-cover w-full"
                      src="https://cdn.britannica.com/36/162636-131-E4AA93A0/Colosseum-Rome-Italy.jpg"
                      alt=""
                    />
                  </div>
                  <div className="blog_sub-text text-left p-7 bg-gray-200">
                    <h3 className="text-md scroll-m-20 font-semibold  mb-2">
                    365 Degrees of Discovery: A Daily Exploration into Travel Wonders
                    </h3>
                    <h4 className="flex  mt-3">
                      <SlCalender /> <span className="pl-2">4-10-2024</span>{" "}
                    </h4>
                    <Button
                      variant="link"
                      style={{ paddingLeft: "0px", color: "red" }}
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
