"use client";

import Slider from "../components/ui/Slider";
import Title from "@/app/components/ui/Title";

import TourPackage from "@/app/components/ui/TourPackage";
import Process from "@/app/components/ui/Process";
import Blog from "@/app/components/ui/Blog";
import Footer from "@/app/components/ui/Footer";
import AppMobile from "@/app/components/ui/AppMobile";

import BookingForm from "@/app/components/ui/BookingForm";

import Head from 'next/head'; 

const Home = ({ title, subDescription }) => {
  const newTitle = "New Home Page Title";

  const images = ["https://www.lavacarrental.is/media/1/frame-1.jpg"];
  const tourTitle = "Tour Package";
  return (
    <>
      <Head>
        <title>Home page</title> {/* Set the page title */}
        <meta name="description" content="Description of the About page" /> {/* Set the page description */}
        {/* You can add more meta tags as needed */}
      </Head>
      <section className="slider_home relative">
        <Slider images={images} autoplayInterval={5000} />
      </section>
      <section className="padding_y">
        <BookingForm />
      </section>
      <section className="padding_y">
        <Title title={tourTitle} subDescription="package" />
        <TourPackage />
      </section>
      <section className="padding_y bg-gray-100">
        <Title
          title="Make 4 Simple steps to rent a car!"
          subDescription="How to rent"
        />
        <Process />
      </section>
      {/* mobile  */}
      <AppMobile />
      <section className="blog_home padding_y bg-gray-100">
        <Title title="Latest News Posts" subDescription="Our News Updates" />
        <Blog />
      </section>
    </>
  );
};

export default Home;

