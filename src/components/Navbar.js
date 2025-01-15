import React from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Icons for dark mode toggle
import { FaBars, FaQuestionCircle, FaTh } from "react-icons/fa"; // Other icons

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="bg-teal-600 dark:bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Menu Icon */}
          <FaBars size={20} className="cursor-pointer" />
          {/* Logo */}
          <h1 className="text-lg font-bold">Email Platform</h1>
        </div>

        {/* Middle Section: Search Bar */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search email"
            className="w-full p-2 rounded bg-white text-black focus:outline-none"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Help Icon */}
          <FaQuestionCircle size={20} className="cursor-pointer" />
          {/* Apps Icon */}
          <FaTh size={20} className="cursor-pointer" />
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-2 rounded flex items-center">
            {darkMode ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>
          {/* Profile Picture */}
          <img
            src="https://via.placeholder.com/32"
            alt="Profile"
            className="rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
