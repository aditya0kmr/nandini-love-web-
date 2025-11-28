import React from "react";
import "./AnimatedBackground.css";

const hearts = Array.from({ length: 10 });

const AnimatedBackground = () => {
  return (
    <div className="animated-bg">
      {hearts.map((_, index) => (
        <span
          key={index}
          className="animated-bg__heart"
          style={{ "--i": index + 1 }}
        >
          ♥
        </span>
      ))}
    </div>
  );
};

export default AnimatedBackground;
