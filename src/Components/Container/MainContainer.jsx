import { Box, Button, Container } from "@chakra-ui/react";
import React from "react";
import companies from "../../Images/companies.PNG";
import l1 from "../../Images/l1.PNG";
import l2 from "../../Images/l2.PNG";
import l3 from "../../Images/l3.PNG";
import l4 from "../../Images/l4.PNG";
import l5 from "../../Images/l5.PNG";
import l6 from "../../Images/l6.PNG";
import l7 from "../../Images/l7.PNG";
import l8 from "../../Images/l8.PNG";
import u1 from "../../Images/upskill1.PNG";
import u2 from "../../Images/upskill2.PNG";
import u3 from "../../Images/upskill3.PNG";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

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
      <Container className="cont-2" maxW="4x2">
        <div>
          <h1>
            PLETHORA OF OPPORTUNITIES{" "}
            <span style={{ color: "#DF1E2E" }}>FOR YOU</span>
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
        <h1>
          LET'S GET SOME{" "}
          <span style={{ color: "#DF1E2E" }}>WORK EXPERIENCE</span>
        </h1>
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
      <Container className="cont-4" maxW="4x2">
        <h1>
          HOW ABOUT <span style={{ color: "#DF1E2E" }}>UPSKILLING ?</span>
        </h1>
        <div>
          <img src={`${u1}`} alt="stock trader" />
          <img src={`${u2}`} alt="digital marketing" />
          <img src={`${u3}`} alt="browse website" />
        </div>
      </Container>
      <Container className="cont-5" maxW="4x2">
        <div>
          <img
            src="https://assets.interntheory.com/creative/chart.png"
            alt="creative chart"
            style={{ maxWidth: "" }}
          />
        </div>
        <div>
          <h1>
            PLETHORA OF OPPORTUNITIES{" "}
            <span style={{ color: "#DF1E2E" }}>FOR YOU</span>
          </h1>
          <hr />
          <p>
            We are on a mission to connect employers to young talent all over
            India. With our strong corporate network, it will no longer be a
            challenge to find the right internship for you
          </p>
        </div>
      </Container>
      <Container className="cont-6" maxW="4x2">
        SLIDESHOW WILL APPEAR HERE
      </Container>
      <Container className="cont-7-footer" maxW="4x2">
        <div>
          <div>
            <FaFacebookSquare size="30" />
            <AiFillLinkedin size="30" />
            <AiFillTwitterSquare size="30" />
            <FaInstagramSquare size="30" />
          </div>
          <div>
            <p>BY PLACE</p>
            <hr />
            <p>BY PLACE Internships In Mumbai</p>
            <p>Internships In Delhi</p>
            <p>Internships In Bangalore</p>
            <p>Internships In Pune</p>
            <p>Internships In Hyderabad</p>
          </div>
          <div>
            <p>BY PROFILE</p>
            <hr />
            <p>Marketing Internships</p>
            <p>Business Development Internships</p>
            <p>Content Writing Internships</p>
            <p>Graphic Designing Internships</p>
            <p>HR Internships</p>
            <p>Engineering Internships</p>
          </div>
          <div>
            <p>BY TYPE</p>
            <hr />
            <p>Full Time Internships</p>
            <p>Part Time Internships</p>
            <p>Work From Home Internships</p>
          </div>
        </div>
        <div>
          <p>REFUND & CANCELLATION POLICY</p>
          <p>COURSES</p>
          <p>TERMS AND CONDITIONS</p>
          <p>PRIVACY POLICY</p>
          <p>CONTACT US</p>
          <p>ABOUT US</p>
          <p>SITEMAP</p>
        </div>
        <hr />
        <p>© 2015 - 2022 INTERNTHEORY. ALL RIGHTS RESERVED.</p>
      </Container>
    </div>
  );
}
