import { motion, AnimatePresence } from "framer-motion";
import { Box, Wrapper } from "../styles/main";
import { useState } from "react";

const Slider = () => {
  const pics = [
    "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg",
  ];

  const [visible, setVisible] = useState(0);
  const [isBack, setIsBack] = useState(false);

  const imgVaraints = {
    entry: (isBack: boolean) => {
      return {
        opacity: 0,
        scale: 0,
        x: isBack ? -500 : 500,
      };
    },
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
    exit: (isBack: boolean) => {
      return {
        opacity: 0,
        scale: 0,
        x: isBack ? 500 : -500,
        transition: {
          duration: 0.2,
        },
      };
    },
  };

  const next = () => {
    setIsBack(false);
    setVisible((prev) =>
      prev === pics.length - 1 ? pics.length - 1 : prev + 1
    );
  };

  const prev = () => {
    setIsBack(true);
    setVisible((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <Wrapper>
      <AnimatePresence mode="wait" initial={false} custom={isBack}>
        <motion.img
          src={pics[visible]}
          key={visible}
          variants={imgVaraints}
          initial="entry"
          animate="center"
          exit="exit"
          custom={isBack}
          style={{ position: "absolute", top: "10rem", width: "400px" }}
        />
      </AnimatePresence>
      <div>
        {visible > 0 ? <button onClick={prev}>prev</button> : null}
        {visible < pics.length - 1 ? (
          <button onClick={next}>next</button>
        ) : null}
      </div>
    </Wrapper>
  );
};

export default Slider;
