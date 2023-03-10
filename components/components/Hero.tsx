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
             <video className={styles.video} src={'./world.mp4'} typeof="video/mp4" autoPlay loop muted />

             <div className={styles.title}> 

             Software Developer
            
             <Button2 />

             </div>
         </div>
     </section>
    </>
  )
}
