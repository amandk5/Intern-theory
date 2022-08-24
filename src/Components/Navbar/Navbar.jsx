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
export default function Navbar() {
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
        />
      </div>
      <div>
        <div className="cartBox">
          <FaShoppingCart className="cart"/>
        </div>
        <div style={{margin:"auto"}}>
          <Button
            size={"sm"}
            width={"100%"}
            fontSize={"18px"}
            colorScheme="red"
          >
            SIGN IN
          </Button>
        </div>
      </div>
    </div>
  );
}
