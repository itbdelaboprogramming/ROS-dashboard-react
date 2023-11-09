import { useEffect, useState } from "react";
import ConfirmElement from "../../../components/confirm-element/confirmElement";
import Navigation from "../../../components/unit-navigation/navigation";
import styles from "./controle.module.css";
import CloseButton from "../../../components/close-button/closeButton";
import Footer from "../../../components/footer/footer";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import ControlNonIndex from "../../../components/control-non-index/controlNonIndex";
import ControlIndex from "../../../components/control-index/controlIndex";
import { useDispatch, useSelector } from "react-redux";

export default function Control() {
  //Redux Section
  // const dispatch = useDispatch();
  // const mapRedux = useSelector((state) => state.maps);

  const [mapIndex, setMapIndex] = useState(-1);
  // let mapIndex;
  useEffect(() => {
    // storing input name
    setMapIndex(
      localStorage.getItem("mapIndex") == null
        ? -1
        : localStorage.getItem("mapIndex")
    );

    console.log(mapIndex);
  }, []);

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
      {mapIndex < 0 ? (
        <div className={styles.container}>
          <div className={styles.parents}>
            <CloseButton onClick={onConfirmButtonClick} />
            <div className={styles.navigation}>
              <Navigation />
            </div>
            <ControlNonIndex />
            <Footer />
          </div>
        </div>
      ) : (
        <ControlIndex />
      )}
    </>
  );
}
