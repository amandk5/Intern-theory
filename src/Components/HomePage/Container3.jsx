import { Container } from '@chakra-ui/react'
import React from 'react'
import '../../Styles.css';

import l1 from "../../Images/l1.PNG";
import l2 from "../../Images/l2.PNG";
import l3 from "../../Images/l3.PNG";
import l4 from "../../Images/l4.PNG";
import l5 from "../../Images/l5.PNG";
import l6 from "../../Images/l6.PNG";
import l7 from "../../Images/l7.PNG";
import l8 from "../../Images/l8.PNG";

export default function Container3() {
  return (
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
  )
}
