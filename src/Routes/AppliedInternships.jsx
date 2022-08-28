import { Box, Button, Container } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "../Styles.css";
import { useState } from "react";
import InternshipCard from "../Components/InternshipCard";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar/Navbar";

export default function AppliedInternships({ pageType }) {
  const [internshipData, setInternshipData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://stark-falls-73043.herokuapp.com/internships")
      .then((res) => setInternshipData(res.data));
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Container className="cont-2-internships" maxW="4x2" padding="20px 100px">
        <div style={{display:"flex", justifyContent:"left",marginBottom:"10px"}}>
        <Button colorScheme="blue" onClick={()=>navigate("/internships")}>Go To Internship Page</Button>
        </div>
        <h1>Applied Internships Appear here</h1>
        <br />
        {/* <div className="internship-Box">
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
            width={"70px"}
          />
          <a className="link" href="https://www.interntheory.com/courses?utm_source=internshipsleftman&utm_medium=webpage" style={{fontSize:"14px"}}>
            <b>UPGRADE SKILLS</b>
          </a>
        </div>
      </div> */}

        {/* displaying list of internships available */}
        {internshipData.map((internship) => (
          <InternshipCard
            id={internship.id}
            key={internship.id}
            image={internship.image}
            profile={internship.profile}
            company={internship.company}
            internship_type={internship.internship_type}
            working_field={internship.working_field}
            location={internship.location}
            stipend={internship.stipend}
            weeks_left={internship.weeks_left}
            type={internship.type}
            pageType={pageType}
          />
        ))}
      </Container>
      <Footer />
    </div>
  );
}
