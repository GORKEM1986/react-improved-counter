import React from "react";
import { FaBeer, FaAmbulance } from "react-icons/fa";
import { IoFishOutline, IoFingerPrintOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { GiVikingHead } from "react-icons/gi";
import { GiVillage } from "react-icons/gi";
import { GoCalendar } from "react-icons/go";

const Icon = () => {
  return (
    <div>
      <FaBeer size="100" color="green" />
      <FaAmbulance size="100" color="red" />
      <IoFishOutline size="120" color="blue" />
      <IoFingerPrintOutline size="120" color="blue" />
      <IconContext.Provider value={{ color: "purple", size: "120" }}>
        <p>
          <GiVikingHead />
          <GiVillage />
          <GoCalendar />
        </p>
      </IconContext.Provider>
    </div>
  );
};

export default Icon;
