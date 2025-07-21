import styles from './WorkStyles.module.css';
import Brochure from '../../assets/Brochure.png';
import Mpure from '../../assets/Mpure.png';
import Wamie from '../../assets/Wamie.png';
import Sticker from '../../assets/Sticker.png';
import ProjectCard from '../../common/ProjectCard';

function Work() {
  return (
    <>
      <section id="links" className={styles.container}>
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

      <section id="work" className={styles.container}>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={Brochure}
            link="https://www.behance.net/gallery/188785777/CAVITE-CITY-TRAVEL-GUIDE"
            h3="Brochure"
            p="Travel Guide Brochure"
          />
          <ProjectCard
            src={Mpure}
            link="https://www.behance.net/gallery/189525811/M-PURE-WATER-REFILLING-STATION"
            h3="M Pure"
            p="Water Refilling Logo"
          />
          <ProjectCard
            src={Wamie}
            link="https://www.behance.net/gallery/188785019/WAMIE-ENERGY-DRINK"
            h3="Wamie"
            p="Energy Drink Mockup"
          />
          <ProjectCard
            src={Sticker}
            link="https://www.behance.net/gallery/188782977/Procreate-Arts"
            h3="Sticker Commission"
            p="Sticker"
          />
        </div>
      </section>
    </>
  );
}

export default Work;