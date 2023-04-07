import React, { useContext } from "react";
import { useParams } from "react-router-dom";
// cart conetext
import { CartContext } from "../contexts/CartContext";
// product context
// import { ProductContext } from "../contexts/ProductContext";
// icon
import { FaShoppingCart } from "react-icons/fa";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import fashion from "../components/data";

const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  // get the single product based on the Id
  const product = fashion.find((dress) => {
    return dress.id === parseInt(id);
  });

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  // destructure products
  const { title, price, description, image } = product;
  return (
    <>
      <Header />
      <section className="pt-20 lg:pt-40 pb-12 lg:py-32 h-screen flex bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            {/* image */}
            <div className="flex flex-1 justify-center items-center mb-6 lg:mb-0 ">
              <img
                className="max-w-[200px] h-[200px] lg:max-w-sm md:h-[350px] p-img"
                src={image}
                alt={title}
              />
            </div>
            {/* text */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-[16px] font-medium mb-2 max-w-[450px] md:text-[25px] mx-auto lg:mx-0">
                {title}
              </h2>
              <div>
                <div className="text-md md:text-xl font-medium mb-4 bg-slate-900 text-white px-4 py-2 rounded-md d-in inline-block">
                  {" "}
                  $ {price}
                </div>
              </div>
              <p className="mb-8">{description}</p>
              <div className="text-center justify-center flex lg:justify-start">
                <button
                  className="bg-gray-600 py-3 px-8 text-white rounded-md hover:bg-gray-800 transition-all duration-300 flex justify-center items-center gap-2"
                  onClick={() => addToCart(product, product.id)}
                >
                  Add to cart
                  <div>
                    {" "}
                    <FaShoppingCart />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Sidebar />
      <Footer />
    </>
  );
};

export default ProductDetails;
