import MenuToggle from "./MenuToggle";
import "../styles/navbar.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const listref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY); 
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY;
      setIsOpen(false)
      window.scrollTo({
        top: y - 200,
        behavior: "smooth",
      });
    }
  };
  

  return (
    <section className="navbar_wrapper">
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
        {["Menu", "Lokalizacja", "O Naszej Restauracji", "Opinie"].map(
          (li, index) => {
            return (
              <li onClick={()=>{scrollToSection(li)}} className="navbar_content_input" key={index}>
                {li}
              </li>
            );
          }
        )}
      </motion.section>
    </section>
  );
}
