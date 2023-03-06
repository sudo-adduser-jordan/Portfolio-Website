import Image from 'next/image'
import styles from '../styles/Footer.module.css'


// index page, entry point
export default function Footer() {
  return (
    <>
    <section className={styles.footerContainer}>
        <div className={styles.column1}>col1</div>
        <div className={styles.column2}>col2</div>
    </section>
    </>
  )
}
