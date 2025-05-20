import { motion } from "framer-motion";

export default function Footer() {
  const Data = new Date();
  const Year = Data.getFullYear();

  return (
    <>
      <motion.div
        style={{
          height: "100px",
          width: "100%",
          zIndex:2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "20px",
          boxSizing: "border-box",
          alignItems: "center",
          backgroundColor: "rgb(32, 32, 32)",
        }}
      >
        <p style={{ margin: 0 }}>{Year} ©</p>
        <p style={{ margin: 0 }}>Website by nerii</p>
      </motion.div>
    </>
  );
}
