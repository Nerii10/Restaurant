import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/LanguageChanger.css";
import { motion } from "framer-motion";

export default function LanguageChanger() {
  const { language, setLanguage } = useLanguage();
  const languages = {
    pl: {
      flag: "Flag_of_Poland.svg.png",
      title: "PL",
    },
    en: {
      flag: "Flag_of_United_Kingdom.svg.png",
      title: "EN",
    },
    de: {
      flag: "Flag_of_Germany.svg.png",
      title: "DE",
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="language_wrapper"
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
    >
      <div className="language_container">
        <img src={`/${languages[language].flag}`} className="language_flag" />
        <p className="language_title">{languages[language].title}</p>
      </div>

      <motion.div
        className="other_languages"
        initial={{ height: 0 }}
        animate={
          isOpen
            ? { height: "fit-content", pointerEvents: "all" }
            : { height: 0, pointerEvents: "none" }
        }
        transition={{ duration: 0.2 }}
      >
        {["en", "pl", "de"]
          .filter((l) => l != language)
          .map((lang) => {
            return (
              <div className="language_container" onClick={() => {setLanguage(lang)}}>
                <img
                  src={`/${languages[lang].flag}`}
                  className="language_flag"
                />
                <p className="language_title">{languages[lang].title}</p>
              </div>
            );
          })}
      </motion.div>
    </div>
  );
}
