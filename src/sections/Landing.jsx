import ScrollAnimator from "../components/ScrollAnimator";
import "../styles/landing.css";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <ScrollAnimator className={"landing_wrapper"}>
      {({ scale, rotate, translateY, headerOpacity, headerScale }) => (
        <>
          <motion.img
            style={{ scale, rotate }}
            src="r/Back.webp"
            className="landing_img"
            alt="Świeże ryby w Międzywodziu – restauracja U Czecha"
          />
          <motion.section
            className="landing_text"
            style={{
              y: translateY,
              opacity: headerOpacity,
              scale: headerScale,
            }}
          >
            <motion.h1 className="landing_header">U Czecha!</motion.h1>
            <p className="landing_paragraph">
              Tradycyjna kuchnia polska, świeże ryby prosto z Bałtyku i rodzinna
              atmosfera
              <br /> - zapraszamy do restauracji U Czecha w sercu Międzywodzia.
            </p>
          </motion.section>
        </>
      )}
    </ScrollAnimator>
  );
}
