import Link from 'next/link'

import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.title}>sudo-adduser-jordan</div>

      <div className={styles.footerMenu}>
        <Link href='#Hero' className={styles.a} >Home</Link>
        <Link href='#Projects' className={styles.a} >Portfolio</Link>
        <Link href='#Contact' className={styles.a} >Contact</Link>
      </div>
      <div className={styles.copywrite}>
        © 2022 sudo-adduser-jordan™. All Rights Reserved.
      </div>
      <div>updated 3.11.2023</div>
    </footer>
  );
};

export default Footer;
