import { Center, Html } from "@react-three/drei";
import React from "react";
import OneBedRoomModel from "./Models/OneBedRoomModel";

const OneBedRoomComponent = ({allData}) => {
  return (
    <Center>
      <OneBedRoomModel allData={allData} />
    </Center>
  );
};

export default OneBedRoomComponent;
