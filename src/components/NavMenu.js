import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Divider,
  List,
  Typography,
  useMediaQuery,
  Drawer,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MenuItem from "./MenuItem";
import staticants from "../utils/Constants";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0px;
  height: 50px;
  padding: 0em;
  border-radius: 0px;
  border: 0px solid black;
  background: #40414f;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuSection = styled.section`
  margin: 10px;
`;
const HeadingSection = styled.section``;

const NewChatSection = styled.section`
  margin: 10px;
`;

function NavMenu(props) {
  const matches = useMediaQuery("(min-width:600px)");
  var width = window.innerWidth;
  const [open, setOpen] = useState(false);
  const [device, setDevice] = useState("Uncertain");

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
  }, [width]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(false);
  };

  const drawerItemList = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
        color: "black",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box>
        <MenuItem
          Icon={AddIcon}
          isFeature={false}
          isNewChat={true}
          heading="New chat"
        />
        {/* <Divider color="white" /> */}

        <List>
          <MenuItem
            Icon={ChatBubbleOutlineOutlinedIcon}
            isFeature={false}
            isNewChat={false}
            heading={staticants.exampleOne}
          />
          <MenuItem
            Icon={ChatBubbleOutlineOutlinedIcon}
            isFeature={false}
            isNewChat={false}
            heading={staticants.exampleTwo}
          />
          <MenuItem
            Icon={ChatBubbleOutlineOutlinedIcon}
            isFeature={false}
            isNewChat={false}
            heading={staticants.exampleThree}
          />
          <MenuItem
            Icon={ChatBubbleOutlineOutlinedIcon}
            isFeature={false}
            isNewChat={false}
            heading={staticants.limitOne}
          />
          <MenuItem
            Icon={ChatBubbleOutlineOutlinedIcon}
            isFeature={false}
            isNewChat={false}
            heading={staticants.limitTwo}
          />
          <MenuItem
            Icon={ChatBubbleOutlineOutlinedIcon}
            isFeature={false}
            isNewChat={false}
            heading={staticants.limitTwo}
          />
          <MenuItem
            Icon={ChatBubbleOutlineOutlinedIcon}
            isFeature={false}
            isNewChat={false}
            heading={staticants.exampleOne}
          />
          {/* <Box sx={{ px: 2, mt: 5 }}>
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              px: 3,
              py: "11px",
              borderRadius: 1,
            }}
          >
            <ArrowForwardIosIcon
              fontSize="large"
              sx={{
                color: "white",
                width: 14,
                height: 14,
              }}
            />
          </Box>
        </Box> */}
          <Divider color="white" />
        </List>

        <MenuItem
          Icon={DeleteOutlinedIcon}
          isFeature={false}
          isNewChat={false}
          heading="Clear conversations"
        />
        <MenuItem
          Icon={PersonOutlineOutlinedIcon}
          isFeature={true}
          isNewChat={false}
          heading="Upgrade to Plus"
        />
        <MenuItem
          Icon={SettingsOutlinedIcon}
          isFeature={false}
          isNewChat={false}
          heading="Settings"
        />
        <MenuItem
          Icon={LaunchOutlinedIcon}
          isFeature={false}
          isNewChat={false}
          heading="Get help"
        />
        <MenuItem
          Icon={LogoutOutlinedIcon}
          isFeature={false}
          isNewChat={false}
          heading="Log out"
        />
      </Box>
    </Box>
  );

  const drawer = (
    <React.Fragment>
      <Drawer
        variant={
          device === "Desktop"
            ? "permanent"
            : device === "Uncertain"
            ? "temporary"
            : "temporary"
        }
        //variant={matches ? "temporary" : "permanent"}
        anchor={"left"}
        color="black"
        open={open}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
        PaperProps={{
          sx: {
            backgroundColor: "#202123",
            width: 320,
          },
        }}
      >
        {drawerItemList("left")}
      </Drawer>
    </React.Fragment>
  );

  return (
    <div>
      {drawer}
      <Wrapper>
        <MenuSection>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon
              fontSize="small"
              sx={{
                width: "32px",
                height: "32px",
                color: "#C5C5CF",
              }}
            />
          </IconButton>
        </MenuSection>
        <HeadingSection>
          <Typography
            sx={{
              color: "#C5C5CF",
              fontWeight: "500",
              fontSize: "15px",
            }}
          >
            New Chat
          </Typography>
        </HeadingSection>
        <NewChatSection>
          <AddIcon
            fontSize="large"
            sx={{
              color: "#C5C5CF",
            }}
          />
        </NewChatSection>
      </Wrapper>
    </div>
  );
}

export default NavMenu;
