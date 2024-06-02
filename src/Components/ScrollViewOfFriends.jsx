import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
import AllFriends from "./AllFriends";
import Help from "./Help";
import ScrollArea from "react-scrollbar";

export default function ScrollViewOfFriends({
  help,
  allfriends,
  HandleSelectedUSer,
  sethelp,
}) {
  return (
    <>
      <ScrollArea className={styles.scrollviewOfFriends}>
        {!help ? (
          <AllFriends
            allfriends={allfriends}
            HandleSelectedUSer={HandleSelectedUSer}
          />
        ) : (
          <Help sethelp={sethelp} />
        )}
      </ScrollArea>
    </>
  );
}
