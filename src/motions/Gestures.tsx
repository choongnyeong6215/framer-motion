import React from "react";
import { Box, Wrapper } from "../styles/main";

const Gestures = () => {
  const boxVariants = {
    hover: {
      scale: 1.3,
      rotate: 90,
    },
    click: {
      scale: 1,
      borderRadius: "50%",
    },
  };
  return (
    <Wrapper>
      <Box variants={boxVariants} whileHover="hover" whileTap="click" />
    </Wrapper>
  );
};

export default Gestures;
