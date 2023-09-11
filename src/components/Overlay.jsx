import { motion } from "framer-motion";
import { colorAnimation } from "./helpers/Helper";
import { textColors } from "./helpers/Database";

function Overlay({ children, isActive }) {
  return (
    <div className="w-full h-full absolute inset-0 p-44 pt-20 z-50 ">
      <div className="w-[800px] flex flex-col items-start justify-end gap-44">
        <div className="relative">
          <h1
            id="overlay__text"
            className="text-8xl font-black uppercase mb-10 absolute z-[200]"
          >
            Sm<span className="text-white">oo</span>
            <motion.span
              animate={() => colorAnimation(isActive, textColors, "color")}
              transition={{
                delay: 0.2,
                duration: 2,
                ease: "circOut",
              }}
            >
              thies
            </motion.span>
          </h1>
          <p className="text-white text-5xl mt-28 font-thin">
            We believe that wellness should never compromise on flavor, and
            that&apos;s why our expertly crafted smoothie creations are both
            nutritious and delicious.
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}

export default Overlay;
