import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
export default function AddFriendClearButton({
  IsSearchInputForSearchButton,
  handleClearOffCanvas,
}) {
  return (
    <>
      {!IsSearchInputForSearchButton ? (
        <div className={styles.clearButtonContainer}>
          <button className={styles.clearbutton} onClick={handleClearOffCanvas}>
            Clear
          </button>
        </div>
      ) : null}
    </>
  );
}
