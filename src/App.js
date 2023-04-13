import { useEffect, useState } from "react";
import "../src/css/App.css";
import NavMenu from "./components/NavMenu";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  margin: 10px;
  padding: 4em;
  border-radius: 48px;
  border: 4px solid black;
  background: papayawhip;
`;

var ParentLayout = styled.section`
  margin-left: ${(props) => (props.$device === "Desktop" ? "300px" : "0px")};
  background: yellow;
`;

function App() {
  const [device, setDevice] = useState("Uncertain");
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  const getDeviceType = () => {
    var width = window.innerWidth;

    if (width <= 768) {
      setDevice("Mobile");
    } else if (width >= 768 && width <= 1024) {
      setDevice("Tablet");
    } else if (width >= 1024) {
      setDevice("Desktop");
    } else {
      setDevice("Uncertain");
    }
  };

  useEffect(() => {
    getDeviceType();
  }, [window.innerWidth]);

  return (
    <ParentLayout $device={device}>
      <NavMenu />
      <Wrapper>
        <Title>ChatGPT 2.0 (clone)</Title>
      </Wrapper>
    </ParentLayout>
  );
}

export default App;
