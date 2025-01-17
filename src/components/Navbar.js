import React, { useState } from "react";
import { FaSun, FaMoon, FaBars, FaQuestionCircle, FaTh } from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="bg-teal-600 dark:bg-gray-900 text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            {/* Menu Icon */}
            <FaBars
              size={20}
              className="cursor-pointer"
              onClick={toggleSidebar}
            />
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
            <FaQuestionCircle
              size={20}
              className="cursor-pointer hidden md:block"
            />
            {/* Apps Icon */}
            <FaTh size={20} className="cursor-pointer hidden md:block" />
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
              className="rounded-full cursor-pointer hidden md:block"
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Folders</h2>
          <ul className="space-y-2">
            <li>
              <button className="w-full text-left p-2 bg-gray-700 hover:bg-gray-600 rounded">
                Inbox
              </button>
            </li>
            <li>
              <button className="w-full text-left p-2 bg-gray-700 hover:bg-gray-600 rounded">
                Sent
              </button>
            </li>
            <li>
              <button className="w-full text-left p-2 bg-gray-700 hover:bg-gray-600 rounded">
                Drafts
              </button>
            </li>
            <li>
              <button className="w-full text-left p-2 bg-gray-700 hover:bg-gray-600 rounded">
                Trash
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

export default Navbar;
