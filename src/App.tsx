import { Box, Wrapper } from "./styles/main";

const App = () => {
  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>Frmaer Motion</h1>
      <Wrapper>
        <Box
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ type: "spring", delay: 0.5 }}
        />
      </Wrapper>
    </>
  );
};

export default App;
