import { useState } from "react";
import styles from "./closeButton.module.css";
import Image from "next/image";

export default function CloseButton({ onClick }) {
  return (
    <button
      aria-label="Close the page"
      className={styles.closeButton}
      onClick={onClick}
    >
      <Image src="/icons/Exit.svg" alt="" width={20} height={20} />
    </button>
  );
}
