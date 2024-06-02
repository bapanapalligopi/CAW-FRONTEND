import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
import { FaQuestion } from "react-icons/fa";

export default function HelpSymbol({ HandleHelp }) {
  return (
    <>
      <div>
        <div
          className={styles.addFreindTooltip}
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          data-bs-custom-class="addfriend-tooltip"
          data-bs-title="about,help?"
          onClick={HandleHelp}
        >
          <FaQuestion color="#0cc0df" fontSize="2rem" />
        </div>
      </div>
    </>
  );
}
