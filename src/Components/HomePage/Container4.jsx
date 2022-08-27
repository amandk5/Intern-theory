import { Container } from '@chakra-ui/react'
import React from 'react'
import '../../Styles.css';

import u1 from "../../Images/upskill1.PNG";
import u2 from "../../Images/upskill2.PNG";
import u3 from "../../Images/upskill3.PNG";

export default function Container4() {
  return (
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
  )
}
