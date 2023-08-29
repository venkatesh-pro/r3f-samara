import { Center, Html } from "@react-three/drei";
import React from "react";
import StudioModel from "./Models/StudioModel";

const StudioComponent = ({ allData }) => {
  return (
    <>
      <StudioModel allData={allData} />
    </>
  );
};

export default StudioComponent;
