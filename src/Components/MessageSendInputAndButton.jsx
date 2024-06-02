import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
import { IoSend } from "react-icons/io5";

export default function MessageSendInputAndButton({
  userSendMessageContent,
  sendMessage,
  setSendMessage,
  setuserSendMessageContenet,
  handleMessageTransaction,
}) {
  return (
    <>
      <div className={styles.messageSendContainer}>
        <input
          type="text"
          placeholder="Enter Your Message.."
          className={styles.sendMessageInput}
          value={userSendMessageContent}
          onChange={(e) => {
            setSendMessage(true);
            setuserSendMessageContenet(e.target.value);
          }}
        />

        {sendMessage ? (
          <div className={styles.sendMessageButton}>
            <IoSend
              color="#0cc0df"
              fontSize="3rem"
              onClick={() => {
                setSendMessage(false);
                handleMessageTransaction();
                setuserSendMessageContenet("");
              }}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
