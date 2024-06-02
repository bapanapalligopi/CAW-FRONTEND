import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { TbUserSquareRounded } from "react-icons/tb";

import styles from "../Styles/profile.module.css";
export default function SelectedFriendProfile({ currentFriend }) {
  return (
    <>
      <div className={styles.currentFriendProfile}>
        <TbUserSquareRounded color="#0cc0df" fontSize="2.5rem" />{" "}
        {currentFriend.substring(0, currentFriend.indexOf("@"))}
      </div>
    </>
  );
}
