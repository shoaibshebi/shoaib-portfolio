import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import rocket from "../assets/rocket.png";
import CapsuleComp from "../reusable/CapsuleComp";
import styles from "../styles";
import { services } from "../utils/data";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

export default function Services() {
  const SupportWords = ["Services ", "which i ", " Offer"];
  return (
    <motion.section
      id="services"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`py-16 relative z-10 flex flex-row justify-center items-center gap-32 h-[90vh]`}
    >
      <div class="w-1/6 font-bold  ">
        {SupportWords.map((item, index) => (
          <motion.h1
            variants={fadeIn("lt", "spring", index * 0.3, 2)}
            className={
              index === 2
                ? "text-[200px] leading-[160px]"
                : `text-[100px] leading-[90px]`
            }
          >
            <span className="text-[#fff]">{item}</span>
          </motion.h1>
        ))}
      </div>
      <div class="w-2/6 py-3">
        {services.map((x, i) => (
          <motion.div
            variants={zoomIn(0.3 * i, 1)}
            className={`${styles.flexStart} flex-col px-6 py-4`}
            key={i}
          >
            <motion.div className="flex justify-center items-center">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                className="w-[50px] h-[50px] flex justify-center items-center"
              >
                <FontAwesomeIcon
                  icon={faAsterisk}
                  className="text-center font-noraml text-white text-[30px]"
                />
              </motion.span>
              <motion.span className="text-[30px] pl-2">{x.title}</motion.span>
            </motion.div>
            <p className="flex-2  font-normal text-[18px] text-[#B0B0B0] leading-[22.4px] font-sans tracking-tight mt-2 ">
              {x.desc}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="w-2/6 relative flex items-center justify-center min-w-[170px] max-w-[270px] h-[550px] ">
        <CapsuleComp image={rocket} alt="rocket" />
      </div>
    </motion.section>
  );
}
