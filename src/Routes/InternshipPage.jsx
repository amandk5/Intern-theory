import { Box, Container } from "@chakra-ui/react";
import React from "react";
import "../Styles.css";

export default function InternshipPage() {
  return (
    <Container
      className="cont-2-internships"
      maxW="4x2"
      padding="20px 100px"
    >
      <h1>All Internships</h1>
      <br />
      <div className="internship-Box">
        <div>
          <h3>Develop Your Skillset</h3>
          <h4>Online Skill Development Programs</h4>
          <p>Taught by Industry Experts Internship</p>
          <p>Certified Courses</p>
          <p>Guaranteed Internship Opportunities</p>
          <h4>Learn Industry-Demanded Skills</h4>
        </div>
        <div>
          <p>4-6 Weeks</p>
          <img
            src="https://assets.interntheory.com/creative/logo.png"
            alt="internTheory"
          />
          <p>
            <span className="link"><b>UPGRADE SKILLS</b></span>
          </p>
        </div>
      </div>
    </Container>
  );
}
