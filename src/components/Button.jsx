import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Reusable navigation button that uses a fixed `to` route
 * and translated `text` for display.
 *
 * @param {string} text - The translated button label.
 * @param {string} to - The path to navigate to.
 */
export function Button({ text, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded mr-4 mt-4 shadow-md"
    >
      {text}
    </button>
  );
}
