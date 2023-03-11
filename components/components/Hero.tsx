// style
import styles from '../styles/Hero.module.css'

// routing
import Button2 from './Button2'

// about page, entry point
export default function Hero() {
  return (
    <>
      <section id='Hero' className={styles.hero}>
         <div className={styles.video}>
             <video className={styles.video} src={'./videos/world2.mp4'} typeof="video/mp4" autoPlay loop muted playsInline />
              <div className={styles.titleContainer}> 
              <div className={styles.title}>sudo-adduser-jordan</div>
              <div className={styles.subtitle}>Software Developer</div>
             <Button2 />
          </div>
         </div>
     </section>
    </>
  )
}
