import styles from './ProjectsStyles.module.css';
import Brochure from '../../assets/Brochure.png';
import Mpure from '../../assets/Mpure.png';
import Wamie from '../../assets/Wamie.png';
import Sticker from '../../assets/Sticker.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
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

        {/* <p>Accepting work offers via my work email!</p> */}
    
      </div>

      
    </section>
  );
}

export default Projects;
