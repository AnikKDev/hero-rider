import React from "react";
import Typewriter from "typewriter-effect";
const ShopNowCard = () => {
  return (
    <div
      className="hero h-full"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1528700850553-6a45e6f143db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=443&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            <Typewriter
              options={{
                strings: ["Discover Your Next Favorite Book at MyBookShop..."],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mb-5">
            Explore our vast collection of new and classic titles, curated with
            the avid reader in mind.
          </p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default ShopNowCard;
