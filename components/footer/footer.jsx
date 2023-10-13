import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.theFooter}>
      <div className={styles.copyright}>
        <p>
          <span>&#169;</span> 2023ITBdeLabo
        </p>
      </div>
    </footer>
  );
}
