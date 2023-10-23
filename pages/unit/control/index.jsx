import { useState } from "react";
import ConfirmElement from "../../../components/confirm-element/confirmElement";
import Navigation from "../../../components/unit-navigation/navigation";
import styles from "./controle.module.css";
import CloseButton from "../../../components/close-button/closeButton";
import Footer from "../../../components/footer/footer";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import ControlNonIndex from "../../../components/control-non-index/controlNonIndex";
import ControlIndex from "../../../components/control-index/controlIndex";

export default function Control() {
  const searchParams = useSearchParams();
  const index = searchParams.get("index");

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const onConfirmButtonClick = () => {
    setShowConfirmDialog(true);
  };

  const handleCancel = () => {
    // Set showConfirmDialog to false when Cancel button is clicked
    setShowConfirmDialog(false);
  };

  return (
    <>
      {" "}
      <ConfirmElement
        message="Are you sure you want to close this app?"
        status={showConfirmDialog}
        onCancel={handleCancel}
      />
      <div className={styles.container}>
        <div className={styles.parents}>
          <CloseButton onClick={onConfirmButtonClick} />
          <div className={styles.navigation}>
            <Navigation />
          </div>
          {index == null ? <ControlNonIndex /> : <ControlIndex />}
          <Footer />
        </div>
      </div>
    </>
  );
}
