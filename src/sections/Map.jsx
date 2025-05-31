import { motion } from "framer-motion";
import "../styles/Map.css";
import ScrollAnimatior from "../components/ScrollAnimator.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import { translations } from "./translations.js";

export default function Map() {
  const { language } = useLanguage();
  const ComponentContent = translations[language]?.map;

  return (
    <ScrollAnimatior
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
            <section className="map_container">
              <section className="find_us_map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.0923827498872!2d14.695570186639836!3d54.007406204847534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa858778023fdf%3A0xb1094cb70a86f2ec!2sU%20Czecha!5e0!3m2!1spl!2spl!4v1739991418204!5m2!1spl!2spl"
                  width="100%"
                  className="map_widget"
                  height="100%"
                  allowfullscreen=""
                  loading="eager"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </section>

              <section className="find_us_text">
                <h1>{ComponentContent.header}</h1>
                <img src="/Map.png"></img>
              </section>
            </section>
          </motion.section>
        </>
      )}
    </ScrollAnimatior>
  );
}
