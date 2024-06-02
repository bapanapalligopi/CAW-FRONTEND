import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
import { TbSearch } from "react-icons/tb";

export default function AddFriendOffCanvasBodySeaechForFriend({
  SearchInputForFriendUsername,
  setSearchInputForFriendUsername,
  handleSearchInputForFriendClicked,
}) {
  return (
    <>
      {" "}
      <div
        className={`input-group input-group-lg ${styles.FriendSearchContainer}`}
      >
        <input
          type="text"
          className={`form-control ${styles.searchFriendInput}`}
          placeholder="Enter your friend username here....."
          value={SearchInputForFriendUsername}
          onChange={(e) => {
            setSearchInputForFriendUsername(e.target.value);
          }}
        />
        <button
          className={`input-group-text ${styles.searchIcon}`}
          id="inputGroup-sizing-lg"
          onClick={handleSearchInputForFriendClicked}
        >
          <TbSearch />
        </button>
      </div>
    </>
  );
}
