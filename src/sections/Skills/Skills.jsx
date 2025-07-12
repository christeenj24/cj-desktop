import styles from './SkillsStyles.module.css';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <div className={styles.columns}>
        
        <div className={styles.column}>
          <h2 className={styles.subheading}>Development</h2>
          <ul className={styles.skillList}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h2 className={styles.subheading}>Tools</h2>
          <ul className={styles.skillList}>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Procreate</li>
            <li>Figma</li>
            <li>Canva</li>
            <li>Capcut</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;