import { useState } from "react";
import { Box, Grid, Overlay, Wrapper } from "../styles/main";
import { AnimatePresence } from "framer-motion";
import { click } from "@testing-library/user-event/dist/click";

const Final = () => {
  const arr = [1, 2, 3, 4];

  const [clickedId, setClickedId] = useState<null | string>(null);

  return (
    <Wrapper>
      <Grid>
        {arr.map((v) => (
          <Box
            key={v}
            layoutId={v.toString()}
            onClick={() => setClickedId(v.toString())}
          />
        ))}
      </Grid>
      {clickedId ? (
        <AnimatePresence>
          <Overlay
            onClick={() => setClickedId(null)}
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,0.7)" }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Box style={{ width: 400, height: 200 }} layoutId={clickedId} />
          </Overlay>
        </AnimatePresence>
      ) : null}
    </Wrapper>
  );
};

export default Final;
