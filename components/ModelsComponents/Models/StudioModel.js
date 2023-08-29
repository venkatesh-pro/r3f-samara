import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

const StudioModel = ({ allData }) => {
  const { nodes, materials } = useGLTF("/models/studio.glb");

  const [colorForHouse, setColorForHouse] = useState("");
  const [roofForHouse, setRoofColorForHouse] = useState("");
  const [whichEntry, setWhichEntry] = useState("Side entry");

  useEffect(() => {
    // [1] index  for color data
    allData[1]?.imagesData.map((data, i) => {
      if (data.active) {
        setColorForHouse(data.color);
      }
    });
  }, [allData]);
  useEffect(() => {
    allData[2]?.imagesData.map((data, i) => {
      if (data.active) {
        setRoofColorForHouse(data.color);
      }
    });
  }, [allData]);

  useEffect(() => {
    allData[3]?.imagesData.map((data, i) => {
      if (data.active) {
        setWhichEntry(data.name);
      }
    });
  }, [allData]);
  return (
    <group castShadow receiveShadow dispose={null} rotation-y={Math.PI / 2}>
      <group name="Scene">
        <group name="Studio">
          <group name="Baseline_Front_S" position={[0, 0.056, -2.057]}>
            {whichEntry === "Side entry" && (
              <mesh
                name="Frame_FrontWindow_S"
                castShadow
                receiveShadow
                geometry={nodes.Frame_FrontWindow_S.geometry}
                // material={materials.Color_Exterior}
                position={[0.601, -0.027, -0.193]}
                rotation={[0, -1.571, 0]}
              >
                <meshStandardMaterial color={colorForHouse} />
              </mesh>
            )}
            {whichEntry === "Side entry" && (
              <mesh
                name="Frame_m_FrontWindow_S"
                castShadow
                receiveShadow
                geometry={nodes.Frame_m_FrontWindow_S.geometry}
                material={materials.Dark_Bronze}
                position={[0.601, -0.027, -0.193]}
                rotation={[0, -1.571, 0]}
                scale={0.025}
              />
            )}
            <mesh
              name="Glass_Front_S"
              castShadow
              receiveShadow
              geometry={nodes.Glass_Front_S.geometry}
              material={materials.glassClear}
              position={[0.601, -0.027, -0.193]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Socket_e_Front_S"
              castShadow
              receiveShadow
              geometry={nodes.Socket_e_Front_S.geometry}
              // material={materials.Color_Exterior}
              position={[1.286, -0.702, -0.21]}
              rotation={[0, 1.571, 0]}
              scale={0.025}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>

            {whichEntry === "Side entry" && (
              <mesh
                name="Wall_e_FrontWindow_S"
                castShadow
                receiveShadow
                geometry={nodes.Wall_e_FrontWindow_S.geometry}
                // material={materials.Color_Exterior}
                position={[0.601, -0.027, -0.193]}
                rotation={[0, -1.571, 0]}
                scale={0.025}
              >
                <meshStandardMaterial color={colorForHouse} />
              </mesh>
            )}
            <mesh
              name="Wall_i_FrontWindow_S"
              castShadow
              receiveShadow
              geometry={nodes.Wall_i_FrontWindow_S.geometry}
              material={materials.Wall}
              position={[0.401, -0.015, -0.051]}
              scale={0.025}
            />
          </group>
          <group name="Baseline_Left_S" position={[4.191, 0.056, 0]}>
            <mesh
              name="Frame_LeftWindow_S"
              castShadow
              receiveShadow
              geometry={nodes.Frame_LeftWindow_S.geometry}
              // material={materials.Color_Exterior}
              position={[0.193, -0.027, 0.829]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Frame_m_LeftWindow_S"
              castShadow
              receiveShadow
              geometry={nodes.Frame_m_LeftWindow_S.geometry}
              material={materials.Dark_Bronze}
              position={[0.145, -0.2, 0.904]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0.025}
            />
            <mesh
              name="Glass_Left_S"
              castShadow
              receiveShadow
              geometry={nodes.Glass_Left_S.geometry}
              material={materials.glassClear}
              position={[0.178, -0.029, 0.828]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0.025}
            />
            <mesh
              name="Socket_e_Left_S"
              castShadow
              receiveShadow
              geometry={nodes.Socket_e_Left_S.geometry}
              // material={materials.Color_Exterior}
              position={[0.21, -0.702, 1.514]}
              scale={0.025}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Wall_e_LefttDoor_S"
              castShadow
              receiveShadow
              geometry={nodes.Wall_e_LefttDoor_S.geometry}
              // material={materials.Color_Exterior}
              rotation={[0, 1.571, 0]}
              scale={0.025}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Wall_i_LeftWindow_S"
              castShadow
              receiveShadow
              geometry={nodes.Wall_i_LeftWindow_S.geometry}
              material={materials.Wall}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
          </group>
          <group name="Baseline_S">
            <mesh
              name="Air_purification_S"
              castShadow
              receiveShadow
              geometry={nodes.Air_purification_S.geometry}
              material={materials.Air}
              position={[-4.59, -1.443, 0.957]}
              rotation={[0, -1.571, 0]}
              scale={0.905}
            />
            <mesh
              name="Bottom_S"
              castShadow
              receiveShadow
              geometry={nodes.Bottom_S.geometry}
              material={materials.Color_Dark}
              position={[0, -1.377, 0]}
              scale={0.025}
            />
            <mesh
              name="ElectricalPanel1_Conduit_S"
              castShadow
              receiveShadow
              geometry={nodes.ElectricalPanel1_Conduit_S.geometry}
              // material={materials.Color_Exterior}
              position={[-4.402, -1.589, 2.269]}
              rotation={[0, -1.571, 0]}
              scale={0.905}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Exhaust_S"
              castShadow
              receiveShadow
              geometry={nodes.Exhaust_S.geometry}
              // material={materials.Color_Exterior}
              position={[-0.055, 0.692, 2.221]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0.025}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="FireSprinkler_S"
              castShadow
              receiveShadow
              geometry={nodes.FireSprinkler_S.geometry}
              material={materials.Color_Red}
              position={[4.394, 1.803, 0]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              name="Floor_S"
              castShadow
              receiveShadow
              geometry={nodes.Floor_S.geometry}
              material={materials.Floor_S}
              position={[0, -1.377, 0]}
              scale={0.025}
            />
            <mesh
              name="Frame_Around_S"
              castShadow
              receiveShadow
              geometry={nodes.Frame_Around_S.geometry}
              // material={materials.Color_Exterior}
              position={[2.735, -1.473, 0]}
              scale={0.025}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Frame_BackWindow_S"
              castShadow
              receiveShadow
              geometry={nodes.Frame_BackWindow_S.geometry}
              // material={materials.Color_Exterior}
              position={[-3.658, 0.336, 2.21]}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Frame_m_BackWindow_S"
              castShadow
              receiveShadow
              geometry={nodes.Frame_m_BackWindow_S.geometry}
              material={materials.Dark_Bronze}
              position={[-0.31, 0, 0]}
              scale={0.025}
            />
            <mesh
              name="Glass_S"
              castShadow
              receiveShadow
              geometry={nodes.Glass_S.geometry}
              material={materials.glassClear}
              position={[0.305, -0.185, -2.269]}
              scale={0.025}
            />
            <mesh
              name="Piles_S"
              castShadow
              receiveShadow
              geometry={nodes.Piles_S.geometry}
              material={materials.Color_Piles}
              position={[0, -1.655, 0]}
              scale={0.025}
            />
            <mesh
              name="Roof_S"
              castShadow
              receiveShadow
              geometry={nodes.Roof_S.geometry}
              // material={materials.Color_Roof}
              position={[0, 2.099, 0]}
              scale={0.025}
            >
              <meshStandardMaterial color={roofForHouse} />
            </mesh>
            <mesh
              name="Sanr_S"
              castShadow
              receiveShadow
              geometry={nodes.Sanr_S.geometry}
              // material={materials.Color_Roof}
              position={[-0.148, 2.367, 0.289]}
              rotation={[0.394, 0.175, 0]}
              scale={0.025}
            >
              <meshStandardMaterial color={roofForHouse} />
            </mesh>
            <mesh
              name="Spigot_S"
              castShadow
              receiveShadow
              geometry={nodes.Spigot_S.geometry}
              material={materials.Bronze}
              position={[-2.11, -0.624, 2.26]}
              rotation={[0, 1.571, 0]}
              scale={1.594}
            />
            <mesh
              name="Wall_e_BackWindow_S"
              castShadow
              receiveShadow
              geometry={nodes.Wall_e_BackWindow_S.geometry}
              // material={materials.Color_Exterior}
              position={[-4.26, -0.106, -2.254]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Wall_int_S"
              castShadow
              receiveShadow
              geometry={nodes.Wall_int_S.geometry}
              material={materials.Wall}
              position={[-0.31, 0, 0]}
            />
            <mesh
              name="Wall_int_S001"
              castShadow
              receiveShadow
              geometry={nodes.Wall_int_S001.geometry}
              material={materials.Wall}
              position={[-0.31, 0, 0]}
            />
          </group>
          <group name="Door_Right_S" position={[-4.388, 0.302, -0.172]}>
            {whichEntry === "Side entry" && (
              <mesh
                name="Awning_Rigth_S"
                castShadow
                receiveShadow
                geometry={nodes.Awning_Rigth_S.geometry}
                // material={materials.Color_Exterior}
                position={[-0.006, 0.991, -0.665]}
                rotation={[0, 1.571, 0]}
                scale={0.025}
              >
                <meshStandardMaterial color={colorForHouse} />
              </mesh>
            )}
            {whichEntry === "Side entry" && (
              <mesh
                name="Desk_S"
                castShadow
                receiveShadow
                geometry={nodes.Desk_S.geometry}
                material={materials.Cedar}
                position={[-0.09, -1.46, -0.666]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.025}
              />
            )}
            <mesh
              name="DoorEnt_S"
              castShadow
              receiveShadow
              geometry={nodes.DoorEnt_S.geometry}
              material={materials.Dark_Bronze}
              position={[0.061, -0.445, -0.662]}
              rotation={[-Math.PI, -1.571, 0]}
              scale={-1}
            />
            <mesh
              name="Downlight_e_Right_S"
              castShadow
              receiveShadow
              geometry={nodes.Downlight_e_Right_S.geometry}
              // material={materials.Color_Exterior}
              position={[-0.006, 0.275, -1.515]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={0.025}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Frame_m_RightDoor_S"
              castShadow
              receiveShadow
              geometry={nodes.Frame_m_RightDoor_S.geometry}
              // material={materials.Color_Exterior}
              position={[0.005, -0.485, -0.662]}
              rotation={[0, 1.571, 0]}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Glass_Door_S"
              castShadow
              receiveShadow
              geometry={nodes.Glass_Door_S.geometry}
              material={materials.glassDoor}
              position={[0.061, -0.445, -0.662]}
              rotation={[-Math.PI, -1.571, 0]}
              scale={-1}
            />

            {whichEntry === "Side entry" && (
              <mesh
                name="Undersructure_S"
                castShadow
                receiveShadow
                geometry={nodes.Undersructure_S.geometry}
                material={materials.Color_ExteriorSupp}
                position={[-0.09, -1.46, -0.666]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.025}
              />
            )}
            <mesh
              name="Wall_e_LeftWindow_S"
              castShadow
              receiveShadow
              geometry={nodes.Wall_e_LeftWindow_S.geometry}
              // material={materials.Color_Exterior}
              position={[-0.007, -1.266, 0.172]}
              scale={0.025}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Wall_i_RightDoor_S"
              castShadow
              receiveShadow
              geometry={nodes.Wall_i_RightDoor_S.geometry}
              material={materials.Wall}
              position={[0.15, -0.181, -0.344]}
              scale={0.025}
            />
          </group>
          <group name="DoubleDoor_Front_S" position={[0, 0.056, -2.057]}>
            {whichEntry === "Front entry" && (
              <mesh
                name="Awning_Front_S"
                castShadow
                receiveShadow
                geometry={nodes.Awning_Front_S.geometry}
                // material={materials.Color_Exterior}
                position={[0.303, 1.238, -0.212]}
                scale={0.025}
              >
                <meshStandardMaterial color={colorForHouse} />
              </mesh>
            )}
            {whichEntry === "Front entry" && (
              <mesh
                name="Deck_Front_S"
                castShadow
                receiveShadow
                geometry={nodes.Deck_Front_S.geometry}
                material={materials.Cedar}
                position={[0.303, -1.213, -0.218]}
                scale={0.025}
              />
            )}
            <mesh
              name="Door_Front_S"
              castShadow
              receiveShadow
              geometry={nodes.Door_Front_S.geometry}
              material={materials.Dark_Bronze}
              position={[0.304, -0.818, -0.224]}
              rotation={[-Math.PI, 0, 0]}
              scale={-1}
            />
            <mesh
              name="Door_Front_S001"
              castShadow
              receiveShadow
              geometry={nodes.Door_Front_S001.geometry}
              material={materials.Dark_Bronze}
              position={[0.304, -0.818, -0.224]}
              rotation={[-Math.PI, 0, 0]}
              scale={-1}
            />
            <mesh
              name="Door_GlassFront_S"
              castShadow
              receiveShadow
              geometry={nodes.Door_GlassFront_S.geometry}
              material={materials.glassClear}
              position={[0.305, -0.241, -0.211]}
              scale={0.025}
            />
            <mesh
              name="Downlight_e_Front_S"
              castShadow
              receiveShadow
              geometry={nodes.Downlight_e_Front_S.geometry}
              // material={materials.Color_Exterior}
              position={[1.285, 0.521, -0.203]}
              rotation={[0, 1.571, 0]}
              scale={0.025}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Frame_FrontDoor_S"
              castShadow
              receiveShadow
              geometry={nodes.Frame_FrontDoor_S.geometry}
              // material={materials.Color_Exterior}
              position={[0.305, -0.241, -0.211]}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>

            {whichEntry === "Front entry" && (
              <mesh
                name="Undersructure_Front_S"
                castShadow
                receiveShadow
                geometry={nodes.Undersructure_Front_S.geometry}
                material={materials.Color_ExteriorSupp}
                position={[0.303, -1.213, -0.218]}
                scale={0.025}
              />
            )}

            <mesh
              name="Wall_e_FrontDoor_S"
              castShadow
              receiveShadow
              geometry={nodes.Wall_e_FrontDoor_S.geometry}
              // material={materials.Color_Exterior}
              position={[0.305, -0.241, -0.211]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Wall_i_FrontDoor_S"
              castShadow
              receiveShadow
              geometry={nodes.Wall_i_FrontDoor_S.geometry}
              material={materials.Wall}
              position={[0.305, -0.241, -0.211]}
            />
          </group>
          <group name="DoubleDoor_Left_S" position={[4.191, 0.056, 0]}>
            <mesh
              name="Awning_Left_S"
              castShadow
              receiveShadow
              geometry={nodes.Awning_Left_S.geometry}
              // material={materials.Color_Exterior}
              position={[0.206, 1.238, 0.542]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Deck_Left_S"
              castShadow
              receiveShadow
              geometry={nodes.Deck_Left_S.geometry}
              material={materials.Cedar}
              position={[0.217, -1.213, 0.533]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Door_GlassLeft_S"
              castShadow
              receiveShadow
              geometry={nodes.Door_GlassLeft_S.geometry}
              material={materials.glassClear}
              position={[0.178, -0.19, 0.544]}
              rotation={[-Math.PI, 1.571, 0]}
              scale={-1}
            />
            <mesh
              name="Door_Left_S"
              castShadow
              receiveShadow
              geometry={nodes.Door_Left_S.geometry}
              material={materials.Dark_Bronze}
              position={[0.169, -0.289, 0.544]}
              rotation={[-Math.PI, 1.571, 0]}
              scale={-1}
            />
            <mesh
              name="Downlight_e_Left_S"
              castShadow
              receiveShadow
              geometry={nodes.Downlight_e_Left_S.geometry}
              // material={materials.Color_Exterior}
              position={[0.203, 0.521, 1.514]}
              scale={0.025}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Frame_LeftDoor_S"
              castShadow
              receiveShadow
              geometry={nodes.Frame_LeftDoor_S.geometry}
              // material={materials.Color_Exterior}
              position={[0.211, -0.241, 0.544]}
              rotation={[0, -1.571, 0]}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Undersructure_Left_S"
              castShadow
              receiveShadow
              geometry={nodes.Undersructure_Left_S.geometry}
              material={materials.Color_ExteriorSupp}
              position={[0.217, -1.213, 0.533]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Wall_e_LeftDoor_S"
              castShadow
              receiveShadow
              geometry={nodes.Wall_e_LeftDoor_S.geometry}
              // material={materials.Color_Exterior}
              position={[0.197, 0.405, 0.182]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0.025}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Wall_i_LeftDoor_S"
              castShadow
              receiveShadow
              geometry={nodes.Wall_i_LeftDoor_S.geometry}
              material={materials.Wall}
              position={[0.051, -0.13, 0.362]}
              scale={0.025}
            />
          </group>
          <group name="SolarPanel_S" position={[-0.001, 2.112, 0]}>
            <mesh
              name="ElectricalPanel_Conduit_S"
              castShadow
              receiveShadow
              geometry={nodes.ElectricalPanel_Conduit_S.geometry}
              // material={materials.Color_Exterior}
              position={[-4.401, -3.7, 2.269]}
              rotation={[0, -1.571, 0]}
              scale={0.905}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <group name="SolarPanel_Left_S" position={[0, 0, -1.247]}>
              <mesh
                name="ConstSP_Left_S"
                castShadow
                receiveShadow
                geometry={nodes.ConstSP_Left_S.geometry}
                material={materials.Color_Dark}
                position={[0.003, -0.047, 0.003]}
                rotation={[0.368, -Math.PI / 2, 0]}
                scale={0.025}
              />
              <mesh
                name="Shield_Left_S"
                castShadow
                receiveShadow
                geometry={nodes.Shield_Left_S.geometry}
                material={materials.Color_Dark}
                position={[0, -0.393, -0.835]}
                rotation={[-0.012, 0, 0]}
              />
              <group name="SP_Left_S" rotation={[-0.01, 0, 0]}>
                <mesh
                  name="SP_Left_S_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.SP_Left_S_1.geometry}
                  material={materials.Color_Solar}
                />
                <mesh
                  name="SP_Left_S_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.SP_Left_S_2.geometry}
                  material={materials.Solar_Panel}
                />
              </group>
            </group>
            <group name="SolarPanel_Right_S" position={[0, 0, 1.247]}>
              <mesh
                name="ConstSP_Right_S"
                castShadow
                receiveShadow
                geometry={nodes.ConstSP_Right_S.geometry}
                material={materials.Color_Dark}
                position={[0.003, -0.047, -0.003]}
                rotation={[0.368, -Math.PI / 2, 0]}
                scale={0.025}
              />
              <mesh
                name="Shield_Right_S"
                castShadow
                receiveShadow
                geometry={nodes.Shield_Right_S.geometry}
                material={materials.Color_Dark}
                position={[0, -0.393, 0.835]}
                rotation={[-0.012, 0, 0]}
              />
              <group name="SP_Right_S" rotation={[-0.01, 0, 0]}>
                <mesh
                  name="SP_Right_S_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.SP_Right_S_1.geometry}
                  material={materials.Color_Solar}
                />
                <mesh
                  name="SP_Right_S_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.SP_Right_S_2.geometry}
                  material={materials.Solar_Panel}
                />
              </group>
            </group>
          </group>
          <group name="SolarСable_S" position={[-4.439, 1.375, 2.002]}>
            <mesh
              name="CableConduit_S"
              castShadow
              receiveShadow
              geometry={nodes.CableConduit_S.geometry}
              // material={materials.Color_Exterior}
              rotation={[0, -1.571, 0]}
              scale={0.905}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Tube_Full_S"
              castShadow
              receiveShadow
              geometry={nodes.Tube_Full_S.geometry}
              // material={materials.Color_Roof}
              position={[-0.237, -1.705, 0.004]}
            >
              <meshStandardMaterial color={roofForHouse} />
            </mesh>
            <mesh
              name="Tube_Half_S"
              castShadow
              receiveShadow
              geometry={nodes.Tube_Half_S.geometry}
              // material={materials.Color_Roof}
              position={[-0.237, -1.705, 0.004]}
            >
              <meshStandardMaterial color={roofForHouse} />
            </mesh>
          </group>
          <group name="Studio_interior">
            <mesh
              name="Bed_S"
              castShadow
              receiveShadow
              geometry={nodes.Bed_S.geometry}
              material={materials.Fabric_S}
              position={[2.846, -1.154, -1.047]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={3.242}
            />
            <mesh
              name="Chair1_S"
              castShadow
              receiveShadow
              geometry={nodes.Chair1_S.geometry}
              material={materials.WoodCh_S}
              position={[0.539, -1.159, 0.149]}
              rotation={[Math.PI / 2, 0, -0.712]}
              scale={0.025}
            />
            <group
              name="Chair_S"
              position={[0.516, -0.677, -0.306]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={0.025}
            >
              <mesh
                name="Chair_S_1"
                castShadow
                receiveShadow
                geometry={nodes.Chair_S_1.geometry}
                material={materials.Chair}
              />
              <mesh
                name="Chair_S_2"
                castShadow
                receiveShadow
                geometry={nodes.Chair_S_2.geometry}
                material={materials.Color_Black}
              />
            </group>
            <mesh
              name="Const_Bath_S"
              castShadow
              receiveShadow
              geometry={nodes.Const_Bath_S.geometry}
              material={materials.Bath}
              position={[-2.11, -0.139, 1.307]}
              scale={0.025}
            />
            <mesh
              name="Faucet_S"
              castShadow
              receiveShadow
              geometry={nodes.Faucet_S.geometry}
              material={materials.Faucet}
              position={[0.377, -0.225, 1.869]}
            />
            <mesh
              name="Glass_Bath_S"
              castShadow
              receiveShadow
              geometry={nodes.Glass_Bath_S.geometry}
              material={materials.glassBath}
              position={[-2.104, -0.162, 1.306]}
              scale={0.025}
            />
            <mesh
              name="Mirror_S"
              castShadow
              receiveShadow
              geometry={nodes.Mirror_S.geometry}
              material={materials.Chrome}
              position={[-2.725, 0.326, 2.05]}
              scale={0.025}
            />
            <mesh
              name="Oven_Al_S"
              castShadow
              receiveShadow
              geometry={nodes.Oven_Al_S.geometry}
              material={materials.aluminium}
              position={[-1.956, -0.707, 0.092]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Oven_S"
              castShadow
              receiveShadow
              geometry={nodes.Oven_S.geometry}
              material={materials.Oven_1B}
              position={[-1.956, -0.707, 0.092]}
              rotation={[0, -1.571, 0]}
            />
            <group name="Shelves_Chrome_S" position={[-0.059, 0.495, 1.89]}>
              <mesh
                name="Shelves_Chrome_S_1"
                castShadow
                receiveShadow
                geometry={nodes.Shelves_Chrome_S_1.geometry}
                material={materials.Chrome}
              />
              <mesh
                name="Shelves_Chrome_S_2"
                castShadow
                receiveShadow
                geometry={nodes.Shelves_Chrome_S_2.geometry}
                material={materials.Glass_mat_black}
              />
            </group>
            <mesh
              name="Shelves_S"
              castShadow
              receiveShadow
              geometry={nodes.Shelves_S.geometry}
              material={materials.Shelves}
              position={[-0.059, 0.495, 1.89]}
            />
            <mesh
              name="WoodFurniture_S"
              castShadow
              receiveShadow
              geometry={nodes.WoodFurniture_S.geometry}
              material={materials.Wood_S}
              position={[-3.275, 0.022, -1.825]}
              scale={0.025}
            />
          </group>
          <group name="Window_Right_S" position={[-4.388, 0.255, 0]}>
            {whichEntry === "Front entry" && (
              <mesh
                name="Desk1_S"
                castShadow
                receiveShadow
                geometry={nodes.Desk1_S.geometry}
                material={materials.Cedar}
                position={[4.691, -1.781, -3.079]}
                rotation={[0, 1.571, 0]}
                scale={0.025}
              />
            )}
            <mesh
              name="Frame_m_RightWindow1_S"
              castShadow
              receiveShadow
              geometry={nodes.Frame_m_RightWindow1_S.geometry}
              material={materials.Dark_Bronze}
              position={[0.052, -0.399, -0.905]}
              scale={0.025}
            />
            <mesh
              name="Frame_RightWindow1_S"
              castShadow
              receiveShadow
              geometry={nodes.Frame_RightWindow1_S.geometry}
              // material={materials.Color_Exterior}
              position={[0.004, -0.226, -0.829]}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Glass1_S"
              castShadow
              receiveShadow
              geometry={nodes.Glass1_S.geometry}
              material={materials.glassClear}
              position={[0.019, -0.228, -0.829]}
              scale={0.025}
            />
            {whichEntry === "Front entry" && (
              <mesh
                name="Undersructure1_S"
                castShadow
                receiveShadow
                geometry={nodes.Undersructure1_S.geometry}
                material={materials.Color_ExteriorSupp}
                position={[4.691, -1.781, -3.079]}
                rotation={[0, 1.571, 0]}
                scale={0.025}
              />
            )}
            <mesh
              name="Wall_e_RightWindow1_S"
              castShadow
              receiveShadow
              geometry={nodes.Wall_e_RightWindow1_S.geometry}
              // material={materials.Color_Exterior}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            >
              <meshStandardMaterial color={colorForHouse} />
            </mesh>
            <mesh
              name="Wall_i_RightWindow1_S"
              castShadow
              receiveShadow
              geometry={nodes.Wall_i_RightWindow1_S.geometry}
              material={materials.Wall}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/studio.glb");
export default StudioModel;
