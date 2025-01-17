import React, { useContext } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import registerImage from "../../assets/register.png"; // Replace with your image path
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const imageUrl = e.target.url.value;
    const form = { name, email, password, imageUrl };

    createUser(email, password)
      .then((res) => {
        // Show SweetAlert on successful registration
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have been successfully registered!",
        });
        e.target.reset(); // Reset the form
      })
      .catch((err) => {
        // Show SweetAlert on error
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: err.message || "Something went wrong!",
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl flex flex-col lg:flex-row">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Type here"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="Type here"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                required
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Photo URL
              </label>
              <input
                type="url"
                required
                name="url"
                placeholder="Enter your Photo"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
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
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">Or sign up with</p>
            <div className="flex items-center justify-center space-x-4 mt-2">
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                <i className="fab fa-facebook"></i>
              </button>
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                <i className="fab fa-google"></i>
              </button>
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                <i className="fab fa-apple"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center p-8 bg-gray-50 rounded-r-lg">
          <img src={registerImage} alt="Illustration" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Register;
