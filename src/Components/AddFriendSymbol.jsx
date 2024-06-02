import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
import { FaUserPlus } from "react-icons/fa6";

export default function AddFriendSymbol() {
  return (
    <>
      <div
        className={styles.addFreindTooltip}
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        data-bs-custom-class="addfriend-tooltip"
        data-bs-title="Add friend"
      >
        <div
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
        >
          <FaUserPlus color="#0cc0df" fontSize="2rem" />
        </div>
      </div>
    </>
  );
}
