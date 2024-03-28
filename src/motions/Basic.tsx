import { Wrapper, Box } from "../styles/main";

const Basic = () => {
  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>Basic Animation</h1>
      <Wrapper>
        <Box initial={{ scale: 0 }} animate={{ scale: 1, rotate: 360 }} />
      </Wrapper>
    </>
  );
};

export default Basic;
