import {
  Button,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import "../../Styles.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
export default function Navbar() {
  const { isAuth, token,login } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      {/* menu with navigation links */}
      <div>
        <Menu size={"md"} className={"menu"}>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<AddIcon />} command="⌘T">
              New Tab
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
              New Window
            </MenuItem>
            <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
              Open Closed Tab
            </MenuItem>
            <MenuItem icon={<EditIcon />} command="⌘O">
              Open File...
            </MenuItem>
          </MenuList>
        </Menu>
        {/* logo */}
        <Image
          src="https://assets.interntheory.com/creative/logo.png"
          alt="logo"
          width={"80px"}
          height={"40px"}
          className={"logo"}
          onClick={() => navigate("/")}
        />
        {isAuth ? <h1>{token}</h1> : null}
      </div>
      <div>
        {isAuth ? (
          <>
          <div style={{display:"flex"}}>
            <Button
              size={"sm"}
              width={"100%"}
              fontSize={"18px"}
              colorScheme="blue"
              onClick={() => navigate("/internships/applied")}
            >
              Applied internships
            </Button>
          <p className="link" style={{color:"red",fontSize:"14px"}} onClick={()=>{
            login(null)
            navigate("/")
          }}>LOG OUT</p>
          </div>      
          </>
        ) : null}
        <div className="cartBox">
          {isAuth ? <FaShoppingCart className="cart" /> : null}
        </div>
        <div style={{ margin: "auto" }}>
          {isAuth ? (
            <h1>{token}</h1>
          ) : (
            <Button
              size={"sm"}
              width={"100%"}
              fontSize={"18px"}
              colorScheme="red"
              onClick={() => navigate("/login/student")}
            >
              SIGN IN
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
