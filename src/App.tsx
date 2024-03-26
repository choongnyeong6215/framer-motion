import { Box, Circle, Wrapper } from "./styles/main";
import { Variants } from "framer-motion";

const App = () => {
  const boxVariants = {
    start: {
      scale: 0,
    },
    end: {
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        delayChildren: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const circleVariants = {
    start: {
      opacity: 0,
      y: 50,
    },
    end: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>Frmaer Motion</h1>
      <Wrapper>
        <Box variants={boxVariants} initial="start" animate="end">
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
        </Box>
      </Wrapper>
    </>
  );
};

export default App;
