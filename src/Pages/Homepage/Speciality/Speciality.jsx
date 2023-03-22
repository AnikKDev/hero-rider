import React from "react";
import SpecialityCard from "../Speciality/SpecialityCard/SpecialityCard";
import {
  MdEmojiTransportation,
  MdEmojiPeople,
  MdSocialDistance,
} from "react-icons/md";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
const Speciality = () => {
  // const { icon } = servicesData;
  const servicesData = [
    {
      icon: <BsFillJournalBookmarkFill size={40} />,

      subTitle: "convenient and affordable",
    },
    {
      icon: <MdEmojiTransportation size={40} />,

      subTitle: "Make it easy to find and book rides",
    },
    {
      icon: <MdEmojiPeople size={40} />,
      subTitle: "Experienced driving instructors",
    },
    {
      icon: <MdSocialDistance size={40} />,
      subTitle: "Join a vibrant community of riders and drivers",
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
