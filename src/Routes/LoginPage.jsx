import { Button, Checkbox, Input } from "@chakra-ui/react";
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "../Styles.css";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useState } from "react";
import { LoginAction, LOGIN_USER } from "../Reducer/ActionCreator";
import reducer from "../Reducer/reducer";

export default function LoginPage({ loginType }) {
  const [state, dispatch] = useReducer(reducer, {});

  const { isAuth, login } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // fetch(
    //   "https://www.interntheory.com/api/internships/internships-in-delhi?page=1&size=10",
    //   { method:"GET",mode: "cors" }
    // ).then((response) => response.json()).then((result) => console.log(result)).catch((error) => console.log("error", error));
  }, []);
  return (
    <div>
      {isAuth}
      <Navbar />
      <div className="login-container">
        <div className="login-signup-form-box">
          <div>
            <Button
              onClick={() => navigate("/login/student")}
              style={
                loginType === "student"
                  ? {
                      borderBottom: "3px solid #087CDD",
                      borderRadius: "0px",
                      color: "#087CDD",
                    }
                  : null
              }
            >
              STUDENT
            </Button>
            <Button
              onClick={() => navigate("/login/company")}
              style={
                loginType === "company"
                  ? {
                      borderBottom: "3px solid #087CDD",
                      borderRadius: "0px",
                      color: "#087CDD",
                    }
                  : null
              }
            >
              COMPANY
            </Button>
          </div>
          <h1>Login</h1>
          <p className="note">
            If you are a company looking to hire interns, please login as a
            company by clicking{" "}
            <span className="link" onClick={() => navigate("/login/company")}>
              here
            </span>
            .
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
                <h1>{null}</h1>
                <h1>{null}</h1>
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
                <h1>{null}</h1>
                <h1>{null}</h1>
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
                <BsLinkedin size="28px" color="#377CA5" />
              </button>
              <h1>SIGNIN WITH LINKEDIN</h1>
              <h1>{null}</h1>
              <h1>{null}</h1>
            </div>
          )}
          <span style={{ color: "grey", fontSize: "15px" }}>OR</span>
          <Input
            type="email"
            placeholder="Enter Email"
            className="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            className="password"
            onChange={(e) => setPassword(e.target.value)}
          />
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
            <span
              className="link"
              onClick={() => navigate("/register/student")}
            >
              Create your account
            </span>
          </p>
          <Button
            className="login-btn"
            variant="white"
            onClick={() => {
              const getStatus = dispatch(LOGIN_USER(email, password));
              setStatus(getStatus);
              console.log(getStatus);
              // setTimeout(() => {
              if (status === false) {
                alert("Login Failed");
              } else {
                login(status);
                alert("Login Successful");
                navigate("/internships");
              }
              // }, 1000);
            }}
          >
            LOGIN
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
