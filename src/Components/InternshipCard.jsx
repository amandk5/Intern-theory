import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles.css";

export default function InternshipCard({
  id,
  image,
  profile,
  company,
  internship_type,
  working_field,
  location,
  stipend,
  weeks_left,
  type,
  pageType
}) {
  const navigate = useNavigate();

  return (
    <div className="internship-Box">
      <div>
        <h3>{profile}</h3>
        <h4>{company}</h4>
        <p>{internship_type}</p>
        <p>{working_field}</p>
        <p>{location}</p>
        <h4>Stipend: {stipend}</h4>
      </div>
      <div>
        <p>{weeks_left}</p>
        <img
          src={image}
          alt={company}
          width={"70px"}
        />
        <p>
          <span className="link">
            {
              pageType==="applied"?
              <b style={{color:"red"}}>APPLIED</b>
              :
              <b onClick={()=>navigate(`/internships/${id}`)}>VIEW AND APPLY</b>
            }
          </span>
        </p>
      </div>
    </div>
  );
}
