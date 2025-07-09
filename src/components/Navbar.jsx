import React from "react";

function Navbar({ setTheme }) {
  const [displayTheme, setDisplayTheme] = React.useState("theme1");
  function handleThemeChange(e, currentTheme) {
    e.preventDefault();
    setTheme(currentTheme);
    setDisplayTheme(e.target.innerText);
    console.log(`Theme changed to: ${currentTheme}`);
  }

  const logoText = "</>";

  return (
    <nav className="bg-[var(--bg-color)] shadow-md border-b-2 border-gray-500">
      <div className="w-full mx-3 px-3 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-400">
              {" "}
              {logoText}{" "}
            </span>
            <span className="text-xl font-bold text-white"> CodeCrafty</span>
          </div>

          <div className="relative inline-block text-left group">
            <button className="text-base text-gray-200 px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              {displayTheme || "Select Theme"}
            </button>

            <div className="absolute hidden group-hover:block mt-2 w-45 bg-white border rounded-md shadow-lg z-10">
              <button
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={(e) => {
                  handleThemeChange(e, "atomOneDark");
                }}
              >
                Atom One Dark
              </button>
              <button
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={(e) => {
                  handleThemeChange(e, "tokyoNightStorm");
                }}
              >
                Tokyo Night Storm
              </button>
              <button
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={(e) => {
                  handleThemeChange(e, "tokyoNight");
                }}
              >
                Tokyo Night
              </button>
              <button
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={(e) => {
                  handleThemeChange(e, "dracula");
                }}
              >
                Dracula
              </button>
              <button
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={(e) => {
                  handleThemeChange(e, "theme1");
                }}
              >
                Default
              </button>
            </div>
          </div>
          <div>
            <button className="text-base text-gray-200 px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/jay-mehta16/"
              >
                Jay Mehta
              </a>
            </button>
            <button className="text-base text-gray-200 px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <a target="_blank" href="https://github.com/star-warrior">
                Github
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
