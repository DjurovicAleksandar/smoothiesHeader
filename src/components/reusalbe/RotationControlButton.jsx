import { motion } from "framer-motion"; // Import useAnimation hook

const onHover = {
  scale: 1.1,
  transition: { duration: 0.3, ease: "easeIn" },
};
const onTap = {
  scale: 0.9,
  transition: { duration: 0.3, ease: "easeOut" },
};

function RotationControlButton(props) {
  const { src, degree, onIsRotating, onIsActive, smoothieName } = props;

  return (
    <motion.div
      whileHover={onHover}
      whileTap={onTap}
      className="w-[100px] cursor-pointer rounded-full shadow-black shadow-xl"
    >
      <motion.img
        src={src}
        alt={smoothieName}
        className="w-full h-full "
        onClick={() => {
          onIsRotating(degree);
          onIsActive(smoothieName);
        }}
      />
    </motion.div>
  );
}

export default RotationControlButton;
