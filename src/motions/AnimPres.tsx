import { useState } from "react";
import { Box, Wrapper } from "../styles/main";
import { AnimatePresence } from "framer-motion";

const AnimPres = () => {
  // const [showing, setShowing] = useState(false);

  // const handleShowing = () => setShowing((prev) => !prev);

  // const boxVariants = {
  //   initial: {
  //     opacity: 0,
  //     scale: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     rotate: 360,
  //   },
  //   leaving: {
  //     opacity: 0,
  //     scale: 0,
  //     y: 50,
  //   },
  // };

  const [isShowing, setIsShowing] = useState(false);

  const hanldeBox = () => setIsShowing((prevS) => !prevS);

  const boxVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0,
      y: 50,
    },
  };

  return (
    <Wrapper>
      <AnimatePresence>
        {isShowing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        ) : (
          ""
        )}
      </AnimatePresence>
      <button onClick={hanldeBox}>Click!</button>
    </Wrapper>
  );
};

export default AnimPres;
