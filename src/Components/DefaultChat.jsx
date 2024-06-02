import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
import { SiAnydesk } from "react-icons/si";
import { CiLock } from "react-icons/ci";
export default function DefaultChat() {
  return (
    <>
      <div className={styles.defaultChatContainer}>
        <div className={styles.defaultChatBranding}>Chat AnyWhere</div>
        <div>
          <SiAnydesk color="#0cc0df" fontSize="3rem" />
        </div>
        <div className={styles.downloadDescription}>
          Download Chat AnyWhere for Windows.
        </div>
        <div className={styles.downloadBenefits}>
          Make your communication faster and secure when download the windows
          app.
        </div>
        <div className={styles.downloadApp}>
          <button
            className={styles.downloadbutton}
            onClick={() => {
              alert("Comming soon!");
            }}
          >
            Get from Microsoft Store+
          </button>
        </div>
        <div className={styles.securityMessageCOntainer}>
          <CiLock color="#0cc0df" fontSize="1.5rem" />
          <p>Messages are end-end encrypted.</p>
        </div>
      </div>
    </>
  );
}
