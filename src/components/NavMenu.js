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
  Modal,
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
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import UpgradeFeatureList from "./UpgradeFeatureList";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 3,
};

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

const UpgradeModelParentLayout = styled.section`
  display: flex;
  flex-direction: column;
`;
const UpgradeFreeLayout = styled.section``;

const UpgradePaidLayout = styled.section``;

const UpgradeButtonLayout = styled.section`
  padding: 15px;
  border-radius: 4px;
  width: 200px;
  margin-bottom: 20px;

  background-color: ${(props) =>
    props.isPlus === false ? "#E2E2E8" : "#1A7F64"};
  &:hover {
    cursor: ${(props) => (props.isPlus === false ? "not-allowed" : "pointer")};
  }
`;

const UpgradeCancelLayout = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const UpgradeHeadingLayout = styled.section`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const UpgradePlanLayout = styled.section`
  display: flex;
  background-color: aliceblue;
  justify-content: space-between;
  border-top: 1px solid grey;
`;

function NavMenu(props) {
  const matches = useMediaQuery("(min-width:600px)");
  var width = window.innerWidth;
  const [open, setOpen] = useState(false);
  const [device, setDevice] = useState("Uncertain");
  const [openupgradeModel, setOpenupgradeModel] = React.useState(false);

  const openUpgradeModel = () => setOpenupgradeModel(true);
  const closeUpgradeModel = () => setOpenupgradeModel(false);

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

  const UpgradeDialog = (
    <React.Fragment>
      <Modal
        open={openupgradeModel}
        onClose={closeUpgradeModel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UpgradeModelParentLayout>
            <UpgradeCancelLayout>
              <Typography sx={{ fontSize: "17px", fontWeight: "bold" }}>
                Your plan
              </Typography>
              <IconButton onClick={closeUpgradeModel}>
                <ClearOutlinedIcon sx={{ color: "gray" }} />
              </IconButton>
            </UpgradeCancelLayout>

            <UpgradePlanLayout>
              <UpgradeFreeLayout>
                <Typography
                  sx={{
                    fontSize: "21px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Free plan
                </Typography>
                <UpgradeButtonLayout isPlus={false}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "14px",
                      color: "",
                    }}
                  >
                    Your current plan
                  </Typography>
                </UpgradeButtonLayout>
                <UpgradeFeatureList
                  heading="Available when demand is low"
                  isPaidPlan={false}
                />
                <UpgradeFeatureList
                  heading="Standard response speed"
                  isPaidPlan={false}
                />
                <UpgradeFeatureList
                  heading="Regular model updates"
                  isPaidPlan={false}
                />
              </UpgradeFreeLayout>

              <UpgradePaidLayout>
                <UpgradeHeadingLayout>
                  <Typography sx={{ fontSize: "21px", fontWeight: "bold" }}>
                    ChatGPT Plus
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      marginLeft: "8px",
                      fontWeight: "bold",
                      color: "#8E8EA0",
                    }}
                  >
                    USD $20/mo
                  </Typography>
                </UpgradeHeadingLayout>

                <UpgradeButtonLayout isPlus={true}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "14px",
                      color: "white",
                    }}
                  >
                    Upgrade plan
                  </Typography>
                </UpgradeButtonLayout>
                <UpgradeFeatureList
                  heading="Available even when demand is high"
                  isPaidPlan={true}
                />
                <UpgradeFeatureList
                  heading="Faster response speed"
                  isPaidPlan={true}
                />
                <UpgradeFeatureList
                  heading="Priority access to new features"
                  isPaidPlan={true}
                />
                <Typography
                  sx={{
                    textDecoration: "underline",
                    marginTop: "20px",
                    fontSize: "14px",
                  }}
                >
                  I need help with a billing issue
                </Typography>
              </UpgradePaidLayout>
            </UpgradePlanLayout>
          </UpgradeModelParentLayout>
        </Box>
      </Modal>
    </React.Fragment>
  );

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
          onClick={openUpgradeModel}
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
      {UpgradeDialog}
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
