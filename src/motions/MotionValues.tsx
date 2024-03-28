import { useEffect } from "react";
import { Box, Wrapper } from "../styles/main";
import {
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const MotionValues = () => {
  const x = useMotionValue(0);

  // useMotionValueEvent
  // useMotionValueEvent(x, "change", () => {
  //   console.log(x.get());
  // });

  // useTransform
  const rotate = useTransform(x, [-600, 600], [-360, 360]);
  const bgGradient = useTransform(
    x,
    [-600, 0, 600],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );

  // useScroll
  const { scrollY, scrollYProgress } = useScroll();

  const scale = useTransform(scrollY, [0, 1], [1, 2]);

  return (
    <Wrapper style={{ background: bgGradient }}>
      <Box drag="x" dragSnapToOrigin style={{ x, rotate, scale }} />
    </Wrapper>
  );
};

export default MotionValues;
