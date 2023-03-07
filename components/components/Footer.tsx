import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>sudo-adduser-jordan</div>

      <div className={styles.footerMenu}>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        © 2022 sudo-adduser-jordan™. All Rights Reserved.
      </div>
      <div>updated 11.2.2022</div>
    </footer>
  );
};

export default Footer;
