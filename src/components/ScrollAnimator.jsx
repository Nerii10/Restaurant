import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollAnimator({
  children,
  offset = ["start start", "end start"],
  damping = 23,
  scaleRange = [1, 1.5],
  opacityRange = [1, 0],
  rotateRange = [0, 5],
  translateYRange = [0, 450],
  headerOpacityRange = [1, -0.7],
  blurRange = [0, 0],
  headerScaleRange = [1, 0.8],
  className,
  rotateXRange= [0,0]
}) {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset,
  });

  const smoothYProgress = useSpring(scrollYProgress, { damping });

  // Użycie zakresów z propsów
  const scale = useTransform(smoothYProgress, [0, 1], scaleRange);
  const opacity = useTransform(smoothYProgress, [0, 1], opacityRange);
  const rotate = useTransform(smoothYProgress, [0, 1], rotateRange);
  const translateY = useTransform(smoothYProgress, [0, 1], translateYRange);
  const rotateX = useTransform(smoothYProgress, [0, 1], rotateXRange);
  const headerOpacity = useTransform(
    smoothYProgress,
    [0, 1],
    headerOpacityRange
  );
  const headerScale = useTransform(smoothYProgress, [0, 1], headerScaleRange);
  const filter = useTransform(
    smoothYProgress,
    [0, 1],
    [`blur(${blurRange[0]}px)`, `blur(${blurRange[1]}px)`]
  );

  return (
    <motion.section style={{transformStyle:'preserve-3d'}} ref={targetRef} className={className}>
      {children({
        scale,
        filter,
        opacity,
        rotate,
        rotateX,
        translateY,
        headerOpacity,
        headerScale,
      })}
    </motion.section>
  );
}
