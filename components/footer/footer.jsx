import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.theFooter}>
      <div className={styles.container}>
        <div className={styles.handlingInstructions}>
          <img src="./icons/book-svgrepo-com.svg" alt="" />
          <p>
            Handling
            <br />
            Instructions
          </p>
        </div>
        <div className={styles.safetyPrecautions}>
          <img src="./icons/shield-alt-svgrepo-com (2).svg" alt="" />
          <p>
            Safety <br />
            Precaution
          </p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          <span>&#169;</span> 2023ITBdeLabo
        </p>
      </div>
    </footer>
  );
}
