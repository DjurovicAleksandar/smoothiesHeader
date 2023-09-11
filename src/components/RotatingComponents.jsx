import { motion, useAnimation } from "framer-motion";

import SmoothieRotation from "./reusalbe/SmoothieRotation";
import { smoothies } from "./helpers/Database";
import { useEffect } from "react";
import { startAnimation } from "./helpers/Helper";

const transition = {
  delay: 0.2,
  duration: 2,
};

function RotatingComponents({ isRotating, isActive }) {
  const redControls = useAnimation();
  const yellowControls = useAnimation();
  const greenControls = useAnimation();
  const purpleControls = useAnimation();

  const controls = [redControls, yellowControls, greenControls, purpleControls];

  useEffect(() => {
    startAnimation(isActive, "red", redControls);
    startAnimation(isActive, "yellow", yellowControls);
    startAnimation(isActive, "green", greenControls);
    startAnimation(isActive, "purple", purpleControls);
  }, [isActive, redControls, yellowControls, greenControls, purpleControls]);

  return (
    <div className="absolute -right-[710px] -bottom-[400px] rotate-12">
      <motion.div
        className="w-[1100px] h-[1100px] relative  ease-linear"
        animate={{
          rotate: isRotating,
        }}
        transition={transition}
      >
        {smoothies.map(({ className, src, alt }, i) => {
          return (
            <SmoothieRotation
              key={className + i}
              className={className}
              src={src}
              alt={alt}
              controls={controls[i]}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

export default RotatingComponents;
