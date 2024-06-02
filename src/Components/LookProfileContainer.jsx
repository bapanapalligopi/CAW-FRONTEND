import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
import profilephoto from "../assets/profilephoto.png";

export default function LookProfileContainer({
  currentUsername,
  handleCloseButtonOfCanvasInHeader,
}) {
  return (
    <>
      <div
        className={`offcanvas offcanvas-start ${styles.LookProfileContainer}`}
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="lookprofileoffcanvas"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div
          className={`offcanvas-header ${styles.LoookProfileoffcanvasheader}`}
        >
          <h5
            className={`offcanvas-title ${styles.LookProfileoffcanvastitle}`}
            id="offcanvasScrollingLabel"
          >
            Hello, {currentUsername.substring(0, currentUsername.indexOf("@"))}
          </h5>
          <button
            type="button"
            className={`btn-close ${styles.offcanvasclosebutton}`}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={handleCloseButtonOfCanvasInHeader}
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className={styles.profilephotoContainer}>
            <img
              src={profilephoto}
              alt="profle photo"
              className={styles.profileimage}
            />
          </div>
          <div className={styles.userDetailsContainer}>
            <div className={styles.usernameContainer}>
              Username:{" "}
              {currentUsername.substring(0, currentUsername.indexOf("@"))}
            </div>
            <div className={styles.emailCOntainer}>Email:{currentUsername}</div>
          </div>
        </div>
      </div>
    </>
  );
}
