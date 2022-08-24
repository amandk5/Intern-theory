import { Box, Button, Container } from "@chakra-ui/react";
import React from "react";
import companies from "../../Images/companies.PNG";
import l1 from "../../Images/l1.PNG"
import l2 from "../../Images/l2.PNG"
import l3 from "../../Images/l3.PNG"
import l4 from "../../Images/l4.PNG"
import l5 from "../../Images/l5.PNG"
import l6 from "../../Images/l6.PNG"
import l7 from "../../Images/l7.PNG"
import l8 from "../../Images/l8.PNG"

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
        centerContent
        className="cont-1"
        // backgroundImage={
        //   "https://assets.interntheory.com/creative/Homepage-Banner.png"
        // }
      >
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
      <Container
        className="cont-2"
        maxW="4x2"
      >
        <div>
          <h1>
            PLETHORA OF OPPORTUNITIES <span style={{color:"#DF1E2E"}}>FOR YOU</span>
          </h1>
          <hr />
          <p>
            We are on a mission to connect employers to young talent all over
            India. With our strong corporate network, it will no longer be a
            challenge to find the right internship for you
          </p>
        </div>
        <div>
          <img src={`${companies}`} alt="companies" />
        </div>
      </Container>
      <Container className="cont-3" maxW="4x2">
        <h1>LET'S GET SOME <span style={{color:"#DF1E2E"}}>WORK EXPERIENCE</span></h1>
        <div>
          <img src={`${l1}`} alt="marketing" />
          <img src={`${l2}`} alt="business dev" />
          <img src={`${l3}`} alt="content writing" />
          <img src={`${l4}`} alt="graphic design" />
          <img src={`${l5}`} alt="finance" />
          <img src={`${l6}`} alt="human resource" />
          <img src={`${l7}`} alt="engineering" />
          <img src={`${l8}`} alt="all internships" />
        </div>
      </Container>
    </div>
  );
}
