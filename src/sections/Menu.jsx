import { motion } from "framer-motion";
import "../styles/Menu.css";
import { useEffect, useRef, useState } from "react";

//Icons
import { Fish, Soup, GlassWater, CakeSlice } from "lucide-react";

//Data
import DaniaGlowne from "../data/DaniaGlowne.json";
import MenuToggle from "../components/MenuToggle";

export function MenuList({ data, category, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const [fullHeight, setFullHeight] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      setFullHeight(listRef.current.scrollHeight);
    }
  }, [data]);

  const CategoryIcon = () => {
    const iconSize = 30;
    switch (category) {
      case "Dania Główne":
        return <Fish size={iconSize} />;
      case "Zupy":
        return <Soup size={iconSize} />;
      case "Przystawki":
        return <CakeSlice size={iconSize} />;
      case "Napoje":
        return <GlassWater size={iconSize} />;
      default:
        return null;
    }
  };

  return (
    <>
      <motion.section
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
          <CategoryIcon /> {category}
        </h1>
        <MenuToggle active={isOpen} />
      </motion.section>

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
        {data?.map((item, index) => (
          <>
            <section key={index} className="menu_list_input">
              <section className="menu_list_input_top">
                <h2>{item.name}</h2>
                <h2 className="price">{item.price}</h2>
              </section>
              <section className="menu_list_input_bottom">
                <p>{item.description}</p>
              </section>
            </section>
            {index != data.length - 1 && (
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
        {[
          { data: DaniaGlowne, category: "Dania Główne" },
          { data: DaniaGlowne, category: "Zupy" },
          { data: DaniaGlowne, category: "Przystawki" },
          { data: DaniaGlowne, category: "Napoje" },
        ].map((list, index) => (
          <MenuList
            key={index}
            data={list.data}
            category={list.category}
            index={index}
          />
        ))}
      </section>
    </motion.section>
  );
}
