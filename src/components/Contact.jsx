import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

export default function Contact() {
  const [cat, setCat] = useState("Traveling");
  const Cats = ["Traveling", "Book Reading", "Foody", "Activist"];

  useEffect(() => {
    //set cat randomly from the Cats array on each 3 seconds
    const interval = setInterval(() => {
      setCat(Cats[Math.floor(Math.random() * Cats.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      id='contact'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={` pt-32  relative z-10 flex flex-row justify-center items-center gap-32 h-[80vh]`}
    >
      <div class='w-1/2'>
        <motion.h1
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          class='text-[100px] leading-[90px] font-bold text-center text-[#fff] '
        >
          Let's have a coffee ?{" "}
        </motion.h1>
        <div className='flex justify-center flex-row gap-4 mt-16'>
          {Cats.map((item, i) => (
            <motion.div
              key={item}
              variants={zoomIn(0.2 * i, 1)}
              className={`${styles.flexCenter} ${
                cat === item
                  ? "text-[#0D1C30] bg-[#ffffff] "
                  : "text-white bg-[#0D1C30]"
              } rounded-[30px]  p-2 px-8 mr-2 cursor-pointer`}
              onClick={() => setCat(item)}
            >
              {item}
            </motion.div>
          ))}
        </div>
        <div className='flex flex-row justify-start gap-4 my-8 '>
          <div className='flex flex-col justify-start w-full'>
            <p className='text-white text-[14px] text-[#fff] '>
              Enter the message
            </p>
            <input
              type='text'
              placeholder='Wasup?'
              className='text-[#fff] bg-[#0D1C30] rounded-[30px]  py-4 px-8 mt-2'
            />
          </div>
        </div>
        <motion.button
          variants={zoomIn(1, 0.5)}
          type='button'
          className='  text-center h-fit p-4 w-full bg-pink rounded-[32px]'
        >
          <span className='font-normal text-[16px] text-[#0b111b]'>
            Message
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}
