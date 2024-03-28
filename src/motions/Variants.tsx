import { Wrapper, Box, Circle } from "../styles/main";

const Variants = () => {
  const boxVariants = {
    start: {
      scale: 0,
    },
    end: {
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const circleVariants = {
    start: {
      opacity: 0,
      y: 10,
    },
    end: {
      opacity: 1,
      y: 0,
      trnasition: {
        type: "spring",
        bounce: 0.8,
      },
    },
  };

  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>Basic Animation</h1>
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

export default Variants;
