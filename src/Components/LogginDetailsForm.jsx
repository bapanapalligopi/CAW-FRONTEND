import React, { useState } from "react";
import styles from "../Styles/login.module.css";
import { NavLink } from "react-router-dom";

export default function LogginDetailsForm({
  SetPaswword,
  Setusername,
  AcoountCreation,
  username,
  password,
  setIsLoggin,
  setCurrentUsername,
}) {
  const [loginerrors, Setloginerrors] = useState("");
  const [iserrors, Setiserrors] = useState(false);

  const Handlelogin = async () => {
    //convert details into login request and make api call

    const loginRequest = {
      username: username,
      password: password,
    };
    const response = await fetch(
      "https://chatanywhere-0evk.onrender.com/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest), // Stringify the object
      }
    );
    //if login failures
    if (!response.ok) {
      Setiserrors(true);
      const data = await response.json();
      Setloginerrors(data.message + " Please enter valid details...");
      return;
    }
    // if login success
    const data = await response.json();
    setCurrentUsername(username);
    Setusername("");
    SetPaswword("");
    setIsLoggin(true);
  };
  const handleinputchange = () => {
    Setiserrors(false);
  };

  return (
    <>
      <div>
        <div className={styles.loginDetailsContainer}>
          <div className={styles.detailsContainer}>
            <div>
              {" "}
              <input
                type="text"
                placeholder="Enter your username or email"
                className={styles.input}
                value={username}
                onChange={(e) => {
                  handleinputchange();
                  Setusername(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                className={styles.input}
                onChange={(e) => {
                  handleinputchange();
                  SetPaswword(e.target.value);
                }}
                value={password}
                required
              />
            </div>
            {!iserrors ? (
              ""
            ) : (
              <div>
                <p style={{ color: "red" }}>{loginerrors}</p>
              </div>
            )}
            <div>
              <button className={styles.loginbut} onClick={Handlelogin}>
                Log in
              </button>
            </div>
            <div>
              <hr className={styles.line} />
            </div>
            <div className={styles.noaccount}>
              <p>Don't have an account yet!</p>

              <button
                className={styles.createaccountbut}
                onClick={AcoountCreation}
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
