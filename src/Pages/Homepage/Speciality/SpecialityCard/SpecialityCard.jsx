import React from "react";
import styles from "./SpecialityCard.module.css";
import { FaCanadianMapleLeaf } from "react-icons/fa";
const BenefitsCard = ({ data }) => {
  return (
    <div className="">
      <div
        className={`h-24 px-3 py-2 rounded-lg flex items-center justify-around m-2 ${styles.specialityCard__container}`}
      >
        <div
          className={`rounded-full  p-3 ${styles.specialityCard__iconContainer}`}
        >
          {/* icon */}
          {data.icon}
          {/* <FaCanadianMapleLeaf size={40} /> */}
        </div>
        <div className="ml-2">
          {/* text */}
          <h3 className="text-lg font-semibold text-secondary">
            {data.subTitle}
          </h3>
          {/* <p className="mt-1 text-gray-500 text-sm">{data.description}</p> */}
        </div>
      </div>
    </div>
  );
};

export default BenefitsCard;
