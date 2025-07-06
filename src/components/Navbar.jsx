import React from "react";

function Navbar() {
  function closeMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
  }

  const logoText = "</>";

  return (
    <nav className="bg-gray-700 shadow-md border-b-2 border-gray-500">
      <div className="max-w-7xl mx-auto px-3 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-400">
              {" "}
              {logoText}{" "}
            </span>
            <span className="text-2xl font-bold text-white"> CodeCrafty</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-200 hover:text-blue-400">
              Home
            </a>
            <a href="#" className="text-gray-200 hover:text-blue-400">
              About
            </a>
            <a href="#" className="text-gray-200 hover:text-blue-400">
              Services
            </a>
            <a href="#" className="text-gray-200 hover:text-blue-400">
              Contact
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              id="menu-btn"
              className="text-gray-200 hover:text-blue-400 focus:outline-none"
              onClick={closeMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className="md:hidden hidden px-4 pt-2 pb-4 space-y-2"
      >
        <a href="#" className="block text-gray-200 hover:text-blue-600">
          Home
        </a>
        <a href="#" className="block text-gray-200 hover:text-blue-600">
          About
        </a>
        <a href="#" className="block text-gray-200 hover:text-blue-600">
          Services
        </a>
        <a href="#" className="block text-gray-200 hover:text-blue-600">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
