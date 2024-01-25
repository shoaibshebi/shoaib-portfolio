import { faArrowDownLong, faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import myImg from "../assets/my-img.jpeg";
import CapsuleComp from "../reusable/CapsuleComp";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

export default function About() {
  const Heading = ["Senior", "Frontend", "Engineer"];
  return (
    <motion.section
      id='about'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.paddings} mt-32 relative z-10 flex flex-row gap-32`}
    >
      <div class='flex-2 text-[200px] font-bold'>
        {Heading.map((item, index) => (
          <motion.h1
            variants={fadeIn("lt", "spring", index * 0.3, 2)}
            className={`leading-[170px]  transition-[flex]  ease-out-flex text-[#fff]`}
          >
            {item}
          </motion.h1>
        ))}
      </div>
      <div class='flex-1 py-3 border-t-[#fff]'>
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 1)}
          className={`${styles.flexStart} flex-col px-6 `}
        >
          <motion.div className='flex justify-center items-center'>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            >
              <FontAwesomeIcon
                icon={faAsterisk}
                className=' w-[30px] h-[30px]  text-center font-noraml text-white text-[30px]'
              />
            </motion.span>
            <motion.span className='text-[30px] pl-2'>About Me</motion.span>
          </motion.div>
          <p className='flex-2  font-normal text-[16px] text-[#B0B0B0] mt-4 leading-[22.4px] font-sans tracking-tight'>
            💻 Senior Frontend Engineer ✨ Member @ Hyperledger Foundation 🦄
            Freelancer @ Turing.com 🎙 Talks about Web3 and frontend
          </p>
          <p className='flex-2  font-normal text-[16px] text-[#B0B0B0] mt-4 leading-[22.4px] font-sans tracking-tight'>
            5 years of experience as a Senior Web3 Frontend Engineer using
            latest technologies. Experienced building projects that fall in the
            following domains: Defi- systems, e-commerce, fin-tech, management
            systems, gaming industry, and ed-tech. Developed 5 major end-to-end
            Defi products including cross-chain bridging protocol consisting of
            top 6 Blockchain Chains including Algorand, Solana, Ethereum,
            Polygon, Avalanche, Tron, integrating top 13 wallets.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 1, 1)}
          className={`${styles.flexStart} flex-col px-6 mt-12`}
        >
          <div
            className={`${styles.flexCenter} w-[50px] h-[100px] rounded-[24px] bg-gradient-to-t from-[#314f794a] cursor-pointer`}
          >
            <a href='#best-choice'>
              <FontAwesomeIcon
                icon={faArrowDownLong}
                className='text-center font-noraml text-white text-[30px] '
              />
            </a>
          </div>
        </motion.div>
      </div>
      <div className='flex-1 relative min-w-[170px] max-w-[270px] h-[550px] my-shadow'>
        <CapsuleComp image={myImg} />
      </div>
    </motion.section>
  );
}
