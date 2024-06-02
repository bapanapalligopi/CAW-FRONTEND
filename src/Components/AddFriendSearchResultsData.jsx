import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
import { TbUserSquareRounded } from "react-icons/tb";
import { MdPersonAddAlt } from "react-icons/md";

export default function AddFriendSearchResultsData({
  searchFriendInputResultsData,
  handleAddFriendButton,
}) {
  return (
    <>
      {searchFriendInputResultsData !== null && (
        <div
          className={styles.searchFriendInputResultsContainer}
          id="#searchFriendInputResultsContainerid"
        >
          <div
            key={searchFriendInputResultsData.username}
            className={styles.frienddata}
          >
            <div className={styles.addfriendUsername}>
              <TbUserSquareRounded color="#0cc0df" fontSize="2.5rem" />
              {searchFriendInputResultsData.username.substring(
                0,
                searchFriendInputResultsData.username.indexOf("@")
              )}
            </div>
            {/* <div className={styles.addfriendUsername}></div> */}
            <div>
              <button
                className={styles.addFreindButtonFromOffcanvas}
                onClick={handleAddFriendButton}
              >
                <MdPersonAddAlt color="#OCCODF" fontSize="1.5rem" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
