import { motion } from "framer-motion";

function AnimatedImg({ src, alt, isActive, smoothie }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className="absolute top-[59%] left-[45%] opacity-0"
      animate={{
        opacity: isActive === smoothie ? 0.2 : 0,
      }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
    />
  );
}

export default AnimatedImg;
