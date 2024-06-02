import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SingleFriendInListOfFriends from "./SingleFriendInListOfFriends";
import styles from "../Styles/profile.module.css";
export default function AllFriends({ allfriends, HandleSelectedUSer }) {
  return (
    <>
      {allfriends.map((friend) => {
        const key = friend.username; // Concatenating username and date
        const user = friend.username;

        return (
          <SingleFriendInListOfFriends
            key={key}
            HandleSelectedUSer={HandleSelectedUSer}
            friend={friend}
            user={user}
          />
        );
      })}
    </>
  );
}
