import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";

// import cart context
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // destructure product
  const { id, image, title, category, price } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 bg-white relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[700px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-150 transition duration-300 p-img"
              src={image}
              alt={title}
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blue-500 p-2">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-10 h-10 bg-gray-800 hover:bg-slate-700 transition-all duration-300">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-10 h-10 bg-white flex justify-center items-center text-primary drop-shadow-xl hover:bg-slate-200 transition-all duration-300"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div>
          <p className="font-semibold inline-block bg-blue-600 text-white px-1 py-1 rounded-md">
            $ {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
