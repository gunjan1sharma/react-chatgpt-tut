import styled from "styled-components";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { IconButton, Typography } from "@mui/material";
import Constants from "../utils/Constants";
import IntroText from "./IntroText";
import staticants from "../utils/Constants";
import LightModeIcon from "@mui/icons-material/LightMode";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";

const IntroParentLayout = styled.section`
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: ${(props) => (props.$isEmpty === true ? "none" : "visible")}; ;
`;

const HeadingLayout = styled.section`
  /* background-color: black; */
  margin-top: 80px;
  margin-bottom: 20px;
`;

const ListLayout = styled.section`
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;

function IntroSection(props) {
  return (
    <div>
      <IntroParentLayout $isEmpty={props.$isEmpty}>
        <HeadingLayout>
          {" "}
          <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
            ChatGPT
          </Typography>
        </HeadingLayout>
        <ListLayout>
          <IntroText
            isExample={true}
            Icon={LightModeIcon}
            heading="Examples"
            textOne={staticants.exampleOne}
            textTwo={staticants.exampleTwo}
            textThree={staticants.exampleTwo}
          />
          <IntroText
            isExample={false}
            Icon={BoltOutlinedIcon}
            heading="Capabiblities"
            textOne={staticants.capOne}
            textTwo={staticants.capTwo}
            textThree={staticants.capThree}
          />
          <IntroText
            isExample={false}
            Icon={WarningAmberIcon}
            heading="Limitations"
            textOne={staticants.limitOne}
            textTwo={staticants.limitTwo}
            textThree={staticants.limitThree}
          />
        </ListLayout>
      </IntroParentLayout>
    </div>
  );
}

export default IntroSection;
