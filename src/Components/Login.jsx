import React from "react";
import styles from "../Styles/login.module.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import LogginDetailsForm from "./LogginDetailsForm";
import SignupDetailsForm from "./SignupDetailsForm";
export default function Login({ IsLoggin, setIsLoggin, setCurrentUsername }) {
  const [username, Setusername] = useState("");
  const [password, SetPaswword] = useState("");
  const [createaccount, Setcreateaccount] = useState(false);
  const [acs, Setacs] = useState(false);
  const AcoountCreation = () => {
    console.log("cliked");
    Setcreateaccount(true);
  };

  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.logodescConatiner}>
        <div className={styles.logoContainer}>
          <p className={styles.logo}>Chat AnyWhere</p>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            <p>
              Chat AnyWhere application helps you to Connect your lifes anyone
              easily.{" "}
            </p>
            <p>No need of mobile phone for connecting to your friends.</p>
          </p>
        </div>
      </div>

      {!createaccount ? (
        <LogginDetailsForm
          SetPaswword={SetPaswword}
          Setusername={Setusername}
          AcoountCreation={AcoountCreation}
          username={username}
          password={password}
          setIsLoggin={setIsLoggin}
          setCurrentUsername={setCurrentUsername}
        />
      ) : !acs ? (
        <SignupDetailsForm
          acs={acs}
          setacs={Setacs}
          Setcreateaccount={Setcreateaccount}
        />
      ) : (
        <LogginDetailsForm
          SetPaswword={SetPaswword}
          Setusername={Setusername}
          AcoountCreation={AcoountCreation}
          username={username}
          password={password}
          setIsLoggin={setIsLoggin}
          setCurrentUsername={setCurrentUsername}
        />
      )}
    </div>
  );
}
