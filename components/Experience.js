import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  PresentationControls,
  SoftShadows,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import StudioComponent from "./ModelsComponents/StudioComponent";
import OneBedRoomComponent from "./ModelsComponents/OneBedRoomComponent";
import TwoBedRoomComponent from "./ModelsComponents/TwoBedRoomComponent";

const Experience = ({ allData }) => {
  // const []
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
        background: "#E0DED4",
      }}
      shadows={true}
      dpr={[1, 2]}
    >
      {/* <OrbitControls enableZoom={true} /> */}
      <ambientLight castShadow />
      <pointLight castShadow intensity={108} position-x={-5} position-y={6} />
      <Environment preset="studio" />
      <PerspectiveCamera position={[0, 1, 25]} makeDefault />
      {/* Model */}
      <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        {allData[0]?.imagesData.map((data, i) => {
          if (data.active) {
            if (data.name === "Studio") {
              return <StudioComponent allData={allData} key={i} />;
            } else if (data.name === "One bedroom") {
              return <OneBedRoomComponent allData={allData} key={i} />;
            } else {
              return <TwoBedRoomComponent allData={allData} key={i} />;
            }
          }
        })}
        {/* <Plane
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -2, 0]}
          args={[1000, 1000]}
        >
          <meshStandardMaterial attach="material" color="#E0DED4" />
        </Plane> */}
      </PresentationControls>
    </Canvas>
  );
};

export default Experience;
