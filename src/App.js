import { useEffect, useState } from "react";
import "../src/css/App.css";
import NavMenu from "./components/NavMenu";
import styled from "styled-components";
import DefaultHome from "./components/DefaultHome";
import { createTheme } from "@material-ui/core/styles";
import MontserratRegular from "../src/fonts/Montserrat-Regular.ttf";
import MontserratBold from "../src/fonts/Montserrat-Bold.ttf";
import { CssBaseline } from "@mui/material";


var ParentLayout = styled.section`
  margin-left: ${(props) => (props.$device === "Desktop" ? "300px" : "0px")};
  /* background: yellow; */
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

export const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", Bold',
  },
  overrides: {
    CssBaseline: {
      "@global": {
        "@font-face": [MontserratBold],
      },
    },
  },
});


export default App;
