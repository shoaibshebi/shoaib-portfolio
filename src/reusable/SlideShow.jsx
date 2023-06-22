import { motion } from "framer-motion";
import Slider from "react-slick";
import MagicSliderDots from "react-magic-slider-dots";

import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import CapsuleComp from "./CapsuleComp";
import { tms } from "../utils/data";

export default function SlideShow() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} />;
    },
  };
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full "
    >
      <Slider {...settings} pauseOnHover={false}>
        {tms.map((x) => (
          <motion.div
            variants={fadeIn("rt", "spring", 0.2, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex flex-col gap-16 h-[600px]   bg-[#0d1c30] rounded-[30px] px-12 py-8"
          >
            <CapsuleComp image={x.img} />

            <div className="relative h-full w-3/5 py-16 float-right">
              <motion.h1
                variants={fadeIn("rt", "spring", 0.3, 1)}
                className="pt-[20px] font-bold text-[36px] leading-[16.24px] text-[#fff]"
              >
                {x.name}
              </motion.h1>
              <motion.p
                variants={fadeIn("rt", "spring", 0.5, 1)}
                className="py-[20px] font-norma text-[18px] leading-[16.24px] text-[#828181c0]"
              >
                {x.position}
              </motion.p>
              <motion.p
                variants={fadeIn("rt", "spring", 0.7, 1)}
                className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[22.4px] font-sans tracking-tight"
              >
                {x.text}
              </motion.p>
              <motion.button
                variants={zoomIn(0.8, 1)}
                type="button"
                className="absolute bottom-24 left-2  text-center h-fit p-4 w-10/12 bg-[#83D7E8] rounded-[32px] cursor-default "
              >
                <span className="font-normal text-[16px] text-[#0b111b]">
                  Amazing Work
                </span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
}
