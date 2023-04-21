import styled from "styled-components";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Avatar, IconButton, Typography } from "@mui/material";
import Constants from "../utils/Constants";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import { Typewriter } from "react-simple-typewriter";

const ChatBox = styled.section`
  padding: 15px;
  border: 1px solid lightgray;
  background: #f7f7f8;
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
  overflow-y: scroll;
  max-height: ${(props) => props.$maxeight}; ;
`;

const EditChatLayout = styled.section`
  display: flex;
  flex-direction: row;
  background: gray;
  align-self: flex-end;
  justify-items: right;
`;

function ReplyChat(props) {
  var { answer } = props;

  const onTyping = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div>
      <ChatBox>
        <ChatLayout>
          <ProfileBox>
            <Avatar src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.svg"></Avatar>
          </ProfileBox>
          <Typography
            sx={{
              width: "100%",
              color: "black",
              marginLeft: "20px",
              fontSize: "15px",
              fontWeight: "500",
              lineHeight: "3.5ch",
            }}
          >
            <Typewriter
              words={[answer]}
              loop={false}
              cursor
              cursorBlinking
              cursorStyle="_"
              typeSpeed={20}
              onType={onTyping}
              deleteSpeed={5000000}
              delaySpeed={1000}
            />
          </Typography>
        </ChatLayout>
      </ChatBox>
    </div>
  );
}

export default ReplyChat;
