import { Box, Button, Container } from "@chakra-ui/react";
import React from "react";
import InternshipPage from "../../Routes/InternshipPage";

import "../../Styles.css";
import Footer from "../Footer";
import Container2 from "../HomePage/Container2";
import Container3 from "../HomePage/Container3";
import Container4 from "../HomePage/Container4";
import Container5 from "../HomePage/Container5";
import SearchBox from "../SearchBox";

export default function MainContainer({ page_type }) {
  return (
    <div className="container">
      {page_type === "internships" ? (
        <>
          <SearchBox page_type={page_type}/>
          <InternshipPage/>
        </>
      ) : (
        <>
          <SearchBox />
          <Container2 />
          <Container3 />
          <Container4 />
          <Container5 />
        </>
      )}
      <Footer />
    </div>
  );
}
