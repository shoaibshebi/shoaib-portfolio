import Img1 from "../../assets/demo/01.png";
import Img2 from "../../assets/demo/02.png";
import Img3 from "../../assets/demo/03.png";
import Img4 from "../../assets/demo/04.png";
import Img5 from "../../assets/demo/05.png";
import Img6 from "../../assets/demo/06.png";
import Img7 from "../../assets/demo/07.png";
import Img8 from "../../assets/demo/08.png";
import Img9 from "../../assets/demo/09.png";
import Img10 from "../../assets/demo/10.png";
import Img11 from "../../assets/demo/11.png";
import Img12 from "../../assets/demo/12.png";
import Img13 from "../../assets/demo/13.png";
import Img14 from "../../assets/demo/14.png";
import Img15 from "../../assets/demo/15.png";
import Img16 from "../../assets/demo/16.png";
import Img17 from "../../assets/demo/17.png";
import Img18 from "../../assets/demo/18.png";
import Img19 from "../../assets/demo/19.png";
import Img20 from "../../assets/demo/20.png";
import Img21 from "../../assets/demo/21.png";
import Img22 from "../../assets/demo/22.png";
import { motion } from "framer-motion";

import "./DemoProjs.css";
import { fadeIn } from "../../utils/motion";

export default function DemoProjs() {
  const glitterBridge = [Img1, Img2, Img3, Img4, Img5];
  const glitterBridgeWidget = [Img6, Img7, Img8, Img9];
  const glitterBridgeExplorer = [Img10, Img11, Img12, Img13, Img14];
  const obg = [Img15, Img16, Img17, Img18];
  const glitterBridgeFund = [Img19, Img20, Img21, Img22];

  const IterateProj = ({ arr, title }) => {
    return (
      <>
        <p className='proj_p py-5 font-bold'>{title}</p>
        {arr?.map(item => (
          <div className='item' key={item}>
            <img src={item} alt='img' className='img' />
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <motion.div
        id='demo'
        variants={fadeIn("rt", "spring", 0.2, 2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={` mx-10 mt-16 proj_container rounded-[30px]`}
      >
        <div className='wrap rounded-[30px]'>
          <div className='girl'></div>
          <h1 className='text-[#0b111b] font-bold'>
            Projects' Demo<span>.</span>
          </h1>
          <div className='list'>
            <IterateProj
              arr={glitterBridge || []}
              title='Glitter Bridge Protocol'
            />
            <IterateProj
              arr={glitterBridgeWidget || []}
              title='Glitter Bridge Widget'
            />
            <IterateProj
              arr={glitterBridgeExplorer || []}
              title='Glitter Bridge Explorer'
            />
            <IterateProj arr={obg || []} title='OBG | Online Battle Ground' />
            <IterateProj
              arr={glitterBridgeFund || []}
              title='Glitter Bridge Fund'
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
