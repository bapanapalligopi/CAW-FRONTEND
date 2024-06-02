import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function SingleChat({ msg, currentUsername }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent:
            msg.senderUsername === currentUsername ? "flex-end" : "flex-start",
          padding: "10px",
          marginRight: "30px",
          // backgroundColor: "whitesmoke",
          // color: "black",
          marginBottom: "20px",
          // width: "300px",
        }}
      >
        {msg.message}
      </div>
    </>
  );
}
