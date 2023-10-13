import { useRouter } from "next/navigation";
import styles from "./confirmSaving.module.css";

export default function ConfirmSaving(props) {
  const router = useRouter();

  const handleCancelClick = () => {
    console.log("rrr");
    // Call the callback function to set showConfirmDialog to false
    props.onCancel();
  };

  const confirmClick = () => {
    if (props.onConfirm) {
      props.onConfirm(); // Call the onConfirm callback when Confirm is clicked
      props.onCancel()
    } else {
    //   router.push("/closing-page");
    }
  };

  return (
    <div
      className={`${styles.container} ${
        props.status == false? styles.hide : ""
      }`}
    >
      <div className={styles.confirmationDialog}>
        <p>{props.message}</p>
        <div className={styles.buttonContainer}>
          <button className={styles.buttonConfirm} onClick={confirmClick}>
            Confirm
          </button>
          <button className={styles.buttonConfirm} onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
