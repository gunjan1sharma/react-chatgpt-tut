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

const HomeLayout = styled.section`
  height: 100%;
`;

const InputLayout = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0px;
  min-height: 87px;
  height: calc();
  margin-bottom: 6px;
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
  margin-bottom: 50px;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function DefaultHome() {
  const [ask, setAsk] = useState();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentThread, setCurrentThread] = useState("Question");

  const dummyText = (
    <React.Fragment>
      <Typography>
        {Constants.dummyLontText +
          Constants.dummyLontText +
          Constants.dummyLontText +
          Constants.dummyLontText}
      </Typography>
    </React.Fragment>
  );

  const addQuestion = (e) => {
   
    setQuestions(questions.push(ask));
    questions.forEach((q) => {
      console.log(q + "/n");
    });
  };

  const list = questions.map((item) => {
    return <li>{item}</li>;
  });

  return (
    <HomeLayout>
      <NavMenu />
      <ChatLayout>
        {/* <AskChat />
        <ReplyChat /> */}
        {list}
      </ChatLayout>
      <InputLayout>
        <InputRowLayout>
          <TextField
            placeholder="Send a message.."
            multiline
            maxRows={6}
            fullWidth
            onChange={(e) => setAsk(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={(e) => addQuestion()}>
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
