import React from "react";
import "./HomePage.css";
import AnimatedBackground from "../components/AnimatedBackground";
import GlowingHeart from "../components/GlowingHeart";

const HomePage = () => {
  return (
    <div className="home-page">
      <AnimatedBackground />

      <div className="home-page__content">
        <div className="home-hero glass-card">
          <h1 className="home-hero__title">
            Our Little Universe, Nandini
          </h1>

          <p className="home-hero__subtitle">
            This is your own cozy corner of the internet, filled with our memories,
            silly moments, dreams, and all the love this developer can possibly code.
          </p>

          <div className="home-hero__message-row">
            <p className="home-hero__message">
              Every line of this website is a small "I love you", hidden in code but glowing just for you.
            </p>
            <GlowingHeart size="large" />
          </div>

          <p className="home-hero__hint">
            Use the floating navigation below to explore letters, poems, games,
            future dreams, and your special corner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
