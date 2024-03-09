import { useState } from "react";
import { Link } from "react-router-dom";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-center px-2 py-2 pb-2 bg-white text-sm font-medium text-gray-700"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="22"
            height="22"
            viewBox="0 0 50 50">
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu">
          <div className="" role="none">
            <Link
              to="/signin"
              onClick={handleOptionClick}
              className="block px-4 py-2 text-sm text-gray-700 hover:text-red-500"
              role="menuitem">
              Logout
            </Link>
            <Link
              to="/"
              onClick={handleOptionClick}
              className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-500"
              role="menuitem">
              Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
