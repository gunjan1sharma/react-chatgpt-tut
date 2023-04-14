import { useEffect, useState } from "react";
import "../src/css/App.css";
import NavMenu from "./components/NavMenu";
import styled from "styled-components";
import DefaultHome from "./components/DefaultHome";

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
      <DefaultHome />
    </ParentLayout>
  );
}

export default App;
