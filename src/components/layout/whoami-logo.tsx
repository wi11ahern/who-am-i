import styles from "./whoami-logo.module.css";

const WhoAmILogo = () => {
  const reloadHandler = () => {
    location.reload();
  };

  return (
    <button className={styles.btn} onClick={reloadHandler}>
      <div className={styles.terminal}>
        <p className={styles.command}>
          <span>$</span>whoami
        </p>
        <p className={styles.stdout}>
          <span>william</span>
        </p>
      </div>
    </button>
  );
};

export default WhoAmILogo;
