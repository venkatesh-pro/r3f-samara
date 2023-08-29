import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
const TwoBedRoomModel = ({ allData }) => {
  const { nodes, materials } = useGLTF("/models/twoBedroom.glb");
  return (
    <group rotation-y={Math.PI / 2} dispose={null}>
      <group name="Scene">
        <group name="2Bedroom">
          <group name="2B_interior" position={[-1.519, 0, 0]}>
            <mesh
              name="Bed_2B"
              castShadow
              receiveShadow
              geometry={nodes.Bed_2B.geometry}
              material={materials.Fabric_1B}
              position={[-3.955, -1.154, 0.995]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
              scale={3.242}
            />
            <mesh
              name="Chair_2B"
              castShadow
              receiveShadow
              geometry={nodes.Chair_2B.geometry}
              material={materials.Chair}
              position={[1.764, -0.677, -1.503]}
              rotation={[Math.PI / 2, 0, -Math.PI / 4]}
              scale={0.025}
            />
            <mesh
              name="Const_Bath_2B"
              castShadow
              receiveShadow
              geometry={nodes.Const_Bath_2B.geometry}
              material={materials.Bath}
              position={[-0.281, -0.139, 1.307]}
              scale={0.025}
            />
            <mesh
              name="Faucet_2B"
              castShadow
              receiveShadow
              geometry={nodes.Faucet_2B.geometry}
              material={materials.Faucet}
              position={[2.205, -0.225, 1.869]}
            />
            <mesh
              name="Glass_Bath_2B"
              castShadow
              receiveShadow
              geometry={nodes.Glass_Bath_2B.geometry}
              material={materials.glassBath}
              position={[-0.275, -0.162, 1.306]}
              scale={0.025}
            />
            <mesh
              name="Lampe_2B"
              castShadow
              receiveShadow
              geometry={nodes.Lampe_2B.geometry}
              material={materials.Lamp}
              position={[-5.261, -0.146, -1.72]}
              scale={0.025}
            />
            <mesh
              name="Mirror_2B"
              castShadow
              receiveShadow
              geometry={nodes.Mirror_2B.geometry}
              material={materials.Chrome}
              position={[-0.896, 0.326, 2.05]}
              scale={0.025}
            />
            <mesh
              name="Oven_2B"
              castShadow
              receiveShadow
              geometry={nodes.Oven_2B.geometry}
              material={materials.Oven_1B}
              position={[-0.128, -0.707, 0.092]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Oven_Al_2B"
              castShadow
              receiveShadow
              geometry={nodes.Oven_Al_2B.geometry}
              material={materials.aluminium}
              position={[-0.128, -0.707, 0.092]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Shelves_2B"
              castShadow
              receiveShadow
              geometry={nodes.Shelves_2B.geometry}
              material={materials.Shelves}
              position={[1.77, 0.495, 1.89]}
            />
            <group name="Shelves_Chrome_2B" position={[1.77, 0.495, 1.89]}>
              <mesh
                name="Shelves_Chrome_2B_1"
                castShadow
                receiveShadow
                geometry={nodes.Shelves_Chrome_2B_1.geometry}
                material={materials.Chrome}
              />
              <mesh
                name="Shelves_Chrome_2B_2"
                castShadow
                receiveShadow
                geometry={nodes.Shelves_Chrome_2B_2.geometry}
                material={materials.Glass_mat_black}
              />
            </group>
            <mesh
              name="Sofa_2B"
              castShadow
              receiveShadow
              geometry={nodes.Sofa_2B.geometry}
              material={materials.Sofa}
              position={[4.448, -0.793, -1.176]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.025}
            />
            <mesh
              name="WoodFurniture_2B"
              castShadow
              receiveShadow
              geometry={nodes.WoodFurniture_2B.geometry}
              material={materials.Wood_1B}
              position={[2.09, -0.464, -1.162]}
              rotation={[Math.PI / 2, 0, -0.273]}
              scale={0.025}
            />
          </group>
          <group name="Baseline_2B" position={[-1.519, 0, 0]}>
            <mesh
              name="Air_purification_2B"
              castShadow
              receiveShadow
              geometry={nodes.Air_purification_2B.geometry}
              material={materials.Air}
              position={[-5.81, -1.443, 0.957]}
              rotation={[0, -1.571, 0]}
              scale={0.905}
            />
            <mesh
              name="Awning_DoorEnt_Front_2B"
              castShadow
              receiveShadow
              geometry={nodes.Awning_DoorEnt_Front_2B.geometry}
              material={materials.Color_Exterior}
              position={[-1.831, 1.294, -2.261]}
              scale={0.025}
            />
            <mesh
              name="Bottom_2B"
              castShadow
              receiveShadow
              geometry={nodes.Bottom_2B.geometry}
              material={materials.Color_Dark}
              position={[0, -1.377, 0]}
              scale={0.025}
            />
            <mesh
              name="Desk_2B"
              castShadow
              receiveShadow
              geometry={nodes.Desk_2B.geometry}
              material={materials.Cedar}
              position={[-1.829, -1.526, -3.079]}
              rotation={[0, 1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="DoorEnt_2B"
              castShadow
              receiveShadow
              geometry={nodes.DoorEnt_2B.geometry}
              material={materials.Dark_Bronze}
              position={[-1.833, -0.143, -2.194]}
              rotation={[-Math.PI, 0, 0]}
              scale={-1}
            />
            <mesh
              name="ElectricalPanel1_Conduit_2B"
              castShadow
              receiveShadow
              geometry={nodes.ElectricalPanel1_Conduit_2B.geometry}
              material={materials.Color_Exterior}
              position={[-5.622, -1.589, 2.269]}
              rotation={[0, -1.571, 0]}
              scale={0.905}
            />
            <mesh
              name="Exhaust_2B"
              castShadow
              receiveShadow
              geometry={nodes.Exhaust_2B.geometry}
              material={materials.Color_Exterior}
              position={[1.774, 0.692, 2.221]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0.025}
            />
            <mesh
              name="FireSprinkler_2B"
              castShadow
              receiveShadow
              geometry={nodes.FireSprinkler_2B.geometry}
              material={materials.Color_Red}
              position={[8.645, 1.803, 0]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              name="Floor_2B"
              castShadow
              receiveShadow
              geometry={nodes.Floor_2B.geometry}
              material={materials.Floor_2B}
              position={[0, -1.377, 0]}
              scale={0.025}
            />
            <mesh
              name="Frame_Around_2B"
              castShadow
              receiveShadow
              geometry={nodes.Frame_Around_2B.geometry}
              material={materials.Color_Exterior}
              position={[1.516, -1.473, 0]}
              scale={0.025}
            />
            <mesh
              name="Frame_DW_2B"
              castShadow
              receiveShadow
              geometry={nodes.Frame_DW_2B.geometry}
              material={materials.Color_Exterior}
              position={[-1.829, 0.336, 2.21]}
            />
            <mesh
              name="Glass_2B"
              castShadow
              receiveShadow
              geometry={nodes.Glass_2B.geometry}
              material={materials.glassClear}
              position={[2.133, -0.185, -2.269]}
              scale={0.025}
            />
            <mesh
              name="GlassDoor_2B"
              castShadow
              receiveShadow
              geometry={nodes.GlassDoor_2B.geometry}
              material={materials.glassDoor}
              position={[-1.833, -0.143, -2.194]}
              rotation={[-Math.PI, 0, 0]}
              scale={-1}
            />
            <mesh
              name="Piles_2B"
              castShadow
              receiveShadow
              geometry={nodes.Piles_2B.geometry}
              material={materials.Color_Piles}
              position={[0, -1.654, 0]}
              scale={0.025}
            />
            <mesh
              name="Roof_2B"
              castShadow
              receiveShadow
              geometry={nodes.Roof_2B.geometry}
              material={materials.Color_Roof}
              position={[0, 2.099, 0]}
              scale={0.025}
            />
            <mesh
              name="Sanr_2B"
              castShadow
              receiveShadow
              geometry={nodes.Sanr_2B.geometry}
              material={materials.Color_Roof}
              position={[-0.148, 2.367, 0.289]}
              rotation={[0.394, 0.175, 0]}
              scale={0.025}
            />
            <mesh
              name="Spigot_2B"
              castShadow
              receiveShadow
              geometry={nodes.Spigot_2B.geometry}
              material={materials.Bronze}
              position={[-0.281, -0.624, 2.26]}
              rotation={[0, 1.571, 0]}
              scale={1.594}
            />
            <mesh
              name="Undersructure_2B"
              castShadow
              receiveShadow
              geometry={nodes.Undersructure_2B.geometry}
              material={materials.Color_ExteriorSupp}
              position={[-1.829, -1.526, -3.079]}
              rotation={[0, 1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Wall_e_2B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_e_2B.geometry}
              material={materials.Color_Exterior}
              position={[-2.431, -0.106, -2.254]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Wall_i_2B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_i_2B.geometry}
              material={materials.Wall_2B}
              position={[1.519, 0, 0]}
            />
            <mesh
              name="Window_2B"
              castShadow
              receiveShadow
              geometry={nodes.Window_2B.geometry}
              material={materials.Dark_Bronze}
              position={[1.519, 0, 0]}
              scale={0.025}
            />
          </group>
          <group name="Baseline_Front_2B" position={[0.615, -0.185, -2.269]}>
            <mesh
              name="Frame_e_FrontWindow_2B"
              castShadow
              receiveShadow
              geometry={nodes.Frame_e_FrontWindow_2B.geometry}
              material={materials.Color_Exterior}
              position={[0.296, 0.214, 0.018]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Frame_m_FrontWindow_2B"
              castShadow
              receiveShadow
              geometry={nodes.Frame_m_FrontWindow_2B.geometry}
              material={materials.Dark_Bronze}
              position={[0.296, 0.214, 0.018]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Glass_e_FrontWindow_2B"
              castShadow
              receiveShadow
              geometry={nodes.Glass_e_FrontWindow_2B.geometry}
              material={materials.glassClear}
              position={[0.296, 0.214, 0.018]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Socket_e_Front_2B"
              castShadow
              receiveShadow
              geometry={nodes.Socket_e_Front_2B.geometry}
              material={materials.Color_Exterior}
              position={[0.981, -0.461, 0.001]}
              rotation={[0, 1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Wall_e_FrontWindow_2B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_e_FrontWindow_2B.geometry}
              material={materials.Color_Exterior}
              position={[-4.565, 0.079, 0.015]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Wall_i_FrontWindow_2B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_i_FrontWindow_2B.geometry}
              material={materials.Wall_2B}
              position={[-0.615, 0.185, 2.269]}
            />
          </group>
          <group name="Baseline_Left_2B" position={[6.923, 0.056, 0]}>
            <mesh
              name="Frame_e_LeftWindow_2B"
              castShadow
              receiveShadow
              geometry={nodes.Frame_e_LeftWindow_2B.geometry}
              material={materials.Color_Exterior}
              position={[0.193, -0.027, 0.829]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              name="Frame_m_LeftWindow_2B"
              castShadow
              receiveShadow
              geometry={nodes.Frame_m_LeftWindow_2B.geometry}
              material={materials.Dark_Bronze}
              position={[0.193, -0.027, 0.829]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={0.025}
            />
            <mesh
              name="Glass_e_LeftWindow_2B"
              castShadow
              receiveShadow
              geometry={nodes.Glass_e_LeftWindow_2B.geometry}
              material={materials.glassClear}
              position={[0.193, -0.027, 0.829]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={0.025}
            />
            <mesh
              name="Socket_e_Left_2B"
              castShadow
              receiveShadow
              geometry={nodes.Socket_e_Left_2B.geometry}
              material={materials.Color_Exterior}
              position={[0.21, -0.702, 1.514]}
              scale={0.025}
            />
            <mesh
              name="Wall_e_LeftWindow_2B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_e_LeftWindow_2B.geometry}
              material={materials.Color_Exterior}
              rotation={[0, 1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Wall_i_LeftWindow_2B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_i_LeftWindow_2B.geometry}
              material={materials.Wall_2B}
              position={[0.051, -0.015, 0.552]}
              scale={0.025}
            />
          </group>
          <group name="DoubleDoor_Front_2B" position={[0.615, -0.185, -2.269]}>
            <mesh
              name="Awning_DDF_2B"
              castShadow
              receiveShadow
              geometry={nodes.Awning_DDF_2B.geometry}
              material={materials.Color_Exterior}
              scale={0.025}
            />
            <mesh
              name="Desk_DDF_2B"
              castShadow
              receiveShadow
              geometry={nodes.Desk_DDF_2B.geometry}
              material={materials.Cedar}
              position={[-0.002, -0.991, -0.807]}
              rotation={[0, 1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Door_DDF_2B"
              castShadow
              receiveShadow
              geometry={nodes.Door_DDF_2B.geometry}
              material={materials.Dark_Bronze}
              rotation={[-Math.PI, 0, 0]}
              scale={-1}
            />
            <mesh
              name="Frame_DDF_2B"
              castShadow
              receiveShadow
              geometry={nodes.Frame_DDF_2B.geometry}
              material={materials.Color_Exterior}
            />
            <mesh
              name="Glass_DDF_2B"
              castShadow
              receiveShadow
              geometry={nodes.Glass_DDF_2B.geometry}
              material={materials.glassClear}
              scale={0.025}
            />
            <mesh
              name="Socket_DDF_2B"
              castShadow
              receiveShadow
              geometry={nodes.Socket_DDF_2B.geometry}
              material={materials.Color_Exterior}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0.025}
            />
            <mesh
              name="Undersructure_DDF_2B"
              castShadow
              receiveShadow
              geometry={nodes.Undersructure_DDF_2B.geometry}
              material={materials.Color_ExteriorSupp}
              position={[0, -1.151, -0.806]}
              rotation={[0, 1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Wall_e_DDF_2B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_e_DDF_2B.geometry}
              material={materials.Color_Exterior}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Wall_i_DDF_2B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_i_DDF_2B.geometry}
              material={materials.Wall_2B}
            />
          </group>
          <group name="DoubleDoor_Left_2B" position={[6.923, 0.056, 0]}>
            <mesh
              name="Awning_DDL_2B"
              castShadow
              receiveShadow
              geometry={nodes.Awning_DDL_2B.geometry}
              material={materials.Color_Exterior}
              position={[0.206, 1.238, 0.542]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Deck_DDL_2B"
              castShadow
              receiveShadow
              geometry={nodes.Deck_DDL_2B.geometry}
              material={materials.Cedar}
              position={[0.217, -1.213, 0.533]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Downlight_e_DDL_2B"
              castShadow
              receiveShadow
              geometry={nodes.Downlight_e_DDL_2B.geometry}
              material={materials.Color_Exterior}
              position={[0.203, 0.521, 1.514]}
              scale={0.025}
            />
            <mesh
              name="Frame_e_DDL_2B"
              castShadow
              receiveShadow
              geometry={nodes.Frame_e_DDL_2B.geometry}
              material={materials.Color_Exterior}
              position={[0.211, -0.241, 0.544]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Frame_m_DDL_2B"
              castShadow
              receiveShadow
              geometry={nodes.Frame_m_DDL_2B.geometry}
              material={materials.Dark_Bronze}
              position={[0.137, -0.199, -3.423]}
              rotation={[-Math.PI, 1.571, 0]}
              scale={-1}
            />
            <mesh
              name="Glass_DDL_2B"
              castShadow
              receiveShadow
              geometry={nodes.Glass_DDL_2B.geometry}
              material={materials.glassClear}
              position={[0.137, -0.199, -3.423]}
              rotation={[-Math.PI, 1.571, 0]}
              scale={-1}
            />
            <mesh
              name="Undersructure_DDL_2B"
              castShadow
              receiveShadow
              geometry={nodes.Undersructure_DDL_2B.geometry}
              material={materials.Color_ExteriorSupp}
              position={[0.217, -1.213, 0.533]}
              rotation={[0, -1.571, 0]}
              scale={0.025}
            />
            <mesh
              name="Wall_e_DDL_2B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_e_DDL_2B.geometry}
              material={materials.Color_Exterior}
              position={[0.197, 0.405, 0.182]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0.025}
            />
            <mesh
              name="Wall_i_DDL_2B"
              castShadow
              receiveShadow
              geometry={nodes.Wall_i_DDL_2B.geometry}
              material={materials.Wall_2B}
              position={[0.051, -0.13, 0.362]}
              scale={0.025}
            />
          </group>
          <group name="SolarPanel_2B" position={[-1.519, 2.112, 0]}>
            <mesh
              name="ElectricalPanel_Conduit_2B"
              castShadow
              receiveShadow
              geometry={nodes.ElectricalPanel_Conduit_2B.geometry}
              material={materials.Color_Exterior}
              position={[-5.742, -2.303, 1.762]}
              rotation={[0, -1.571, 0]}
              scale={0.905}
            />
            <group name="SolarPanel_Left_2B" position={[0, 0, -1.247]}>
              <mesh
                name="ConstSP_Left_2B"
                castShadow
                receiveShadow
                geometry={nodes.ConstSP_Left_2B.geometry}
                material={materials.Color_Dark}
                position={[-0.074, 0.025, 0.069]}
                rotation={[0.368, -Math.PI / 2, 0]}
                scale={0.025}
              />
              <mesh
                name="Shield_Left_2B"
                castShadow
                receiveShadow
                geometry={nodes.Shield_Left_2B.geometry}
                material={materials.Color_Dark}
                position={[0, -0.384, -0.854]}
                rotation={[-0.012, 0, 0]}
              />
              <group name="SP_Left_2B" rotation={[-0.01, 0, 0]}>
                <mesh
                  name="SP_Left_2B_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.SP_Left_2B_1.geometry}
                  material={materials.Color_Solar}
                />
                <mesh
                  name="SP_Left_2B_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.SP_Left_2B_2.geometry}
                  material={materials.Solar_Panel}
                />
              </group>
            </group>
            <group name="SolarPanel_Right_2B" position={[0, 0, 1.247]}>
              <mesh
                name="ConstSP_Right_2B"
                castShadow
                receiveShadow
                geometry={nodes.ConstSP_Right_2B.geometry}
                material={materials.Color_Dark}
                position={[-0.021, -0.046, -0.003]}
                rotation={[0.368, -Math.PI / 2, 0]}
                scale={0.025}
              />
              <mesh
                name="Shield_Right_2B"
                castShadow
                receiveShadow
                geometry={nodes.Shield_Right_2B.geometry}
                material={materials.Color_Dark}
                position={[0, -0.393, 0.835]}
                rotation={[-0.012, 0, 0]}
              />
              <group name="SP_Right_2B" rotation={[-0.01, 0, 0]}>
                <mesh
                  name="SP_Right_2B_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.SP_Right_2B_1.geometry}
                  material={materials.Color_Solar}
                />
                <mesh
                  name="SP_Right_2B_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.SP_Right_2B_2.geometry}
                  material={materials.Solar_Panel}
                />
              </group>
            </group>
          </group>
          <group name="SolarСable_2B" position={[-7.177, 1.375, 2.002]}>
            <mesh
              name="CableConduit_2B"
              castShadow
              receiveShadow
              geometry={nodes.CableConduit_2B.geometry}
              material={materials.Color_Exterior}
              rotation={[0, -1.571, 0]}
              scale={0.905}
            />
            <mesh
              name="Tube_Full_2B"
              castShadow
              receiveShadow
              geometry={nodes.Tube_Full_2B.geometry}
              material={materials.Color_Roof}
              position={[-0.237, -1.705, 0.004]}
            />
            <mesh
              name="Tube_Half_2B"
              castShadow
              receiveShadow
              geometry={nodes.Tube_Half_2B.geometry}
              material={materials.Color_Roof}
              position={[-0.237, -1.705, 0.004]}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/twoBedroom.glb");
export default TwoBedRoomModel;
