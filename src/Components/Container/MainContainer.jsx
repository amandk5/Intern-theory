import { Box, Button, Container } from "@chakra-ui/react";
import React from "react";
import "../../Styles.css";

export default function MainContainer() {
  return (
    <div className="container">
      <Container
        maxW="4x2"
        height="auto"
        padding="5px auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        h="auto"
        centerContent
        className="cont"
        // backgroundImage={
        //   "https://assets.interntheory.com/creative/Homepage-Banner.png"
        // }
      >
        {/* first box to darken the backgroundImage */}
        {/* <Box padding="4" h="67%" maxW="xxl" className="cont1"></Box> */}
        {/* this one contains the internship search functionality  */}
        <Box padding="4" maxW="xxl" className="cont11">
          <h1>
            Let's Get You <button>Ready</button>
          </h1>
          <p>
            The One Stop to Upgrade Your Resume. Expand Your Skillset. Do An
            Internship. Get Placed
          </p>
          <br />
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
            <div>
              <input type="text" placeholder="Search..." name="" id="" />
              <Button colorScheme="red" color="white" size="sm">
                SEARCH
              </Button>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
