import styles from '../styles/Form.module.css'

const Form = () => {
  return (
    <>
    <div className={styles.contactTitle}>Contact</div>


    <section id="contact" className={styles.contactContainer}>

      <div className={styles.formContainer}>

        <form>
          <input
            name="name"
            type="text"
            className={styles.feedbackInput}
            placeholder="Name"
          />
          <input
            name="email"
            type="text"
            className={styles.feedbackInput}
            placeholder="Email"
          />
          <textarea
            name="text"
            className={styles.feedbackInput}
            placeholder="Comment"
          ></textarea>
          <input className={styles.submit} type="submit" value="SUBMIT" />
        </form>

      </div>

    </section>
    </>
  )
}

export default Form