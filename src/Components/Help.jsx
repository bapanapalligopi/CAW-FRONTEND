import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../Styles/profile.module.css";
import { TbBrandGmail } from "react-icons/tb";
import { BsLinkedin } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
export default function Help({ sethelp }) {
  const [reportUsername, setreportUsername] = useState("");
  const [reportDescription, setreportDescription] = useState("");
  const [isReportErrors, setisReportErrors] = useState(false);
  const [reportErrors, setreportErrors] = useState("");

  const [conatctUsername, setcontactUsername] = useState("");
  const [contactDescription, setcontactDescription] = useState("");
  const [iscontactErrors, setiscontactErrors] = useState(false);
  const [contactErrors, setcontactErrors] = useState("");

  const handleReport = async () => {
    if (!reportUsername || !reportDescription) {
      setisReportErrors(true);
      setreportErrors("Please provide all details.");
      return;
    }

    const reportRequest = {
      username: reportUsername,
      description: reportDescription,
    };

    try {
      const response = await fetch(
        "https://chatanywhere-0evk.onrender.com/report",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reportRequest),
        }
      );

      if (response.ok) {
        setisReportErrors(false);
        setreportUsername("");
        setreportDescription("");
        setreportErrors("");
        alert("Report submitted successfully. It is now safe to close.");
      } else {
        switch (response.status) {
          case 400:
            const data = await response.json();
            setisReportErrors(true);
            setreportErrors(data.message);
            break;
          default:
            setisReportErrors(true);
            setreportErrors(
              "An unexpected error occurred. Please try again later.!!!!!!!!!!"
            );
            break;
        }
      }
    } catch (error) {
      console.error("An error occurred while submitting the report:", error);
      setisReportErrors(true);
      setreportErrors("An unexpected error occurred. Please try again later.");
    }
  };

  const handlecontact = async () => {
    if (!conatctUsername || !contactDescription) {
      setiscontactErrors(true);
      setcontactErrors("Please provide all details.");
      return;
    }

    const contactRequest = {
      username: conatctUsername,
      need: contactDescription,
    };

    try {
      const response = await fetch(
        "https://chatanywhere-0evk.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactRequest),
        }
      );

      if (response.ok) {
        setiscontactErrors(false);
        setcontactUsername("");
        setcontactDescription("");
        setcontactErrors("");
        alert("submitted successfully. It is now safe to close.");
      }
      if (response.status == 400) {
        const data = await response.json();
        alert("eneter valid email");
        setiscontactErrors(true);
        setcontactErrors(data.message);
        return;
      }
    } catch (error) {
      setiscontactErrors(true);
      setcontactErrors("An unexpected error occurred. Please try again later.");
    }
  };
  const handleCloseForreportOffcanvas = () => {
    setisReportErrors(false);
    setreportErrors("");
    setreportUsername("");
    setreportDescription("");
  };
  const handleCloseForconatctOffcanvas = () => {
    setiscontactErrors(false);
    setcontactErrors("");
    setcontactUsername("");
    setcontactDescription("");
  };
  return (
    <>
      <div className={styles.helpAbout}>
        <div className={styles.AboutContainer}>
          <div className={styles.aboutheading}>About</div>
          <div className={styles.aboutdescription}>
            Chat App is a simpler messaging app for personal, one-on-one
            conversations. Connect with friends, family, and colleagues in a
            private and hassle-free environment. Whether you're catching up with
            an old friend or sharing a laugh with a loved one, Chat App provides
            the perfect platform for meaningful connections without the
            distractions of group chats.
          </div>
        </div>
        <div className={styles.helpContainer}>
          <div className={styles.helpheading}>Help</div>
          <div className={styles.helpdecription}>
            {" "}
            Add Friends by clicking the Add Friends Button in Homepage. Thats it
            you have your previous chats (if any) on the screen.
          </div>
        </div>
        <div className={styles.reportContainer}>
          <div className={styles.reportheading}>Report</div>
          <div className={styles.reportdescription}>
            {" "}
            Found anything Wrong, Want to give any Suggestions or want to report
            bug please feel free to reach.
          </div>
          <div
            className={styles.reportButton}
            data-bs-toggle="offcanvas"
            data-bs-target="#reportOffcanvas"
            aria-controls="reportOffcanvas"
          >
            Report
          </div>
          <div
            class={`offcanvas offcanvas-start ${styles.reportOffcanvasConatiner}`}
            data-bs-scroll="true"
            tabindex="-1"
            id="reportOffcanvas"
            aria-labelledby="reportOffcanvasLabel"
          >
            <div class="offcanvas-header">
              <h5
                class={`offcanvas-title ${styles.reportOffcanvasTitle}`}
                id="reportOffcanvasLabel"
              >
                Report A Bug
              </h5>
              <button
                type="button"
                class={`btn-close ${styles.reportOffcanvasClose}`}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={handleCloseForreportOffcanvas}
              ></button>
            </div>
            <div class={`offcanvas-body ${styles.reportOffcanvasBody}`}>
              <input
                type="text"
                placeholder="Enter your email id here.."
                className={styles.reportUsername}
                value={reportUsername}
                onChange={(e) => {
                  setreportUsername(e.target.value);
                  setisReportErrors(false);
                  setreportDescription("");
                }}
              />
              <textarea
                placeholder="Enter your points..."
                cols="47"
                rows="5"
                className={styles.reportDescription}
                value={reportDescription}
                onChange={(e) => setreportDescription(e.target.value)}
              ></textarea>
              {isReportErrors ? (
                <div className={styles.reportInputErrors}>{reportErrors}</div>
              ) : (
                ""
              )}
              <div className={styles.reportSubmit} onClick={handleReport}>
                submit
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contactheading}>Contact</div>
          <div className={styles.contactdescription}>
            You can reach me out using below form, Any suggestions or changes
            accepted. Thank you.
          </div>
          <div
            className={styles.conatctButton}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasForContact"
            aria-controls="offcanvasForContactLabel"
          >
            Contact
          </div>

          <div
            class={`offcanvas offcanvas-start ${styles.reportOffcanvasConatiner}`}
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasForContact"
            aria-labelledby="offcanvasForContactLabel"
          >
            <div class="offcanvas-header">
              <h5
                class={`offcanvas-title ${styles.reportOffcanvasTitle}`}
                id="offcanvasForContactLabel"
              >
                Contact Me
              </h5>
              <button
                type="button"
                class={`btn-close ${styles.reportOffcanvasClose}`}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={handleCloseForconatctOffcanvas}
              ></button>
            </div>
            <div class={`offcanvas-body ${styles.reportOffcanvasBody}`}>
              <input
                type="text"
                placeholder="Enter your email id here.."
                className={styles.reportUsername}
                value={conatctUsername}
                onChange={(e) => {
                  setcontactUsername(e.target.value);
                  setiscontactErrors(false);
                  setcontactDescription("");
                }}
              />
              <textarea
                placeholder="Enter your need, suggestions, ideas,...."
                cols="47"
                rows="5"
                className={styles.reportDescription}
                value={contactDescription}
                onChange={(e) => setcontactDescription(e.target.value)}
              ></textarea>
              {iscontactErrors ? (
                <div className={styles.reportInputErrors}>{contactErrors}</div>
              ) : (
                ""
              )}
              <div className={styles.reportSubmit} onClick={handlecontact}>
                submit
              </div>
            </div>
          </div>

          <div className={styles.clearConatiner}>
            <button
              className={styles.clearbutton}
              onClick={() => {
                sethelp(false);
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
