import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
import { TbUserSquareRounded } from "react-icons/tb";

export default function SingleFriendInListOfFriends({
  key,
  HandleSelectedUSer,
  friend,
  user,
}) {
  return (
    <>
      <div
        className={styles.myfreindsContainer}
        key={key}
        onClick={() => HandleSelectedUSer(user)}
      >
        <div className={styles.singleFreindContainer} key={key}>
          <div>
            <TbUserSquareRounded color="#0cc0df" fontSize="2.5rem" />{" "}
            {friend.username.substring(0, friend.username.indexOf("@"))}
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
