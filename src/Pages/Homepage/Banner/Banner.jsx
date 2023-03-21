import React from "react";
import PercentageCard from "./PercentageCard/PercentageCard";
import ShopNowCard from "./ShopNowCard/ShopNowCard";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div className="col-span-2">
        {/* bg image and shop will be here */}
        <ShopNowCard />
      </div>
      <div className="flex flex-col justify-around">
        {/* small percentage card's will be here */}
        <PercentageCard
          imgSrc="https://images.unsplash.com/photo-1532795986-dbef1643a596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          title="40% Off!"
          subHeading={"On All Weekend Sales"}
        />
        <PercentageCard
          imgSrc="https://images.unsplash.com/photo-1612611450279-51b46599e6ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
          title="20% Off! International Mother Language Day."
          subHeading={"On All New Books"}
        />
      </div>
    </div>
  );
};

export default Banner;
