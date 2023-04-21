import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import NavMenu from "./NavMenu";
import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import Constants from "../utils/Constants";
import AskChat from "./AskChat";
import ReplyChat from "./ReplyChat";
import { AccountCircle } from "@mui/icons-material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import IntroSection from "./IntroSection";
import staticants from "../utils/Constants";

const HomeLayout = styled.section`
  height: 100%;
`;

const InputLayout = styled.section`
  background-color: white;
  position: fixed;
  bottom: 0;
  left: ${(props) => (props.$device === "Desktop" ? "300px" : "0px")};
  right: 0;
  margin: 0px;
  min-height: 87px;
  height: calc();
  margin-bottom: 0px;
  padding: 0em;
  border-radius: 0px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
`;

const ChatLayout = styled.section`
  /* margin-left: 10px;
  margin-right: 10px; */
  margin-top: 50px;
  margin-bottom: 100px;
  height: fit-content;
  overflow-y: auto;
  //height: calc(100vh - 150px);
`;

const InputRowLayout = styled.section`
  display: flex;
  flex-direction: row;
`;

const InputQuery = styled.textarea`
  color: black;
  line-height: 3ch;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  min-height: 10px;
  max-height: 120px;
  height: calc();
  background: white;
  border: none;
  border-radius: 3px;
  margin: 10px;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 8px;
  &::placeholder {
    font-weight: 500;
    color: gray;
  }
  &:focus {
    outline: none;
  }
`;

const InfoRowLayout = styled.section`
  margin-top: 7px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function DefaultHome() {
  const [ask, setAsk] = useState();
  const [questions, setQuestions] = useState([]);
  const [chat, setChat] = useState([[]]);
  const [answers, setAnswers] = useState([]);
  const [currentThread, setCurrentThread] = useState("Question");
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

  const addQuestion = (e) => {
    if (ask === "" || ask === " " || ask === undefined) return;
    setChat((prevState) => [...prevState, { query: ask, type: "question" }]);
    setChat((prevState) => [
      ...prevState,
      {
        query: `You Asked: ${ask}? So Answer would be Like Below: \n\n ${staticants.dummyAnswer}`,
        type: "answer",
      },
    ]);
    setAsk("");
  };

  return (
    <HomeLayout>
      <NavMenu />
      <ChatLayout>
        {/* <IntroSection /> */}
        {/* <AskChat />
        <ReplyChat />
        <AskChat />
        <ReplyChat /> */}
        {chat.map((item, index) => {
          if (item.length === 0 || chat.length === undefined || chat === undefined) {
            return <IntroSection $isEmpty={true} />;
          } else {
            return item.type === "question" ? (
              <AskChat key={index} question={item.query} />
            ) :  (
              <ReplyChat key={index} answer={`${item.query}`} />
            );
          }

          // return chat.length === 0 || chat.length === undefined ? (
          //   <IntroSection />
          // ) : item.type === "question" ? (
          //   <AskChat key={index} question={item.query} />
          // ) : (
          //   <ReplyChat key={index} answer={`${item.query}`} />
          // );
        })}
      </ChatLayout>
      <InputLayout device={device}>
        <InputRowLayout>
          <TextField
            placeholder="Send a message.."
            multiline
            maxRows={6}
            fullWidth
            value={ask}
            onChange={(e) => setAsk(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => addQuestion()}>
                    <SendOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <IconButton>
            <CachedIcon sx={{ color: "black", fontSize: "large" }} />
          </IconButton>
        </InputRowLayout>
        <InfoRowLayout>
          <Typography
            sx={{
              fontSize: "12px",
              marginLeft: "35px",
              textDecoration: "underline",
            }}
          >
            {Constants.linkText}
          </Typography>
          <Typography
            sx={{ fontSize: "12px", marginLeft: "5px", marginRight: "25px" }}
          >
            {Constants.infoText}
          </Typography>
        </InfoRowLayout>
      </InputLayout>
    </HomeLayout>
  );
}

export default DefaultHome;
