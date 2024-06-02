import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";

import ScrollArea from "react-scrollbar";
import SingleChat from "./SingleChat";
export default function SelectedFriendAndCurrentUserChatInScrollView({
  allMessages,
  currentUsername,
}) {
  const sortedMessages = allMessages.slice().sort((a, b) => {
    // Parse timestamps as Date objects
    const dateA = new Date(a.createdOn);
    const dateB = new Date(b.createdOn);

    // Compare the dates including milliseconds
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <>
      <ScrollArea
        className={styles.listOfMessagesFromCurrentFriendInScrollView}
      >
        {sortedMessages.length === 0 && (
          <div className={styles.noMessagesConatiner}>
            Hey {currentUsername.substring(0, currentUsername.indexOf("@"))}, No
            Messages Found. Start Chat with Your Friend.
          </div>
        )}

        {sortedMessages.map((msg) => {
          return (
            <div key={msg}>
              <SingleChat msg={msg} currentUsername={currentUsername} />
            </div>
          );
        })}
      </ScrollArea>
    </>
  );
}
