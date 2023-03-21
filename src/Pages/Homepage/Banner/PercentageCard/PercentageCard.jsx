import React from "react";
import styles from "./PercentageCard.module.css";
const PercentageCard = ({ title, subHeading, imgSrc }) => {
  return (
    <div
      className={`card my-3 max-w-96 bg-base-100 shadow-xl image-full ${styles.percentageCard__container}`}
    >
      <figure>
        <img src={imgSrc} alt="Shoes" />
      </figure>
      <div className="card-body justify-center items-center">
        <div>
          <h2 className="card-title text-4xl text-white">{title}</h2>
          <p className="text-white">{subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default PercentageCard;
