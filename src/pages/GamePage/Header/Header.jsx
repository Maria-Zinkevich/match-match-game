import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrap}>
        <h2 className={styles.userName}>UserName</h2>
        <button>End the game</button>
      </div>

      <div className={styles.infoContainer}>
        <p>Time:</p>
        <p>Level:</p>
        <p>Steps:</p>
      </div>
    </div>
  );
};
