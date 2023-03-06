import Image from 'next/image'
import styles from '../styles/Top.module.css'

// routing
import Menu from '../components/Menu';

// index page, entry point
export default function Top() {
  return (
    <>
    <section className={styles.topContainer}>
        <div className={styles.column1}> col 1</div>
        <div className={styles.column2}>
          <Menu />
        </div>
        <div className={styles.column3}> col 3</div>
    </section>
    </>
  )
}
