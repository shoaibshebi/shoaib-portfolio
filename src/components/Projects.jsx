import { motion } from "framer-motion";

import Img1 from "../assets/demo/01.png";
import Img2 from "../assets/demo/02.png";
import Img3 from "../assets/demo/03.png";
import Img4 from "../assets/demo/04.png";
import Img5 from "../assets/demo/05.png";
import Img6 from "../assets/demo/06.png";
import Img7 from "../assets/demo/07.png";
import Img8 from "../assets/demo/08.png";
import Img9 from "../assets/demo/09.png";
import Img10 from "../assets/demo/10.png";
import Img11 from "../assets/demo/11.png";
import Img12 from "../assets/demo/12.png";
import Img13 from "../assets/demo/13.png";
import Img14 from "../assets/demo/14.png";
import Img15 from "../assets/demo/15.png";
import Img16 from "../assets/demo/16.png";
import Img17 from "../assets/demo/17.png";
import Img18 from "../assets/demo/18.png";
import Img19 from "../assets/demo/19.png";
import Img20 from "../assets/demo/20.png";
import Img21 from "../assets/demo/21.png";
import Img22 from "../assets/demo/22.png";
import Img23 from "../assets/demo/23.png";
import Img24 from "../assets/demo/24.png";
import Img25 from "../assets/demo/25.png";
import Img_3 from "../assets/portfolio/3.png";
import lifeTube from "../assets/life tube.jpeg";

import styles from "../styles";
import { staggerContainer, zoomIn } from "../utils/motion";
import CapsuleComp from "../reusable/CapsuleComp";

export default function Projects() {
  const choiseImgs = [
    {
      name: "Little Big",
      link: "https://little-big.netlify.app/",
      img: Img23,
    },
    {
      name: "Rainbow Chain Explorer",
      link: "https://explorer.glitterfinance.org/",
      img: Img10,
    },
    {
      name: "Glitter Fund",
      link: "https://glitterfund.org/",
      img: Img19,
    },
    {
      name: "OBG Platform",
      link: "https://go.onlinebattleground.com/home",
      img: Img17,
    },
    {
      name: "Getbutler ",
      link: "https://www.getbutler.com/en/",
      img: Img25,
    },
    {
      name: "Silky Cool",
      link: "https://silkycool.pk/",
      img: Img_3,
    },
  ];

  const ProjectTile = ({ name, link, img }) => (
    <motion.div
      variants={zoomIn(0.3, 1)}
      className=" group/projectRoot
       relative  h-full w-[650px] hover:cursor-pointer "
      onClick={() => window.open(link, "_blank")}
    >
      <img
        src={img}
        alt="Img1"
        className=" absolute w-full h-full  rounded-[42px] object-cover z-0"
      />
      <div
        className={`${styles.flexCenter} absolute bottom-4 left-4  rounded-[30px] bg-[#0b111b] z-10 p-4 px-8  group-hover/projectRoot:bg-[#83D7E8] group-hover/projectRoot:text-[#0b111b] `}
      >
        {name}
      </div>
    </motion.div>
  );

  return (
    <motion.section
      id="projects"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`py-16 flex flex-col gap-4 gap-y-8 relative `}
    >
      <div
        className={`flex justify-around md:flex-row flex-col  h-[400px] px-16 gap-8`}
      >
        <ProjectTile
          name="Glitter Bridge"
          link="https://bridge.glitterfinance.org/"
          img={Img1}
        />
        <ProjectTile
          name="Glitter Bridge"
          link="https://52a7d8ba.glitter-finance-bridge-frontend.pages.dev/"
          img={Img24}
        />

        <motion.div variants={zoomIn(0.1, 1)} className=" relative  h-full ">
          <CapsuleComp image={lifeTube} />
        </motion.div>
      </div>
      <div className={`flex flex-wrap justify-around gap-8 px-16`}>
        {choiseImgs.map((item, i) => (
          <motion.div
            variants={zoomIn(0.3 * i, 1)}
            className="group/project relative min-w-[170px] w-[480px] h-[300px] rounded-[42px] hover:cursor-pointer"
            onClick={() => window.open(x.link, "_blank")}
          >
            <img
              src={item.img}
              alt={item.name}
              className=" absolute w-full h-full  rounded-[42px] object-cover z-0"
            />
            <div
              className={`${styles.flexCenter} absolute bottom-4 left-4  rounded-[30px] bg-[#0b111b] group-hover/project:bg-[#83D7E8] group-hover/project:text-[#0b111b] z-10 p-4 px-8`}
            >
              {item.name}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
