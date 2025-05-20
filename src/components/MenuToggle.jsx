import { motion } from "framer-motion";
import "../styles/MenuToggle.css";

export default function MenuToggle({ active }) {
  return (
    <motion.div className="menu_toggle_container">
      <motion.span
        className="bar"
        animate={{
          y: active ? 8 : 6,
          rotate: active ? -45 : 0,
        }}
      />
      <motion.span
        className="bar"
        animate={{
          y: active ? -14 : -6,
          rotate: active ? 45 : 0,
        }}
      />
    </motion.div>
  );
}
