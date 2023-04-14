import styled from "styled-components";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Avatar, IconButton, Typography } from "@mui/material";
import Constants from "../utils/Constants";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";

const ChatBox = styled.section`
  padding: 15px;
  border: 1px solid grey;
  background: white;
  min-height: 90px;
  height: calc();
`;

const ProfileBox = styled.section`
  display: flex;
  padding: 2px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: #10a37f;
  border-radius: 6px;
  width: 35px;
  height: 35px;
`;

const ChatLayout = styled.section`
  display: flex;
  flex-direction: row;
`;

const EditChatLayout = styled.section`
  display: flex;
  flex-direction: row;
  background: gray;
  align-self: flex-end;
  justify-items: right;
`;

function ReplyChat() {
  return (
    <div>
      <ChatBox>
        <ChatLayout>
          <ProfileBox>
            <Avatar src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.svg"></Avatar>
          </ProfileBox>
          <Typography
            sx={{
              color: "#555E6B",
              marginLeft: "20px",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "3ch",
            }}
          >
            {Constants.dummyAnswer}
          </Typography>
        </ChatLayout>
      </ChatBox>
    </div>
  );
}

export default ReplyChat;
