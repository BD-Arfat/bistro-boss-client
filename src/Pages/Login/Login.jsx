import React from "react";
import login from "../../assets/login";

const Login = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col lg:flex-row w-full max-w-5xl">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Type here"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Type here"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition"
              >
                Sign Up
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Already registered?{" "}
              <a href="/login" className="text-yellow-500 hover:underline">
                Go to log in
              </a>
            </p>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">Or sign up with</p>
              <div className="flex items-center justify-center mt-2 space-x-4">
                <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                  <i className="fab fa-google"></i>
                </button>
                <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                  <i className="fab fa-facebook"></i>
                </button>
                <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                  <i className="fab fa-apple"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center p-6">
            <img
              src={login} // Replace this with your image URL
              alt="Illustration"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
