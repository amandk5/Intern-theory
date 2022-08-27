import { Container } from '@chakra-ui/react'
import React from 'react'
import companies from "../../Images/companies.PNG";
import '../../Styles.css';

export default function Container2() {
  return (
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
  )
}
