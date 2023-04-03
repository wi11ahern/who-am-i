import styles from "./whoami-logo.module.css";

const WhoAmILogo = () => {
  const backToTopHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button className={styles.btn} onClick={backToTopHandler}>
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
