import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
import AddFriendSymbol from "./AddFriendSymbol";
import AddFriendOffCanvas from "./AddFriendOffCanvas";
import HelpSymbol from "./HelpSymbol";
import LogOutSymbol from "./LogOutSymbol";
export default function UserActions({
  handleCloseButtonOfCanvasInHeader,
  SearchInputForFriendUsername,
  setSearchInputForFriendUsername,
  handleSearchInputForFriendClicked,
  searchFriendInputResults,
  searchFriendInputResultsData,
  handleAddFriendButton,
  IsSearchInputForSearchButton,
  handleClearOffCanvas,
  HandleHelp,
  HandleLogOut,
}) {
  return (
    <>
      <div className={styles.userActions}>
        <div>
          <AddFriendSymbol />
          <AddFriendOffCanvas
            handleCloseButtonOfCanvasInHeader={
              handleCloseButtonOfCanvasInHeader
            }
            SearchInputForFriendUsername={SearchInputForFriendUsername}
            setSearchInputForFriendUsername={setSearchInputForFriendUsername}
            handleSearchInputForFriendClicked={
              handleSearchInputForFriendClicked
            }
            searchFriendInputResults={searchFriendInputResults}
            searchFriendInputResultsData={searchFriendInputResultsData}
            handleAddFriendButton={handleAddFriendButton}
            IsSearchInputForSearchButton={IsSearchInputForSearchButton}
            handleClearOffCanvas={handleClearOffCanvas}
          />
        </div>
        <HelpSymbol HandleHelp={HandleHelp} />
        <LogOutSymbol HandleLogOut={HandleLogOut} />
      </div>
    </>
  );
}
