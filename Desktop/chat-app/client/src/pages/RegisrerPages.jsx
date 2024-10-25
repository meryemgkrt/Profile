import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const RegisrerPages = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profilePicture: "",
  });
  const [uploadPhoto, setUploadPhoto] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUploadPhoto = (e) => {
    const file = e.target.files[0];
    setUploadPhoto(file);
  };

  const clearUploadPhoto = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setUploadPhoto(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-6 mx-auto bg-white rounded-lg shadow-md md:max-w-md lg:max-w-lg lg:ml-10 lg:mr-auto"
      >
        <h2 className="mb-4 text-2xl font-bold text-center text-[#00848e]">
          Welcome to Chat-App
        </h2>

        {/* Name Input */}
        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="username"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 text-black bg-white border rounded border-primary border-opacity-70 smt-1 focus:outline-none focus:bg-primary focus:bg-opacity-30 focus:text-white focus:border-2"
          />
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 text-black bg-white border rounded border-primary border-opacity-70 smt-1 focus:outline-none focus:bg-primary focus:bg-opacity-30 focus:text-white focus:border-2"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 text-black bg-white border rounded border-primary border-opacity-70 smt-1 focus:outline-none focus:bg-primary focus:bg-opacity-30 focus:text-white focus:border-2"
            required
          />
        </div>

        {/* Photo Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Profile Picture:
          </label>
          <label
            htmlFor="profilePicture"
            className="flex items-center justify-between w-full bg-white border rounded cursor-pointer border-primary h-14 hover:bg-primary hover:bg-opacity-30 focus-within:outline-none focus-within:bg-primary focus-within:bg-opacity-30 hover:border-2"
          >
            <p className="pl-3 text-gray-500">
              {uploadPhoto && uploadPhoto.name
                ? uploadPhoto.name
                : "Upload your photo"}
            </p>
            {uploadPhoto && uploadPhoto.name && (
              <button
                type="button"
                onClick={clearUploadPhoto}
                className="mr-3 text-red-400 hover:text-red-700"
              >
                <IoClose />
              </button>
            )}
          </label>

          <input
            type="file"
            name="profilePicture"
            id="profilePicture"
            className="hidden"
            onChange={handleUploadPhoto}
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full py-2 text-white transition duration-200 rounded bg-primary hover:bg-secondary focus:outline-none"
        >
          Register
        </button>
        <p className="items-center justify-center mt-4 text-center">
          Already have an account?{" "}
          <Link
            className="text-lg font-bold text-secondary hover:underline hover:font-extrabold"
            to={"/login"}
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisrerPages;
