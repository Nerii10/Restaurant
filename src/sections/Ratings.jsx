// src/components/Ratings.jsx
import ScrollAnimator from "../components/ScrollAnimator";
import { AnimatePresence, motion, scale } from "framer-motion";
import "../styles/Ratings.css";
import reviews from "../data/Reviews.json";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Ratings() {
  const [[currentIndex, direction], setIndex] = useState([0, 0]);

  const currentReview = reviews[currentIndex];

  const reviewRef = useRef(null);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0,
    }),
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      scale: 0,
      opacity: 0,
      transition: { type: "spring", damping: 14 },
    }),
  };

  useEffect(() => {
    console.log(reviewRef?.current?.offsetHeight);
  }, [reviewRef.current]);

  const handleDragEnd = (offsetX) => {
    if (!reviewRef.current) return;
    reviewRef.current = false;

    if (offsetX > 50 && currentIndex > 0) {
      setIndex([currentIndex - 1, -1]);
    } else if (offsetX < -50 && currentIndex < reviews.length - 1) {
      setIndex([currentIndex + 1, 1]);
    }

    setTimeout(() => {
      reviewRef.current = true;
    }, 750);
  };

  return (
    <ScrollAnimator
      rotateRange={[0, 0]}
      blurRange={[0, 3]}
      translateYRange={[0, 100]}
      rotateXRange={[0, 10]}
      offset={["start center", "start end"]}
      headerOpacityRange={[1, 1]}
    >
      {({ y, rotateX, filter, headerOpacity, translateY }) => (
        <motion.section
          id="Opinie"
          className="section_wrapper"
          style={{
            opacity: headerOpacity,
            rotateX: rotateX,
            filter,
            translateY: translateY,
          }}
        >
          <motion.section className="rating_container" layout>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "circInOut" }}
              style={{ position: "relative", zIndex: 1 }}
              className="OpinionHighliht"
            >
              Poznaj Opinie Naszych Gości!
              <motion.div
                style={{
                  position: "absolute",
                  backgroundColor: "rgb(133, 15, 21)",
                  width: "52%",
                  right: 0,
                  top: 0,
                  zIndex: -1,
                  color: "rgb(133, 15, 21)",
                  transform: "skewX(-20deg)",
                  rotate: "3deg",
                }}
                initial={{ opacity: 0, width: "0%" }}
                whileInView={{ opacity: 1, width: "52%" }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, ease: "circInOut", delay: 0.5 }}
              >
                -
              </motion.div>
            </motion.h1>

            <motion.section className="ratings_wrapper" layout>
              <button
                className="rating_buttom"
                onClick={() => {
                  handleDragEnd(55);
                }}
              >
                <ChevronLeft stroke="white" />
              </button>
              <AnimatePresence custom={direction} mode="popLayout">
                <motion.div
                  className="rating"
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate={{
                    x: 0,
                    scale: 1,
                    opacity: 1,
                  }}
                  exit="exit"
                  transition={{
                    type: "tween",
                    duration: 0.2,
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, info) => handleDragEnd(info.offset.x)}
                >
                  <img
                    className="rating_stars"
                    src={`/${currentReview.Rating}.png`}
                    alt="ocena"
                  />
                  <h2 className="rating_header">{currentReview.Opinion}</h2>
                </motion.div>
              </AnimatePresence>
              <button
                className="rating_buttom"
                style={{ right: "20px" }}
                onClick={() => {
                  handleDragEnd(-55);
                }}
              >
                <ChevronRight stroke="white" />
              </button>

              <motion.div
                ref={reviewRef}
                className="rating-static"
                transition={{
                  type: "tween",
                  duration: 0.1,
                  ease: "circInOut",
                }}
              >
                <img
                  className="rating_stars"
                  src={`/${currentReview.Rating}.png`}
                  alt="ocena"
                />
                <h2 className="rating_header">{currentReview.Opinion}</h2>
              </motion.div>
            </motion.section>
          </motion.section>
        </motion.section>
      )}
    </ScrollAnimator>
  );
}
