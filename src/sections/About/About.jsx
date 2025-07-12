import React from 'react';
import CV from '../../assets/cv.pdf';
import profileImage from '../../assets/profile.png';
import styles from './AboutStyles.module.css'; 

function About() {
  const playClickSound = () => {
    const audio = new Audio('/click.mp3');
    audio.play();
  };

  return (
  <section className={styles.aboutSection}>
    
    <div className={styles.headingContainer}>
      <img src={profileImage} alt="Profile" className={styles.profileImage} />
      <div className={styles.textBlock}>
        <h1>Christeen Joyce <br /> Masongsong</h1>
        <p>PH-based</p>
        <p>Employed at Calamba City Hall</p>
      </div>
    </div>
<hr />
      <section>
    <h2 className={styles.subheading}>Education</h2>
    <p>Bachelor of Science in Information Technology</p>
    <p className={styles.graduation}>Graduated 2019</p>
  </section>
<hr />
  <section>
    <h2 className={styles.subheading}>Other Interests</h2>
    <ul className={styles.interestsList}>
  <li className={styles.dev}>Game Development</li>
  <li className={styles.web}>Web Design</li>
  <li className={styles.gaming}>Gaming</li>
  <li className={styles.cooking}>Cooking</li>
</ul>
  </section>
<hr />
  <section>
      <div className={styles.cvButtonContainer}>
        <p>Click to download my remuse below:</p>
        <a href={CV} download>
          <button onClick={playClickSound} className={styles.cvButton}>CV</button>
        </a>
      </div>
    </section>
    </section>
  );
}

export default About;