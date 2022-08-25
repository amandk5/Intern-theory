import { Container } from "@chakra-ui/react";
import React from "react";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import '../Styles.css';

export default function Footer() {
  return (
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
  );
}
