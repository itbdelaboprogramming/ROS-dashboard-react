import { useState } from "react";
import styles from "./controlIndex.module.css";
import Image from "next/image";

export default function ControlIndex() {
  const [showConfirmClosePageDialog, setShowConfirmClosePageDialog] =
    useState(false);
  const [showConfirmMappingDialog, setShowConfirmMappingDialog] =
    useState(false);
  const [savingConfirmDialog, setSavingConfirmDialog] = useState(false);

  // const [buttonActive, setButtonActive] = useState("");
  const [status, setStatus] = useState("Running");

  const onConfirmButtonClick = () => {
    setShowConfirmClosePageDialog(true);
  };

  const onConfirmMappingButtonClick = () => {
    setShowConfirmMappingDialog(true);
  };

  const handleCancel = () => {
    setShowConfirmClosePageDialog(false);
  };

  const handleDatabaseCancel = () => {
    setShowConfirmMappingDialog(false);
  };

  const changeStatus = (newStatus) => {
    setStatus(newStatus);
  };

  const onConfirmSaveMappingButtonClick = () => {
    setSavingConfirmDialog(true);
  };
  return (
    <>
      <div className={styles.statusSection}>
        <div
          className={`${styles.status} ${status == "Idle" ? styles.idle : ""}`}
        >
          <img src="/icons/information-circle-svgrepo-com.svg" alt="" />
          <p>
            Status : <span>{status}</span>
          </p>
        </div>
      </div>
      <div className={styles.mapSection}>
        <div className={styles.topDiv}>
          <p>Run the Prototype</p>
          <div
            className={`${styles.playButton} ${
              status == "Running" ? styles.buttonActive : ""
            }`}
            onClick={() => changeStatus("Running")}
          >
            <p>Play</p>
            <img src="/icons/3.svg" alt="" />
          </div>
          <div
            className={`${styles.pauseButton} ${
              status == "Idle" ? styles.buttonActive : ""
            }`}
            onClick={() => changeStatus("Idle")}
          >
            <p>Pause</p>
            <img src="/icons/1.svg" alt="" />
          </div>
          <div
            className={styles.stopButton}
            onClick={onConfirmMappingButtonClick}
          >
            <p>Return to Home</p>
            <img src="/icons/home.svg" alt="" />
          </div>
          <div className={styles.settingsButton}>
            <img src="/icons/Setting.svg" alt="" />
            <p>
              Double-click to add the pinpoint
              <br />
              Double-click again to remove the pinpoint
            </p>
          </div>
        </div>

        <div className={styles.centerDiv}>
        <div className={styles.emergencyButton}>
            <img src="/icons/Stop.svg" alt="" />
            <p>Emergency Stop</p>
          </div>
          <div className={styles.mapController}>
            <div className={styles.zoominButton}>
              <img src="/icons/zoomin.svg" alt="" />
            </div>
            <div className={styles.zoomoutButton}>
              <img src="/icons/zoomout.svg" alt="" />
            </div>
            <div className={styles.resetButton}>
              <img src="/icons/reset.svg" alt="" />
            </div>
          </div>
          <img src="/icons/Frame.svg" alt="" />

          
        </div>
      </div>
    </>
  );
}
