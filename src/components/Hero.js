import React from "react";

// link
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="bg-yellow-300 shadow-md h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 px-16 -mt-3">
        <div className="container mx-auto flex justify-center items-center h-full">
          {/* text */}
          <div className="flex flex-col">
            <div className="font-seminbold flex items-center uppercase">
              <div className="w-10 h-[3px] bg-red-500 mr-3"></div>New Trend
            </div>
            <h1 className="text-[70px] leading-[1.1] font-light mb-4">
              BE NEW EVERYDAY <br />
              <span className="font-semibold font-cinzel, serif;">MENS FASHION</span>
            </h1>
            <Link
              to={"/home"}
              className="self-start uppercase font-semibold border-b-2 border-black"
            >
              OFFER ZONE
            </Link>
          </div>
          {/* image */}
          <div className="hidden lg:block">
            <img
              src="https://ik.imagekit.io/ut43jnswy/young-traveler-man-with-blue-suitcase-looking-confident-smiling-with-happy-face-ready-travel-standing.jpg?updatedAt=1680269910404"
              alt="main-bg"
              className="w-[900px] h-[580px] mt-16"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
