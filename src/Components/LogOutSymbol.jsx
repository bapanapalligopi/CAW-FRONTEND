import React from "react";
import { BiLogOut } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
export default function LogOutSymbol({ HandleLogOut }) {
  return (
    <>
      {" "}
      <div>
        <div
          className={styles.addFreindTooltip}
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          data-bs-custom-class="addfriend-tooltip"
          data-bs-title="Log Out"
          onClick={HandleLogOut}
        >
          <BiLogOut color="#0cc0df" fontSize="2rem" />
        </div>
      </div>
    </>
  );
}
