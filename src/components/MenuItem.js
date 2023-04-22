import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

const MenuParentLayout = styled.section`
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: ${(props) => (props.isNewChat ? "8px" : "5px")};
  border-radius: 6px;
  border: ${(props) => (props.isNewChat ? "1px solid grey" : "0px")};
  &:hover {
    background-color: #2a2b32;
    border-radius: 10px;
    //padding: 10px;
    cursor: pointer;
  }
`;

const HeadingLayout = styled.section`
  height: 40px;
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NewTextLayout = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 18px;
  margin-right: 15px;
  border-radius: 6px;
  background-color: #fae69e;
`;

function MenuItem(props) {
  const { Icon, isFeature, heading } = props;
  return (
    <div onClick={props.onClick} >
      <MenuParentLayout isNewChat={props.isNewChat} >
        <HeadingLayout>
          <Icon
            sx={{
              marginRight: "15px",
              width: "20px",
              height: "20px",
              color: "white",
            }}
          />
          <Typography
            sx={{
              color: "white",
              maxLines: "1",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              width: isFeature ? "200px" : "220px",
              // marginLeft: "7px",
              fontSize: "14px",
            }}
          >
            {heading}
          </Typography>
        </HeadingLayout>
        {isFeature ? (
          <NewTextLayout>
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
              NEW
            </Typography>
          </NewTextLayout>
        ) : null}
      </MenuParentLayout>
    </div>
  );
}

export default MenuItem;
