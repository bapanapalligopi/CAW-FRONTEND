import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
import AddFriendSearchResultsData from "./AddFriendSearchResultsData";
import AddFriendClearButton from "./AddFriendClearButton";
import AddFriendSearchResults from "./AddFriendSearchResults";
import AddFriendOffCanvasBodyRulesForFriend from "./AddFriendOffCanvasBodyRulesForFriend";
import AddFriendOffCanvasBodySeaechForFriend from "./AddFriendOffCanvasBodySeaechForFriend";
import AddFriendOffCanvasHeader from "./AddFriendOffCanvasHeader";
export default function AddFriendOffCanvas({
  handleCloseButtonOfCanvasInHeader,
  SearchInputForFriendUsername,
  setSearchInputForFriendUsername,
  handleSearchInputForFriendClicked,
  searchFriendInputResults,
  searchFriendInputResultsData,
  handleAddFriendButton,
  IsSearchInputForSearchButton,
  handleClearOffCanvas,
}) {
  return (
    <>
      <div
        className={`offcanvas offcanvas-start ${styles.addFriendContainer}`}
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <AddFriendOffCanvasHeader
          handleCloseButtonOfCanvasInHeader={handleCloseButtonOfCanvasInHeader}
        />
        <div className="offcanvas-body">
          <AddFriendOffCanvasBodyRulesForFriend />
          <AddFriendOffCanvasBodySeaechForFriend
            SearchInputForFriendUsername={SearchInputForFriendUsername}
            setSearchInputForFriendUsername={setSearchInputForFriendUsername}
            handleSearchInputForFriendClicked={
              handleSearchInputForFriendClicked
            }
          />

          <AddFriendSearchResults
            searchFriendInputResults={searchFriendInputResults}
          />

          <AddFriendSearchResultsData
            searchFriendInputResultsData={searchFriendInputResultsData}
            handleAddFriendButton={handleAddFriendButton}
          />
          <AddFriendClearButton
            IsSearchInputForSearchButton={IsSearchInputForSearchButton}
            handleClearOffCanvas={handleClearOffCanvas}
          />
        </div>
      </div>
    </>
  );
}
