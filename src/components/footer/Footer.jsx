import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>syamsaaldev</div>
      <div className={styles.text}>
        syamsaal © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
