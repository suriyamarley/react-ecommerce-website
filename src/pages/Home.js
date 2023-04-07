import React, { useState } from "react";
import fashions from "../components/data";

// import products

import Header from "../components/Header";
import Hero from "../components/Hero";

import Product from "../components/Product";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Home = () => {
  const [myDress] = useState(fashions);




  return (
    <div>
      <Header />
      <Hero />
      <section className="py-16 px-3 lg:px-11 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {myDress.map((dress) => {
              return <Product product={dress} key={dress.id} />;
            })}
          </div>
        </div>
      </section>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Home ;