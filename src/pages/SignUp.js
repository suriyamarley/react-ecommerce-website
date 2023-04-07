import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// auth context
import { UserAuth } from "../contexts/AuthContext";
import SocialMedia from "../components/SocialMedia";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full h-screen  bg-white">
          <div className="fixed w-full px-4 py-16 z-50 ">
            <div className="max-w-[450px] h-[600px] mx-auto bg-blue-800 text-white rounded-md">
              <div className="max-w-[320px] mx-auto py-16 px-2 md:px-0">
                <div className="logo-login text-center ">
                  <img
                    src="https://ik.imagekit.io/ut43jnswy/WhatsApp_Image_2023-04-02_at_20.33.19.jpg?updatedAt=1680492929641"
                    alt="logo"
                    className="w-[100px] h-[96px] mx-auto rounded-full border-solid border-2 border-white-600"
                  />
                </div>
                <h1 className="text-3xl font-bold">Sign Up</h1>
                {error ? <small className="text-red-500">{error}</small> : null}
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col py-4"
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 my-2 bg-white rounded text-red-800"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    required
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-3 my-2 bg-white rounded text-red-800"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-yellow-600 py-3 my-6 rounded font-semibold hover:bg-yellow-400 transition-all duration-300"
                  >
                    Sign Up
                  </button>
                  <div className=" flex justify-between items-center font-medium mb-3 text-blue-500">
                    <p className="mr-2">
                      {" "}
                      <input type="checkbox" /> Remember me ?
                    </p>
                    <p>Need Help ?</p>
                  </div>
                  <p>
                    <span className="text-red-400">
                      Already have an account ?
                    </span>
                    <Link to="/signin"> Sign In</Link>{" "}
                  </p>
                </form>
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
