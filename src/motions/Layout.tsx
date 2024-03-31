import { useState } from "react";
import { Box, Circle, Wrapper } from "../styles/main";

const Layout = () => {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Wrapper onClick={toggleClicked}>
      <Box>{!clicked ? <Circle layoutId="circle" /> : null}</Box>
      <Box>
        {clicked ? <Circle layoutId="circle" style={{ scale: 1.5 }} /> : null}
      </Box>
    </Wrapper>
  );
};

export default Layout;
