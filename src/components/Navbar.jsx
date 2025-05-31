import MenuToggle from "./MenuToggle";
import "../styles/navbar.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../sections/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const listref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const { language } = useLanguage();
  const ComponentContent = translations[language]?.navbar;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setIsOpen(false);
    }
  }, [isVisible, isOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      setIsOpen(false);
      const rect = el.getBoundingClientRect();
      const scrollTop =
        window.scrollY + rect.top - window.innerHeight / 2 + rect.height / 2;
      window.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(()=>{
    setIsOpen(false)
  },[language])

  return (
    <motion.section
      className="navbar_wrapper"
      initial={{ top: -20, opacity: 0, pointerEvents: "none" }}
      animate={
        isVisible
          ? { top: 20, opacity: 1, pointerEvents: "all" }
          : { top: -20, opacity: 0, pointerEvents: "none" }
      }
      transition={{ type: "spring", damping: 12 }}
    >
      <section
        className="navbar_header"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <h1>UCzecha</h1>
        <MenuToggle active={isOpen} />
      </section>

      <motion.section
        ref={listref}
        className="navbar_content"
        initial={{ height: 0, padding: "0px" }}
        animate={
          isOpen
            ? { height: listref.current.scrollHeight + 20, padding: "10px" }
            : { height: 0, padding: "0px" }
        }
      >
        {ComponentContent.map(
          (li, index) => {
            return (
              <li
                onClick={() => {
                  scrollToSection(li.id);
                }}
                className="navbar_content_input"
                key={index}
              >
                {li.title}
              </li>
            );
          }
        )}
      </motion.section>
    </motion.section>
  );
}
