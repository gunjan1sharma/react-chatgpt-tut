import styled from "styled-components";
import React, {  } from "react";
import { Typography } from "@mui/material";

const IntroLayout = styled.section`
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const HeadingLayout = styled.section`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

function IntroText(props) {
  const { isExample, Icon, heading, textOne, textTwo, textThree } = props;
  return (
    <div>
      <IntroLayout>
        <HeadingLayout>
          <Icon sx={{ marginRight: "15px" }} />
          <Typography sx={{ fontSize: "19px" }}>{heading}</Typography>
        </HeadingLayout>

        <Typography
          sx={{ fontSize: "14px", textAlign: "center", fontWeight: "500" }}
        >
          {isExample ? `"${textOne}"→` : textOne}
        </Typography>
        <Typography
          sx={{
            marginTop: "25px",
            marginBottom: "25px",
            fontSize: "14px",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {isExample ? `"${textTwo}"→` : textTwo}
        </Typography>
        <Typography
          sx={{ fontSize: "14px", textAlign: "center", fontWeight: "500" }}
        >
          {isExample ? `"${textThree}"→` : textThree}
        </Typography>
      </IntroLayout>
    </div>
  );
}

export default IntroText;
