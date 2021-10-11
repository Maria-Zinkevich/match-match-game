import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.userName}>UserName</h2>
      <button>Log out</button>
    </div>
  );
};
