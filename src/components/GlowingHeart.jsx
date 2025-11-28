import React from "react";
import "./GlowingHeart.css";

const sizeMap = {
  small: 20,
  medium: 36,
  large: 60,
};

const GlowingHeart = ({ size = "medium", color = "#ff6b9d" }) => {
  const pixelSize = sizeMap[size] ?? sizeMap.medium;

  return (
    <div
      className="glowing-heart"
      style={{ "--heart-color": color, "--heart-size": `${pixelSize}px` }}
      aria-hidden="true"
    >
      ♥
    </div>
  );
};

export default GlowingHeart;
