import styles from "./rules.module.css";

export const Rules = () => {
  return (
    <div className={styles.rules}>
      <h3 className={styles.rulesTitle}>Rules</h3>
      <div className={styles.rulesText}>
        <p className={styles.rulesLine}>
          - Turn over two cards of your choice, in order to try and create a
          pair.
        </p>
        <p className={styles.rulesLine}>
          - If the two cards are matched, the cards will disappear.
        </p>
        <p className={styles.rulesLine}>
          - If however, the two cards are not matched, they will turn face down.
        </p>
      </div>
    </div>
  );
};
