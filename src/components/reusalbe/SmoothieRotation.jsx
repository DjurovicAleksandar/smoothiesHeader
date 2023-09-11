import { motion } from "framer-motion";

const variants = { hidden: { rotate: 180 }, visible: { rotate: 0 } };

function SmoothieRotation({ src, alt, controls, className }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ delay: 0.2, duration: 2 }}
      className={`absolute w-[50%] h-[50%] rounded-full ${className}`}
    >
      <img src={src} className="w-full h-full" alt={alt} />
    </motion.div>
  );
}

export default SmoothieRotation;
