import Image from 'next/image'
import styles from '../styles/Menu.module.css'


// index page, entry point
export default function Menu() {
  return (
    <>
    <section className={styles.menuContainer}>
        <div className={styles.column1}> col 1</div>
        <div className={styles.column2}>col 2</div>
        <div className={styles.column3}> col 3</div>
    </section>
    </>
  )
}