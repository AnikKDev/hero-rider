import React from "react";
import SpecialityCard from "../Speciality/SpecialityCard/SpecialityCard";
import { AiFillShopping } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { GiCardExchange } from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr";
const Speciality = () => {
  // const { icon } = servicesData;
  const servicesData = [
    {
      title: "Wide range of eco-friendly products",
      description:
        "Offer a diverse range of products made from eco-friendly materials.",
      icon: <BsFillJournalBookmarkFill size={40} />,
      image:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=940&q=80",
      subTitle: "Personalized Book Recommendations",
    },
    {
      title: "Convenient Schedule",
      description: "Make shopping for sustainable products effortless.",
      icon: <AiFillShopping size={40} />,
      image:
        "https://images.unsplash.com/37/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      subTitle: "Fast and Affordable Shipping",
    },
    {
      title: "Connect With Doctors Across The Globe",
      description:
        "Products are sourced from ethical and environmentally responsible suppliers.",
      icon: <GiCardExchange size={40} />,
      subTitle: "Hassle-Free Returns and Exchanges",
    },
    {
      title: "Find The Right Doctor For You",
      description: "Provide exceptional customer service.",
      icon: <GrWorkshop size={40} />,
      subTitle: "Convenient Online Ordering and Pickup",
    },
  ];
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      style={{ boxShadow: "0px 16px 21px -19px grey" }}
      className="grid p-4 my-16 rounded-md sm:gap-2 lg:gap-0 md:grid-cols-2 lg:grid-cols-4"
    >
      {servicesData.map((data) => (
        <SpecialityCard key={Math.random().toString()} data={data} />
      ))}
    </div>
  );
};

export default Speciality;
