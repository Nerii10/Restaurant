import ScrollAnimator from "../components/ScrollAnimator";
import { useLanguage } from "../context/LanguageContext";
import "../styles/landing.css";
import { motion } from "framer-motion";
import { translations } from "./translations";

export default function Landing() {
  const { language } = useLanguage();
  const ComponentContent = translations[language]?.landing;

  return (
    <ScrollAnimator className={"landing_wrapper"}>
      {({ scale, rotate, translateY, headerOpacity, headerScale }) => (
        <>
          <motion.img
            style={{ scale, rotate }}
            src="/Back.webp"
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
            <motion.h1 className="landing_header">
              {ComponentContent.header}
            </motion.h1>
            <p className="landing_paragraph">{ComponentContent.paragraph}</p>
          </motion.section>
        </>
      )}
    </ScrollAnimator>
  );
}
