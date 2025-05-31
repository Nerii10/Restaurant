import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import ScrollAnimator from "../components/ScrollAnimator";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "./translations";

export default function AboutSection() {
  const { language } = useLanguage();
  const ComponentContent = translations[language]?.about;
  return (
    <ScrollAnimator
      rotateRange={[0, 0]}
      blurRange={[0, 3]}
      translateYRange={[0, 100]}
      rotateXRange={[0, 10]}
      offset={["start center", "start end"]}
      headerOpacityRange={[1, 1]}
    >
      {({
        scale,
        rotate,
        translateY,
        headerOpacity,
        headerScale,
        filter,
        rotateX,
      }) => (
        <>
          <motion.section
            style={{
              opacity: headerOpacity,
              rotateX: rotateX,
              filter,
              translateY: translateY,
            }}
            className="section_wrapper"
          >
            <section className="about_container">
              <div
                style={{ width: "90%", height: "90%", position: "relative" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <motion.h1
                    className="about_header_text"
                    style={{
                      position: "relative",
                      width: "fit-content",
                      zIndex: 1,
                    }}
                    initial={{ skewX: "-20deg", x: "-120px", opacity: 0 }}
                    whileInView={{ skewX: "0deg", x: "0px", opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, ease: "circInOut" }}
                  >
                    <motion.span
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgb(133, 15, 21)",
                        zIndex: -1,
                        padding: "2px 5px",
                        transform: "translate(-50%, -50%)",
                        top: "50%",
                        left: "50%",
                        borderRadius: "5px",
                      }}
                      initial={{ width: "0%", padding: "0", opacity: 0 }}
                      whileInView={{
                        width: "100%",
                        opacity: 1,
                        padding: "0px 5px",
                      }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, ease: "circInOut" }}
                    ></motion.span>
                    {ComponentContent.header[0]}
                  </motion.h1>
                  <motion.img
                    src="/About.png"
                    className="img"
                    initial={{ opacity: 0, x: 40, skewX: "-20deg" }}
                    whileInView={{ opacity: 1, x: 0, skewX: "0deg" }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, ease: "circInOut" }}
                  ></motion.img>
                </div>
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "circInOut" }}
                >
                  {ComponentContent.header[1]}
                </motion.h2>
                <motion.h3
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "circInOut", delay: 0.4 }}
                >
                  {ComponentContent.paragraph[0]}
                </motion.h3>
                <motion.h3
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "circInOut", delay: 0.6 }}
                >
                  {ComponentContent.paragraph[1]}
                </motion.h3>

                <br></br>
                <br></br>

                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "start",
                    gap: "10px",
                    textAlign: "center",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40, skew: "-20deg" }}
                    whileInView={{ opacity: 1, y: 0, skew: "0deg" }}
                    viewport={{ once: true }}
                    style={{ width: "33%" }}
                    transition={{ duration: 0.5, ease: "circInOut", delay: 1 }}
                  >
                    <h4 style={{ margin: 0 }}>
                      {ComponentContent.features[0]}
                    </h4>
                    <motion.span className="IconEmoi">✨</motion.span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 40, skew: "-20deg" }}
                    whileInView={{ opacity: 1, y: 0, skew: "0deg" }}
                    viewport={{ once: true }}
                    style={{ width: "33%" }}
                    transition={{
                      duration: 0.5,
                      ease: "circInOut",
                      delay: 1.2,
                    }}
                  >
                    <h4 style={{ margin: 0 }}>
                      {ComponentContent.features[1]}
                    </h4>
                    <span className="IconEmoi">🐠</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 40, skew: "-20deg" }}
                    whileInView={{ opacity: 1, y: 0, skew: "0deg" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "circInOut",
                      delay: 1.4,
                    }}
                    style={{ width: "33%" }}
                  >
                    <h4 style={{ margin: 0 }}>
                      {ComponentContent.features[2]}
                    </h4>
                    <motion.span className="IconEmoi">🍽️</motion.span>
                  </motion.div>
                </div>
              </div>
            </section>
          </motion.section>
        </>
      )}
    </ScrollAnimator>
  );
}
