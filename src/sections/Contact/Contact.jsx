import styles from './ContactStyles.module.css';
import { useState } from 'react';

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "masongsong.cj@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    });
  };

  return (
    <section id="contact" className={styles.container}>
      <p className={styles.note}>
        Note: I'm currently working on this website, but you can email me at:&nbsp;
        <span onClick={handleCopy} className={styles.copyEmail}>
          {email}
        </span>
        {copied && <span className={styles.copiedMsg}> — copied!</span>}
      </p>

      <p>or</p>

      <a href={`mailto:${email}`} className={styles.emailButton}>
        Send me an email!
      </a>
    </section>
  );
}

export default Contact;