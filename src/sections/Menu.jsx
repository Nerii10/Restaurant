import { motion } from "framer-motion";
import "../styles/Menu.css";
import { useEffect, useRef, useState } from "react";

//Icons
import { Fish, Soup, GlassWater, CakeSlice, Salad, Leaf } from "lucide-react";

//Data
import Data from "../data/Dania.json";

//Component
import MenuToggle from "../components/MenuToggle";
import { useLanguage } from "../context/LanguageContext";

export function MenuList({ data, category, index, language }) {
  const [isOpen, setIsOpen] = useState(false);
  const [fullHeight, setFullHeight] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      setFullHeight(listRef.current.scrollHeight);
    }
  }, [data]);

  useEffect(() => {
    setIsOpen(false);
  }, [language]);

  const CategoryIcon = () => {
    const iconSize = 30;
    switch (data.id) {
      case 1:
        return <Fish size={iconSize} />;
      case 0:
        return <Soup size={iconSize} />;
      case 2:
        return <Leaf size={iconSize} />;
      case 3:
        return <Salad size={iconSize} />;
      default:
        return null;
    }
  };

  return (
    <>
      <motion.button
        className="menu_list_category"
        animate={
          index == 3 && !isOpen
            ? { borderColor: "rgba(255,255,255,0)" }
            : { borderColor: "rgb(137, 137, 137)" }
        }
        transition={{ duration: 0.5 }}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <h1>
          {" "}
          <CategoryIcon /> {data.nazwa}
        </h1>
        <MenuToggle active={isOpen} />
      </motion.button>

      <motion.section
        ref={listRef}
        className="menu_list_inputs_wrapper"
        initial={{ height: 0, overflow: "hidden", padding: 0 }}
        animate={isOpen ? { height: fullHeight } : { height: 0 }}
        transition={{
          type: "spring",
          damping: !isOpen ? 23 : (fullHeight / 1000) * 30,
        }}
      >
        <br></br>
        {data.dania?.map((item, index) => (
          <>
            <section key={index} className="menu_list_input">
              <section className="menu_list_input_top">
                <h2>{item.nazwa}</h2>
                <h2 className="price">{item.cena} zł</h2>
              </section>
              <section className="menu_list_input_bottom">
                <p>{item.opis}</p>
              </section>
            </section>
            {index != data.dania.length - 1 && (
              <hr className="menu_list_input_hr"></hr>
            )}
          </>
        ))}
        <br></br>
      </motion.section>
    </>
  );
}

export default function Menu() {
  const { language } = useLanguage();

  return (
    <motion.section className="menu_wrapper" id="Menu">
      <motion.h1
        className="menu_header"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", damping: 23, duration: 0.5 }}
      >
        Menu
        <motion.div
          className="menu_header_background"
          initial={{ width: "0%", opacity: 0 }}
          whileInView={{ width: "120%", opacity: 1 }}
          viewport={{ once: false }}
          transition={{ type: "spring", damping: 23, delay: 0.5 }}
        ></motion.div>
      </motion.h1>

      <section className="menu_lists_container">
        {Data[language]?.map((list, index) => (
          <MenuList
            key={index}
            data={list}
            category={list.nazwa}
            index={index}
            language={language}
          />
        ))}
      </section>
    </motion.section>
  );
}
