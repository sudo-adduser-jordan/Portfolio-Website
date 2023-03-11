import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Button1 from './Button1'

const Navbar = () => {
  return (
    <div className={styles.navbar}>

      <div className={styles.right}>
        <Image
        className={styles.icon} 
        src='/favicon-32x32.png'
        width={40} 
        height={40}   
        alt='sudo-adduser-jordan' >
        </Image>
        <div className={styles.logo}>
        sudo-adduser-jordan
        </div>
      </div>

      <div className={styles.center}>
        <Link href='#Hero' className={styles.a} >Home</Link>
        <Link href='#Projects' className={styles.a} >Portfolio</Link>
        <Link href='#Contact' className={styles.a} >Contact</Link>
      </div>

      <div className={styles.left}>
        
        <Link href='/resume.pdf'><Button1 /></Link>

      </div>

    </div>
  )
}

export default Navbar