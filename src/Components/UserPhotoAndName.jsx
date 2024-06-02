import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
import { TbUserSquareRounded } from "react-icons/tb";

export default function UserPhotoAndName({ currentUsername }) {
  return (
    <>
      <div
        data-bs-toggle="offcanvas"
        data-bs-target="#lookprofileoffcanvas"
        aria-controls="lookprofileoffcanvas"
      >
        <TbUserSquareRounded color="#0cc0df" fontSize="2.5rem" />{" "}
        {currentUsername.substring(0, currentUsername.indexOf("@"))}
      </div>
    </>
  );
}
