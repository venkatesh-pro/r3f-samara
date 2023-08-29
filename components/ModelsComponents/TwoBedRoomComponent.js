import { Center, Html } from "@react-three/drei";
import React from "react";
import TwoBedRoomModel from "./Models/TwoBedRoomModel";

const TwoBedRoomComponent = ({allData}) => {
  return (
    <>
      <TwoBedRoomModel allData={allData} />
    </>
  );
};

export default TwoBedRoomComponent;
