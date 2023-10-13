import { useState } from "react";
import styles from "./closeButton.module.css";

export default function CloseButton({ onClick }) {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  
  const onConfirmButtonClick = () => {
    setShowConfirmDialog(true);
  };
  
  return (
    <button
      aria-label="Close the page"
      className={styles.closeButton}
      onClick={onClick}
    >
      X
    </button>
  );
}
