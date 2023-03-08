import styles from "./whoami-logo.module.css";

const WhoAmILogo = () => {
  return (
    <div className={styles.terminal}>
      <p className={styles.command}>
        <span>$</span>whoami
      </p>
      <p className={styles.stdout}>
        <span>william</span>
      </p>
    </div>
  );
};

export default WhoAmILogo;
