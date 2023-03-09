import styled from "styled-components";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.span`
  font-size: 32px;
  font-weight: 400;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 20px;
`;

function App() {
  return (
    <>
      <Home>
        <Title>Jaeha's Portfolio</Title>
        <Projects />
      </Home>
      <Footer />
    </>
  );
}

export default App;
