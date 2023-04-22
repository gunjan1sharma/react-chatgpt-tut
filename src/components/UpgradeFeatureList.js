import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { Typography } from "@mui/material";

const UpgradeFeatureLayout = styled.section`
  display: flex;
  margin-top: 5px;
`;

function UpgradeFeatureList(props) {
  const { heading, isPaidPlan } = props;
  return (
    <div>
      <UpgradeFeatureLayout>
        <TaskAltOutlinedIcon
          fontSize="small"
          sx={{ color: isPaidPlan ? "#1A7F64" : "grey", marginRight: "10px" }}
        />
        <Typography sx={{ fontSize: "14px", color:"black" }}>{heading}</Typography>
      </UpgradeFeatureLayout>
    </div>
  );
}

export default UpgradeFeatureList;
