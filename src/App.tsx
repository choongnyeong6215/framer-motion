import { useRef } from "react";
import { BiggerBox, Box, Circle, Wrapper } from "./styles/main";
import { Variants } from "framer-motion";

const App = () => {
  const boxVariants = {
    hover: {
      scale: 1.5,
      rotate: 90,
    },
    click: {
      scale: 1,
      borderRadius: "50%",
    },
  };

  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>Frmaer Motion</h1>
      <Wrapper>
        {/* hover */}
        {/* <Box variants={boxVariants} whileHover="hover" whileTap="click" /> */}

        {/* Drag */}
        <BiggerBox ref={biggerBoxRef}>
          <Box
            drag
            dragConstraints={biggerBoxRef}
            dragSnapToOrigin={true}
            dragElastic={0.5}
          />
        </BiggerBox>
      </Wrapper>
    </>
  );
};

export default App;
