import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { staggerContainer, zoomIn } from "../utils/motion";

export default function Navbar() {
  const nav = [
    "Home",
    "About",
    "Demo",
    "Projects",
    "Services",
    "Testimonials",
    "Contact",
  ];
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`pt-0 px-16 `}
    >
      <nav className={` flex flex-row w-11/12 rounded-t-[64px] mx-auto `}>
        <Link
          className="navbar-brand page-scroll flex justify-center text-[35px]"
          to="/"
        >
          <motion.span>SHOAIB</motion.span>
          <motion.span
            variants={zoomIn(0.1, 0.5)}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            class="flex items-center cursor-pointer"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            >
              <FontAwesomeIcon
                icon={faAsterisk}
                className="text-center font-noraml text-pink text-[20px] px-1 h-[23px] w-[23px]"
              />
            </motion.span>
          </motion.span>
          <motion.span>WEB3</motion.span>
        </Link>
        <ul class="flex items-center justify-center flex-grow">
          {nav.map((item, i) => (
            <motion.li
              variants={zoomIn(0.3 * (i / 2), 1)}
              class="px-4 text-white "
            >
              <a
                href={`#${item.toLowerCase()}`}
                class={`text-white text-[20px] cursor-pointer hover:text-[#83D7E8]`}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
        <motion.button
          variants={zoomIn(0.1, 1)}
          type="button"
          className="flex items-center  h-fit py-2 px-10 bg-[#83D7E8] rounded-[32px] gap-[12px] "
        >
          <a
            className="font-normal text-[16px] text-[#0b111b]  no-underline"
            href="#contact"
          >
            Contact us
          </a>
        </motion.button>
      </nav>
    </motion.div>
  );
}
