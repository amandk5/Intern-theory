import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import "../Styles.css";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function InternshipDetails() {
  const { isAuth, token } = useContext(AppContext);
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://json-server-p1rm.onrender.com/internships/${id}`)
      .then((res) => {
        setData({
          id: res.data.id,
          image: res.data.image,
          profile: res.data.profile,
          company: res.data.company,
          internship_type: res.data.internship_type,
          working_field: res.data.working_field,
          location: res.data.location,
          stipend: res.data.stipend,
          weeks_left: res.data.weeks_left,
          type: res.data.type,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div
          className="internship-Box"
          style={{
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "left",
            width: "400px",
            margin: "auto",
            border: "1px solid black",
            padding: "20px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <div>
            <img src={data.image} alt={data.company} width={"70px"} />
          </div>
          <br />
          <div>
            <h3>
              <b>Profile:</b> {data.profile}
            </h3>
            <h4>
              <b>Company:</b> {data.company}
            </h4>
            <p>
              <b>Internship-Type:</b> {data.internship_type}
            </p>
            <p>
              <b>Work-Field:</b> {data.working_field}
            </p>
            <p>
              <b>location</b>: {data.location}
            </p>
            <p>
              <b>Application Deadline:</b>
              {data.weeks_left}
            </p>
            <h6>
              <b>Stipend: {data.stipend}</b>
            </h6>
            <hr />
            <br />
            <h3>
              <b>Perks</b>
            </h3>
            <p>
              Certificate of Internship, Possibility of Pre Placement Offer, You
              will also get incentive when you fulfill our target.
            </p>
            <br />
            <button
              className="link"
              style={{ backgroundColor: "#DF1E2E", borderRadius: "0.25rem" }}
              onClick={() => {
                if (isAuth) {
                  navigate("/internships/applied");
                } else {
                  alert("You need to login first");
                }
              }}
            >
              <b style={{ color: "white" }}>APPLY</b>
            </button>
            <br />
            <button
              className="link back"
              onClick={() => navigate("/internships")}
            >
              Back to Internships
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
