import { Button, Checkbox, Input } from "@chakra-ui/react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { BsFacebook,BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "../Styles.css";

export default function LoginPage({ loginType }) {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-signup-form-box">
          <div>
            <Button onClick={() => navigate("/login/student")}>STUDENT</Button>
            <Button onClick={() => navigate("/login/company")}>COMPANY</Button>
          </div>
          <h1>Login</h1>
          <p className="note">
            If you are a company looking to hire interns, please login as a
            company by clicking <span className="link">here</span>.
          </p>
          {loginType === "student" ? (
            <>
              <div className="signin-fb" style={{ background: "#4267B2" }}>
                <button
                  style={{
                    background: "white",
                    borderRadius: "0.25rem",
                    padding: "5px",
                  }}
                >
                  <BsFacebook size="28px" color="#4267B2" />
                </button>
                <h1>SIGNIN WITH FACEBOOK</h1>
                <h1></h1>
                <h1></h1>
              </div>
              <div className="signin-google" style={{ background: "#087CDD" }}>
                <button
                  style={{
                    background: "white",
                    borderRadius: "0.25rem",
                    padding: "5px",
                  }}
                >
                  <FcGoogle size="28px" />
                </button>
                <h1>SIGNIN WITH GOOGLE</h1>
                <h1></h1>
                <h1></h1>
              </div>
            </>
          ) : (
            <div className="signin-google" style={{ background: "#087CDD" }}>
              <button
                style={{
                  background: "white",
                  borderRadius: "0.25rem",
                  padding: "5px",
                }}
              >
                <BsLinkedin size="28px" color="#377CA5"/>
              </button>
              <h1>SIGNIN WITH LINKEDIN</h1>
              <h1></h1>
              <h1></h1>
            </div>
          )}
          <span style={{color:"grey",fontSize:"15px"}}>OR</span>
          <Input placeholder="Enter Email" className="email"/>
          <Input placeholder="Password" className="password"/>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "13px",
              margin: "5px auto",
            }}
          >
            <Checkbox size="sm">
              <p style={{ fontSize: "13px" }}>Remember Me</p>
            </Checkbox>
            <p className="link">Forgot Password?</p>
          </div>
          <p style={{ fontSize: "12px" }}>
            Don't have an account?{" "}
            <span className="link">Create your account</span>
          </p>
          <Button className="login-btn" variant="white">
            LOGIN
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
