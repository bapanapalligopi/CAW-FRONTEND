import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
export default function SearchFriends({ handleSearch }) {
  return (
    <>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search your friends"
          className={styles.inputSearch}
          onChange={handleSearch}
        />
      </div>
    </>
  );
}
