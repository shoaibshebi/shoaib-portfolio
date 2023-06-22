import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import { staggerContainer, zoomIn } from "../utils/motion";

export default function Footer() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` py-16 pb-16 px-16 `}
    >
      <motion.div className=" flex items-center justify-between gap-5 w-11/12 mx-auto">
        <motion.div class="flex items-center">
          <motion.span className="text-[20px]">SHOAIB</motion.span>

          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          >
            <FontAwesomeIcon
              icon={faAsterisk}
              className="text-center font-noraml text-pink text-[15px] px-2"
            />
          </motion.span>
          <motion.span className="text-[20px]">WEB3</motion.span>
        </motion.div>

        <motion.span
          variants={zoomIn(1.6, 1)}
          className=" text-[20px] text-white cursor-pointer  "
        >
          &copy; 2023 Shoaib Web3
        </motion.span>
        <motion.span
          variants={zoomIn(1.6, 1)}
          className=" text-[20px] text-white underline cursor-pointer  "
        >
          Privacy Policy
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
