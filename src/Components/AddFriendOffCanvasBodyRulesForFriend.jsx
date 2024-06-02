import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
export default function AddFriendOffCanvasBodyRulesForFriend() {
  return (
    <>
      {" "}
      <div className={styles.ruleforfriend}>
        Your friend must have an Account in Chat AnyWhere for adding him into
        your friends list.
      </div>
    </>
  );
}
