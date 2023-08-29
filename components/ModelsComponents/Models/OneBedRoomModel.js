import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const OneBedRoomModel = ({ allData }) => {
  const { nodes, materials } = useGLTF("/models/oneBedroom.glb");
  return (
    <group rotation-y={Math.PI / 2} dispose={null}>
      <group name="Scene">
        <group name="1Bedroom">
          <group name="1B_interior">
            <mesh
              name="Bed_1B"
              castShadow
              receiveShadow
              geometry={nodes.Bed_1B.geometry}
              material={materials.Fabric_1B}
              position={[-3.955, -1.154, 0.995]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
              scale={3.242}
            />
            <mesh
              name="Chair_1B"
              castShadow
              receiveShadow
              geometry={nodes.Chair_1B.geometry}
              material={materials.Chair}
              position={[1.764, -0.677, -1.503]}
              rotation={[Math.PI / 2, 0, -Math.PI / 4]}
              scale={0.025}
            />
            <mesh
              name="Const_Bath_1B"
              castShadow
              receiveShadow
              geometry={nodes.Const_Bath_1B.geometry}
              material={materials.Bath}
              position={[-0.281, -0.139, 1.307]}
              scale={0.025}
            />
            <mesh
              name="Faucet_1B"
              castShadow
              receiveShadow
              geometry={nodes.Faucet_1B.geometry}
              material={materials.Faucet}
              position={[2.205, -0.225, 1.869]}
            />
            <mesh
              name="Glass_Bath_1B"
              castShadow
              receiveShadow
              geometry={nodes.Glass_Bath_1B.geometry}
              material={materials.glassBath}
              position={[-0.275, -0.162, 1.306]}
              scale={0.025}
            />
            <mesh
              name="Lampe"
              castShadow
              receiveShadow
              geometry={nodes.Lampe.geometry}
              material={materials.Lamp}
              position={[-5.261, -0.146, -1.72]}
              scale={0.025}
            />
            <mesh
              name="Mirror_1B"
              castShadow
              receiveShadow
              geometry={nodes.Mirror_1B.geometry}
              material={materials.Chrome}
              position={[-0.896, 0.326, 2.05]}
              scale={0.025}
            />
            <mesh
              name="Oven"
              castShadow
              receiveShadow
              geometry={nodes.Oven.geometry}
              material={materials.Oven_1B}
              position={[-0.128, -0.707, 0.092]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Oven_Al_1B"
              castShadow
              receiveShadow
              geometry={nodes.Oven_Al_1B.geometry}
              material={materials.aluminium}
              position={[-0.128, -0.707, 0.092]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Shelves_1B"
              castShadow
              receiveShadow
              geometry={nodes.Shelves_1B.geometry}
              material={materials.Shelves}
              position={[1.77, 0.495, 1.89]}
            />
            <group name="Shelves_Chrome_1B" position={[1.77, 0.495, 1.89]}>
              <mesh
                name="Shelves_Chrome_1B_1"
                castShadow
                receiveShadow
                geometry={nodes.Shelves_Chrome_1B_1.geometry}
                material={materials.Chrome}
              />
              <mesh
                name="Shelves_Chrome_1B_2"
                castShadow
                receiveShadow
                geometry={nodes.Shelves_Chrome_1B_2.geometry}
                material={materials.Glass_mat_black}
              />
            </group>
            <mesh
              name="Sofa"
              castShadow
              receiveShadow
              geometry={nodes.Sofa.geometry}
              material={materials.Sofa}
              position={[4.448, -0.793, -1.176]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.025}
            />
            <mesh
              name="WoodFurniture_1B"
              castShadow
              receiveShadow
              geometry={nodes.WoodFurniture_1B.geometry}
              material={materials.Wood_1B}
              position={[-4.813, -0.464, -1.675]}
            />
          </group>
          <group name="Baseline_1B">
            <mesh
              name="Air_purification_1B"
              castShadow
              receiveShadow
              geometry={nodes.Air_purification_1B.geometry}
              material={materials.Air}
              position={[-5.81, -1.443, 0.957]}
              rotation={[0, -1.571, 0]}
              scale={0.905}
            />
            <mesh
              name="Awning_DoorEnt_Front_1B"
              castShadow
              receiveShadow
              geometry={nodes.Awning_DoorEnt_Front_1B.geometry}
              material={materials.Color_Exterior}
              position={[-1.831, 1.294, -2.261]}
              scale={0.025}
            />
            <mesh
              name="Bottom_1B"
              castShadow
              receiveShadow
              geometry={nodes.Bottom_1B.geometry}
              material={materials.Color_Dark}
              position={[0, -1.377, 0]}
              scale={0.025}
            />
            <mesh
              name="Desk_1B"
              castShadow
              receiveShadow
              geometry={nodes.Desk_1B.geometry}
              material={materials.Cedar}
              position={[-1.829, -1.526, -3.079]}
              rotation={[0, 1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="DoorEnt_1B"
              castShadow
              receiveShadow
              geometry={nodes.DoorEnt_1B.geometry}
              material={materials.Dark_Bronze}
              position={[-1.833, -0.143, -2.194]}
              rotation={[-Math.PI, 0, 0]}
              scale={-1}
            />
            <mesh
              name="ElectricalPanel1_Conduit_1B"
              castShadow
              receiveShadow
              geometry={nodes.ElectricalPanel1_Conduit_1B.geometry}
              material={materials.Color_Exterior}
              position={[-5.622, -1.589, 2.269]}
              rotation={[0, -1.571, 0]}
              scale={0.905}
            />
            <mesh
              name="Exhaust_1B"
              castShadow
              receiveShadow
              geometry={nodes.Exhaust_1B.geometry}
              material={materials.Color_Exterior}
              position={[1.774, 0.692, 2.221]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0.025}
            />
            <mesh
              name="FireSprinkler_1B"
              castShadow
              receiveShadow
              geometry={nodes.FireSprinkler_1B.geometry}
              material={materials.Color_Red}
              position={[5.597, 1.803, 0]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              name="Floor_1B"
              castShadow
              receiveShadow
              geometry={nodes.Floor_1B.geometry}
              material={materials.Floor_1B}
              position={[0, -1.377, 0]}
              scale={0.025}
            />
            <mesh
              name="Frame_Around_1B"
              castShadow
              receiveShadow
              geometry={nodes.Frame_Around_1B.geometry}
              material={materials.Color_Exterior}
              position={[1.516, -1.473, 0]}
              scale={0.025}
            />
            <mesh
              name="Frame_DW_1B"
              castShadow
              receiveShadow
              geometry={nodes.Frame_DW_1B.geometry}
              material={materials.Color_Exterior}
              position={[-1.829, 0.336, 2.21]}
            />
            <mesh
              name="Glass_1B"
              castShadow
              receiveShadow
              geometry={nodes.Glass_1B.geometry}
              material={materials.glassClear}
              position={[2.133, -0.185, -2.269]}
              scale={0.025}
            />
            <mesh
              name="GlassDoor_1B"
              castShadow
              receiveShadow
              geometry={nodes.GlassDoor_1B.geometry}
              material={materials.glassDoor}
              position={[-1.833, -0.143, -2.194]}
              rotation={[-Math.PI, 0, 0]}
              scale={-1}
            />
            <mesh
              name="Piles_1B"
              castShadow
              receiveShadow
              geometry={nodes.Piles_1B.geometry}
              material={materials.Color_Piles}
              position={[0, -1.654, 0]}
              scale={0.025}
            />
            <mesh
              name="Roof_1B"
              castShadow
              receiveShadow
              geometry={nodes.Roof_1B.geometry}
              material={materials.Color_Roof}
              position={[0, 2.099, 0]}
              scale={0.025}
            />
            <mesh
              name="Sanr_1B"
              castShadow
              receiveShadow
              geometry={nodes.Sanr_1B.geometry}
              material={materials.Color_Roof}
              position={[-0.148, 2.367, 0.289]}
              rotation={[0.394, 0.175, 0]}
              scale={0.025}
            />
            <mesh
              name="Spigot_1B"
              castShadow
              receiveShadow
              geometry={nodes.Spigot_1B.geometry}
              material={materials.Bronze}
              position={[-0.281, -0.624, 2.26]}
              rotation={[0, 1.571, 0]}
              scale={1.594}
            />
            <mesh
              name="Undersructure_1B"
              castShadow
              receiveShadow
              geometry={nodes.Undersructure_1B.geometry}
              material={materials.Color_ExteriorSupp}
              position={[-1.829, -1.526, -3.079]}
              rotation={[0, 1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Wall_e_1B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_e_1B.geometry}
              material={materials.Color_Exterior}
              position={[-2.431, -0.106, -2.254]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Wall_i_1B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_i_1B.geometry}
              material={materials.Wall_1B}
              position={[1.519, 0, 0]}
            />
            <mesh
              name="Window_1B"
              castShadow
              receiveShadow
              geometry={nodes.Window_1B.geometry}
              material={materials.Dark_Bronze}
              position={[1.519, 0, 0]}
              scale={0.025}
            />
          </group>
          <group name="Baseline_Front_1B" position={[2.641, 0.056, -2.057]}>
            <mesh
              name="Frame_FrontWindow_1B"
              castShadow
              receiveShadow
              geometry={nodes.Frame_FrontWindow_1B.geometry}
              material={materials.Color_Exterior}
              position={[-0.212, -0.027, -0.193]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Frame_m_FrontWindow_1B"
              castShadow
              receiveShadow
              geometry={nodes.Frame_m_FrontWindow_1B.geometry}
              material={materials.Dark_Bronze}
              position={[-0.212, -0.027, -0.193]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Glass_Front_1B"
              castShadow
              receiveShadow
              geometry={nodes.Glass_Front_1B.geometry}
              material={materials.glassClear}
              position={[-0.212, -0.027, -0.193]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Socket_e_Front_1B"
              castShadow
              receiveShadow
              geometry={nodes.Socket_e_Front_1B.geometry}
              material={materials.Color_Exterior}
              position={[0.474, -0.702, -0.21]}
              rotation={[0, 1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Wall_e_FrontWindow_1B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_e_FrontWindow_1B.geometry}
              material={materials.Color_Exterior}
              position={[-5.072, -0.161, -0.196]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Wall_i_FrontWindow_1B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_i_FrontWindow_1B.geometry}
              material={materials.Wall_1B}
              position={[-0.412, -0.015, -0.051]}
              scale={0.025}
            />
          </group>
          <group name="Baseline_Left_1B" position={[5.394, 0.056, 0]}>
            <mesh
              name="Frame_e_LefttWindow_1B"
              castShadow
              receiveShadow
              geometry={nodes.Frame_e_LefttWindow_1B.geometry}
              material={materials.Color_Exterior}
              position={[0.193, -0.027, 0.829]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              name="Frame_m_LefttWindow_1B"
              castShadow
              receiveShadow
              geometry={nodes.Frame_m_LefttWindow_1B.geometry}
              material={materials.Dark_Bronze}
              position={[0.193, -0.027, 0.829]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={0.025}
            />
            <mesh
              name="Glass_e_LefttWindow_1B"
              castShadow
              receiveShadow
              geometry={nodes.Glass_e_LefttWindow_1B.geometry}
              material={materials.glassClear}
              position={[0.193, -0.027, 0.829]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={0.025}
            />
            <mesh
              name="Socket_e_Left_1B"
              castShadow
              receiveShadow
              geometry={nodes.Socket_e_Left_1B.geometry}
              material={materials.Color_Exterior}
              position={[0.21, -0.702, 1.514]}
              scale={0.025}
            />
            <mesh
              name="Wall_e_LefttWindow_1B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_e_LefttWindow_1B.geometry}
              material={materials.Color_Exterior}
              rotation={[0, 1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Wall_i_LeftWindow_1B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_i_LeftWindow_1B.geometry}
              material={materials.Wall_1B}
              position={[0.051, -0.015, 0.552]}
              scale={0.025}
            />
          </group>
          <group name="DoubleDoor_Front_1B" position={[2.641, 0.056, -2.057]}>
            <mesh
              name="Awning_Front_1B"
              castShadow
              receiveShadow
              geometry={nodes.Awning_Front_1B.geometry}
              material={materials.Color_Exterior}
              position={[-4.472, 1.238, -0.203]}
              scale={0.025}
            />
            <mesh
              name="Deck_Front_1B"
              castShadow
              receiveShadow
              geometry={nodes.Deck_Front_1B.geometry}
              material={materials.Cedar}
              position={[-0.51, -1.213, -0.218]}
              scale={0.025}
            />
            <mesh
              name="Door_Front_1B"
              castShadow
              receiveShadow
              geometry={nodes.Door_Front_1B.geometry}
              material={materials.Dark_Bronze}
              position={[-4.475, -0.199, -0.137]}
              rotation={[-Math.PI, 0, 0]}
              scale={-1}
            />
            <mesh
              name="Door_GlassFront_1B"
              castShadow
              receiveShadow
              geometry={nodes.Door_GlassFront_1B.geometry}
              material={materials.glassClear}
              position={[-0.508, -0.241, -0.211]}
              scale={0.025}
            />
            <mesh
              name="Downlight_e_Front_1B"
              castShadow
              receiveShadow
              geometry={nodes.Downlight_e_Front_1B.geometry}
              material={materials.Color_Exterior}
              position={[0.472, 0.521, -0.203]}
              rotation={[0, 1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Frame_m_FrontDoor_1B"
              castShadow
              receiveShadow
              geometry={nodes.Frame_m_FrontDoor_1B.geometry}
              material={materials.Color_Exterior}
              position={[-0.508, -0.241, -0.211]}
            />
            <mesh
              name="Undersructure_Front_1B"
              castShadow
              receiveShadow
              geometry={nodes.Undersructure_Front_1B.geometry}
              material={materials.Color_ExteriorSupp}
              position={[-0.51, -1.213, -0.218]}
              scale={0.025}
            />
            <mesh
              name="Wall_e_FrontDoor_1B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_e_FrontDoor_1B.geometry}
              material={materials.Color_Exterior}
              position={[-5.072, -0.161, -0.196]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Wall_i_FrontDoor_1B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_i_FrontDoor_1B.geometry}
              material={materials.Wall_1B}
              position={[-1.123, -0.056, 2.057]}
            />
          </group>
          <group name="DoubleDoor_Left_1B" position={[5.394, 0.056, 0]}>
            <mesh
              name="Awning_Left_1B"
              castShadow
              receiveShadow
              geometry={nodes.Awning_Left_1B.geometry}
              material={materials.Color_Exterior}
              position={[0.206, 1.238, 0.542]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Deck_Left_1B"
              castShadow
              receiveShadow
              geometry={nodes.Deck_Left_1B.geometry}
              material={materials.Cedar}
              position={[0.217, -1.213, 0.533]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Door_GlassLeft_1B"
              castShadow
              receiveShadow
              geometry={nodes.Door_GlassLeft_1B.geometry}
              material={materials.glassClear}
              position={[0.137, -0.199, -3.423]}
              rotation={[-Math.PI, 1.571, 0]}
              scale={-1}
            />
            <mesh
              name="Door_Left_1B"
              castShadow
              receiveShadow
              geometry={nodes.Door_Left_1B.geometry}
              material={materials.Dark_Bronze}
              position={[0.137, -0.199, -3.423]}
              rotation={[-Math.PI, 1.571, 0]}
              scale={-1}
            />
            <mesh
              name="Downlight_e_Left_1B"
              castShadow
              receiveShadow
              geometry={nodes.Downlight_e_Left_1B.geometry}
              material={materials.Color_Exterior}
              position={[0.203, 0.521, 1.514]}
              scale={0.025}
            />
            <mesh
              name="Frame_LeftDoor_1B"
              castShadow
              receiveShadow
              geometry={nodes.Frame_LeftDoor_1B.geometry}
              material={materials.Color_Exterior}
              position={[0.211, -0.241, 0.544]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Undersructure_Left_1B"
              castShadow
              receiveShadow
              geometry={nodes.Undersructure_Left_1B.geometry}
              material={materials.Color_ExteriorSupp}
              position={[0.217, -1.213, 0.533]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Wall_e_LeftDoor_1B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_e_LeftDoor_1B.geometry}
              material={materials.Color_Exterior}
              position={[0.197, 0.405, 0.182]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0.025}
            />
            <mesh
              name="Wall_i_LeftDoor_1B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_i_LeftDoor_1B.geometry}
              material={materials.Wall_1B}
              position={[0.051, -0.13, 0.362]}
              scale={0.025}
            />
          </group>
          <group name="SolarPanel_1B" position={[0, 2.112, 0]}>
            <mesh
              name="ElectricalPanel_Conduit_1B"
              castShadow
              receiveShadow
              geometry={nodes.ElectricalPanel_Conduit_1B.geometry}
              material={materials.Color_Exterior}
              position={[-5.622, -3.7, 2.269]}
              rotation={[0, -1.571, 0]}
              scale={0.905}
            />
            <group name="SolarPanel_Left_1B" position={[0, 0, -1.247]}>
              <mesh
                name="ConstSP_Left_1B"
                castShadow
                receiveShadow
                geometry={nodes.ConstSP_Left_1B.geometry}
                material={materials.Color_Dark}
                position={[-0.074, 0.025, 0.069]}
                rotation={[0.368, -Math.PI / 2, 0]}
                scale={0.025}
              />
              <mesh
                name="Shield_Left_1B"
                castShadow
                receiveShadow
                geometry={nodes.Shield_Left_1B.geometry}
                material={materials.Color_Dark}
                position={[0, -0.384, -0.854]}
                rotation={[-0.012, 0, 0]}
              />
              <group name="SP_Left_1B" rotation={[-0.01, 0, 0]}>
                <mesh
                  name="SP_Left_1B_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.SP_Left_1B_1.geometry}
                  material={materials.Color_Solar}
                />
                <mesh
                  name="SP_Left_1B_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.SP_Left_1B_2.geometry}
                  material={materials.Solar_Panel}
                />
              </group>
            </group>
            <group name="SolarPanel_Right_1B" position={[0, 0, 1.247]}>
              <mesh
                name="ConstSP_Right_1B"
                castShadow
                receiveShadow
                geometry={nodes.ConstSP_Right_1B.geometry}
                material={materials.Color_Dark}
                position={[-0.021, -0.046, -0.003]}
                rotation={[0.368, -Math.PI / 2, 0]}
                scale={0.025}
              />
              <mesh
                name="Shield_Right_1B"
                castShadow
                receiveShadow
                geometry={nodes.Shield_Right_1B.geometry}
                material={materials.Color_Dark}
                position={[0, -0.393, 0.835]}
                rotation={[-0.012, 0, 0]}
              />
              <group name="SP_Right_1B" rotation={[-0.01, 0, 0]}>
                <mesh
                  name="SP_Right_1B_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.SP_Right_1B_1.geometry}
                  material={materials.Color_Solar}
                />
                <mesh
                  name="SP_Right_1B_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.SP_Right_1B_2.geometry}
                  material={materials.Solar_Panel}
                />
              </group>
            </group>
          </group>
          <group name="SolarСable_1B" position={[-5.658, 1.375, 2.002]}>
            <mesh
              name="CableConduit_1B"
              castShadow
              receiveShadow
              geometry={nodes.CableConduit_1B.geometry}
              material={materials.Color_Exterior}
              rotation={[0, -1.571, 0]}
              scale={0.905}
            />
            <mesh
              name="Tube_Full_1B"
              castShadow
              receiveShadow
              geometry={nodes.Tube_Full_1B.geometry}
              material={materials.Color_Roof}
              position={[-0.237, -1.705, 0.004]}
            />
            <mesh
              name="Tube_Half_1B"
              castShadow
              receiveShadow
              geometry={nodes.Tube_Half_1B.geometry}
              material={materials.Color_Roof}
              position={[-0.237, -1.705, 0.004]}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/oneBedroom.glb");
export default OneBedRoomModel;
