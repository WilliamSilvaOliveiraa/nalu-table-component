import React from "react";

import clsx from "clsx";
import "./style.css";

const animations = {
  pulse: "animate-pulse",
  bounce: "animate-bounce",
  spin: "animate-spin",
  wave: "animate-wave",
  fade: "animate-fade",
  scale: "animate-scale",
  undulate: "animate-undulate",
};

/**
 * Animated Dots component
 * @param {Object} props - The component props
 * @param {string} [props.animation='pulse'] - The animation to apply to the dots
 * @param {('bg-gray-500'|'bg-red-500'|'bg-blue-500'|'bg-green-500'|'bg-yellow-500'|'bg-purple-500')} [props.dotColor='bg-gray-500'] - The background color of the dots
 * @returns {JSX.Element} - The Dots component
 */
const Dots = ({ animation = "undulate", dotColor = "bg-gray-500" }) => {
  return (
    <div
      className={clsx(
        "flex items-center space-x-2 pt-1",
        animations[animation]
      )}
    >
      <div className={clsx("h-2 w-2 rounded-full", dotColor)}></div>
      <div className={clsx("h-2 w-2 rounded-full", dotColor)}></div>
      <div className={clsx("h-2 w-2 rounded-full", dotColor)}></div>
    </div>
  );
};

export default Dots;
