import React from "react";
import { useState } from "react";
import styles from "../Styles/login.module.css";

export default function SignupDetailsForm({ acs, setacs, Setcreateaccount }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [otp, setotp] = useState("");
  const [randomotp, setrandomotp] = useState("");
  const [isSignUpErrors, setisSignUpErrors] = useState(false);
  const [singUpErrors, setsingUpErrors] = useState("");
  const [dbotp, setdbotp] = useState(null);
  const [isSuccess, setisSucess] = useState(false);
  const [success, setsuccess] = useState("");
  const Handleotp = async () => {
    console.log("user email:" + email);
    const otpRequest = {
      to: email,
      subject: "Chat AnyWhere",
      text: "Welcome to Chat AnyWhere.\n",
    };
    const response = await fetch(
      `https://chatanywhere-0evk.onrender.com/send-otp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(otpRequest),
      }
    );
    if (response.status == 500) {
      isSignUpErrors(true);
      alert("otp is not send");
    }
    if (response.ok) {
      alert("otp sent successfully");
      const data = await response.json();
      setdbotp(data);
    }
  };
  const HandleNewAccount = async () => {
    console.log("account creation proecessing");
    const createRequest = {
      username: email,
      password: password,
    };
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedOTP = otp.trim();
    // Check if email, password, and otp are not empty strings
    if (trimmedEmail === "" || trimmedPassword === "" || trimmedOTP === "") {
      setisSignUpErrors(true);
      setsingUpErrors("Please provide all details");
      setemail("");
      setotp("");
      setpassword("");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setisSignUpErrors(true);
      setsingUpErrors("Please provide a valid email address");
      setemail("");
      setotp("");
      setpassword("");
      return;
    }

    //check otp matched or not
    if (otp == dbotp.otp) {
      console.log("weoclome");
      const response = await fetch(
        `https://chatanywhere-0evk.onrender.com/create`,
        {
          method: "POST",
          headers: {
            "COntent-Type": "application/json",
          },
          body: JSON.stringify(createRequest),
        }
      );

      if (response.status == 500 || response.status == 400) {
        const data = await response.json();
        setisSignUpErrors(true);
        setsingUpErrors(data.message);
        setemail("");
        setotp("");
        setpassword("");
      }
      if (response.ok) {
        alert("Account Created successfully.");
        setacs(true);
        Setcreateaccount(false);
      }
    } else {
      console.log("not welcome");
      setisSignUpErrors(true);
      setsingUpErrors("Invalid otp!");
      setemail("");
      setotp("");
      setpassword("");
    }
  };
  return (
    <>
      <div>
        <div className={styles.SignupDetailsContainer}>
          <div className={styles.detailsContainer}>
            <div>
              <h3>Sign Up</h3>
              <p>it's simple and easy</p>
            </div>
            <div>
              {" "}
              <input
                type="text"
                placeholder="Enter your email"
                className={styles.input}
                onChange={(e) => setemail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                className={styles.input}
                onChange={(e) => setpassword(e.target.value)}
                value={password}
              />
            </div>

            <div className={styles.otpContainer}>
              <input
                type="text"
                placeholder="Enter one time password"
                className={styles.inputotp}
                onChange={(e) => setotp(e.target.value)}
                value={otp}
              />
              <button className={styles.otp} onClick={Handleotp}>
                Get Otp
              </button>
            </div>
            <div className={styles.singUpErrorsContainer}>
              {isSignUpErrors ? singUpErrors : ""}
            </div>
            <div className={styles.singUpSuccessContainer}>
              {isSuccess ? success : " "}
            </div>
            <div>
              <button
                className={styles.createsignupbut}
                onClick={HandleNewAccount}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
