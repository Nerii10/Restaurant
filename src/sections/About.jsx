import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import ScrollAnimator from "../components/ScrollAnimator";

export default function AboutSection() {
  return (
    <ScrollAnimator
      rotateRange={[0, 0]}
      blurRange={[0, 3]}
      translateYRange={[0, 100]}
      rotateXRange={[0, 10]}
      offset={["end end", "center end"]}
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
          id="O Naszej Restauracji"
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
                    O naszej restauracji
                  </motion.h1>
                  <motion.img
                    src="/Restaurant/About.png"
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
                  Witamy u CZECHA!
                </motion.h2>
                <motion.h3
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "circInOut", delay: 0.4 }}
                >
                  to wyjątkowe miejsce w Międzywodziu, gdzie serwujemy świeże,
                  lokalne ryby prosto z morza.
                </motion.h3>
                <motion.h3
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "circInOut", delay: 0.6 }}
                >
                  Nasze dania łączą tradycję z nowoczesnym smakiem, tworząc
                  niezapomniane doświadczenie kulinarne. Jeśli odwiedzasz
                  Szczecin, zapraszamy również do naszej restauracji w mieście
                  tam czeka na Ciebie pełne menu z wyśmienitymi daniami kuchni
                  polskiej i europejskiej.
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
                    transition={{
                      duration: 0.5,
                      ease: "circInOut",
                      delay: 0.8,
                    }}
                  >
                    <h4 style={{ margin: 0 }}>Świeże ryby</h4>
                    <span className="IconEmoi">🦞</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 40, skew: "-20deg" }}
                    whileInView={{ opacity: 1, y: 0, skew: "0deg" }}
                    viewport={{ once: true }}
                    style={{ width: "33%" }}
                    transition={{ duration: 0.5, ease: "circInOut", delay: 1 }}
                  >
                    <h4 style={{ margin: 0 }}>Klimatyczna atmosfera</h4>
                    <motion.span className="IconEmoi">✨</motion.span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 40, skew: "-20deg" }}
                    whileInView={{ opacity: 1, y: 0, skew: "0deg" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "circInOut",
                      delay: 1.2,
                    }}
                    style={{ width: "33%" }}
                  >
                    <h4 style={{ margin: 0 }}>Smak, który pokochasz</h4>
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
