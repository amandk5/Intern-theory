import { Box, Button, Container } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import "../Styles.css";

export default function SearchBox({ page_type }) {
  const {isAuth } = useContext(AppContext);

  const navigate = useNavigate();
  return (
    <Container
      maxW="4x2"
      height="auto"
      padding="5px auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      centerContent
      className={!page_type ? "cont-1" :  "cont-1-internships"}
      // backgroundImage={
      //   "https://assets.interntheory.com/creative/Homepage-Banner.png"
      // }
    >
      {/* this one contains the internship search functionality  */}
      <Box padding={!page_type ? "4" : "0"} maxW="xxl" className={!page_type ? "cont11" : "cont11-internships"}>
        {!page_type && (
          <>
            <h1>
              Let's Get You <button>Ready</button>
            </h1>
            <p>
              The One Stop to Upgrade Your Resume. Expand Your Skillset. Do An
              Internship. Get Placed
            </p>
            <br />
          </>
        )}
        <Box w="100%" padding="4" maxW="xxl" className="searchBox">
          <div>
            <input type="text" placeholder="Cities..." name="" id="" />
            <select disabled name="" id=""></select>
          </div>
          <div>
            <input type="text" placeholder="Type..." name="" id="" />
            <select disabled name="" id=""></select>
          </div>
          <div>
            <input type="text" placeholder="Preferences..." name="" id="" />
            <select disabled name="" id=""></select>
          </div>
          OR
          <div style={page_type ?{background:"#F2F2F2", color:"black"}: null}>
            <input type="text" placeholder="Search..." name="" id="" />
            <Button
              colorScheme={page_type ? "blue" : "red"}
              color="white"
              size="sm"
              onClick={() => {
                isAuth ? navigate("/internships") : alert("You need to login first")
              }}
            >
              SEARCH
            </Button>
          </div>
        </Box>
      </Box>
    </Container>
  );
}
