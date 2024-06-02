import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
export default function AddFriendSearchResults({ searchFriendInputResults }) {
  return (
    <>
      {" "}
      <div className={styles.searchFriendInputResultsContainer}>
        {searchFriendInputResults}
      </div>
    </>
  );
}
