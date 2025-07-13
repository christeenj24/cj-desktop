import styles from './SkillsStyles.module.css';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <div className={styles.columns}>

        <div className={styles.column}>
          <h2 className={styles.subheading}>Development</h2>
          <ul className={styles.skillList}>
            <li className={styles.skillItem}>HTML</li>
            <li className={styles.skillItem}>CSS</li>
            <li className={styles.skillItem}>JavaScript</li>
            <li className={styles.skillItem}>React</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h2 className={styles.subheading}>Tools</h2>
          <ul className={styles.skillList}>
            <li className={styles.skillItem}>Photoshop</li>
            <li className={styles.skillItem}>Illustrator</li>
            <li className={styles.skillItem}>Procreate</li>
            <li className={styles.skillItem}>Figma</li>
            <li className={styles.skillItem}>Canva</li>
            <li className={styles.skillItem}>Capcut</li>
          </ul>
        </div>

      </div>

      <hr className={styles.divider} />
    </section>
  );
}

export default Skills;