import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.title}>sudo-adduser-jordan</div>

      <div className={styles.footerMenu}>
        <a href="#home">Home</a>
        <a href="#projects">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
      <div className={styles.copywrite}>
        © 2022 sudo-adduser-jordan™. All Rights Reserved.
      </div>
      <div>updated 3.11.2023</div>
    </footer>
  );
};

export default Footer;
