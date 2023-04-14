import styled from "styled-components";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { IconButton, Typography } from "@mui/material";
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
  background: #e47f24;
  border-radius: 6px;
  width: 30px;
  height: 30px;
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

function AskChat() {
  return (
    <div>
      <ChatBox>
        <ChatLayout>
          <ProfileBox>
            <Typography
              sx={{ color: "#555E6B", fontSize: "14px", fontWeight: "400" }}
            >
              {Constants.getNameInitials("Abhinav Kumar")}
            </Typography>
          </ProfileBox>
          <Typography
            sx={{
              color: "#555E6B",
              marginLeft: "20px",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            I am Question Asked to ChatGPT
          </Typography>
        </ChatLayout>
       
      </ChatBox>
    </div>
  );
}

export default AskChat;
