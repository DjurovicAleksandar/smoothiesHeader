import { motion } from "framer-motion";

import AnimatedImg from "./reusalbe/AnimatedImg";
import { backgroundColors, bgObjectImages } from "./helpers/Database";
import { colorAnimation } from "./helpers/Helper";

function Background({ isActive }) {
  return (
    <motion.div
      className="w-full h-full z-0 object-cover relative"
      animate={() =>
        colorAnimation(isActive, backgroundColors, "backgroundColor")
      }
      transition={{
        delay: 0.2,
        duration: 2,
        ease: "circOut",
      }}
    >
      {bgObjectImages.map(({ smoothie, src, alt }, i) => {
        return (
          <AnimatedImg
            key={i}
            src={src}
            alt={alt}
            smoothie={smoothie}
            isActive={isActive}
          />
        );
      })}
    </motion.div>
  );
}

export default Background;
