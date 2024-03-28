import { useRef } from "react";
import { BiggerBox, Box, Wrapper } from "../styles/main";

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
    drag: {
      backgroundColor: "#B83B5E",
    },
  };

  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      {/* hover animation */}
      {/* <Box
        variants={boxVariants}
        whileHover="hover"
        whileTap="click"
        onHoverStart={() => console.log("hover start!")}
        onHoverEnd={() => console.log("hover end!")}
      /> */}

      {/* drag animation with contraints*/}
      <BiggerBox ref={biggerBoxRef}>
        <Box
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
          drag
          whileDrag="drag"
          dragConstraints={biggerBoxRef}
          dragSnapToOrigin
          dragElastic={0.5}
        />
      </BiggerBox>
    </Wrapper>
  );
};

export default Gestures;
