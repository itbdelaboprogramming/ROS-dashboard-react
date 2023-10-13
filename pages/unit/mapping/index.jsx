import { useState } from "react";
import ConfirmElement from "../../../components/confirm-element/confirmElement";
import Navigation from "../../../components/unit-navigation/navigation";
import styles from "./mapping.module.css";
import CloseButton from "../../../components/close-button/closeButton";
import Footer from "../../../components/footer/footer";
import MapSaving from "../../../components/map-saving/mapSaving";
import ConfirmSaving from "../../../components/confirm-saving-mapping/confirmSaving";

export default function Mapping() {
  const [showConfirmClosePageDialog, setShowConfirmClosePageDialog] =
    useState(false);
  const [showConfirmMappingDialog, setShowConfirmMappingDialog] =
    useState(false);
  const [savingConfirmDialog, setSavingConfirmDialog] = useState(false);

  // const [buttonActive, setButtonActive] = useState("");
  const [status, setStatus] = useState("On Progress");

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
      <MapSaving status={savingConfirmDialog} />
      <Navigation />
      <ConfirmElement
        message="Are you sure you want to close this app?"
        status={showConfirmClosePageDialog}
        onCancel={handleCancel}
      />

      <ConfirmSaving
        message="Are you sure you want to stop and save the map?"
        status={showConfirmMappingDialog}
        onCancel={handleDatabaseCancel}
        onConfirm={onConfirmSaveMappingButtonClick}
      />
      <CloseButton onClick={onConfirmButtonClick} />
      
      <div className={styles.container}>
        <div className={styles.statusSection}>
          <div
            className={`${styles.status} ${
              status == "Idle" ? styles.idle : ""
            }`}
          >
            <img src="/icons/information-circle-svgrepo-com.svg" alt="" />
            <p>
              Status : <span>{status}</span>
            </p>
          </div>
          <div className={styles.lidar}>
            <p>LIDAR</p>
          </div>
          <div className={styles.lidarButton}>
            <label className={styles.toggleSwitch}>
              <input type="checkbox" className={styles.toggleInput} />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>
        <div className={styles.mapSection}>
          <div className={styles.topDiv}>
            <p>Create a New Map</p>
            <div
              className={`${styles.playButton} ${
                status == "On Progress" ? styles.buttonActive : ""
              }`}
              onClick={() => changeStatus("On Progress")}
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
              <p>Stop</p>
              <img src="/icons/2.svg" alt="" />
            </div>
            <div className={styles.settingsButton}>
              <img src="/icons/Setting.svg" alt="" />
              <p>Please turn on the LiDAR before mapping.</p>
            </div>
          </div>

          <div className={styles.centerDiv}>
            <img src="/icons/Frame.svg" alt="" />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
