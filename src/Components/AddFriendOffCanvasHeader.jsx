import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
export default function AddFriendOffCanvasHeader({
  handleCloseButtonOfCanvasInHeader,
}) {
  return (
    <>
      <div className={`offcanvas-header ${styles.offcanvasheader}`}>
        <h5
          className={`offcanvas-title ${styles.offcanvastitle}`}
          id="offcanvasScrollingLabel"
        >
          Add Friend
        </h5>
        <button
          type="button"
          className={`btn-close ${styles.offcanvasclosebutton}`}
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={handleCloseButtonOfCanvasInHeader}
        ></button>
      </div>
    </>
  );
}
