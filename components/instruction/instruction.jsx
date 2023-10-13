import styles from "./instruction.module.css";

export default function Instruction() {
  return (
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
  );
}
