import { useState } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/CJM.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import clickSound from '../../assets/click.mp3';

import { useTheme } from '../../common/ThemeContext';
import infoLight from '../../assets/info-light.png';
import infoDark from '../../assets/info-dark.png';
import workLight from '../../assets/work-light.png';
import workDark from '../../assets/work-dark.png';
import linksLight from '../../assets/links-light.png';
import linksDark from '../../assets/links-dark.png';
import contactLight from '../../assets/contact-light.png';
import contactDark from '../../assets/contact-dark.png';

import WindowModal from '../../WindowModal';
import About from '../../sections/About/About';
import Contact from '../../sections/Contact/Contact';
import Projects from '../../sections/Work/Work';
import Skills from '../../sections/Links/Links';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  const themeIcon = theme === 'light' ? sun : moon;

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of CJ Masongsong"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Toggle theme"
          onClick={() => {
            toggleTheme();
            playClickSound();
          }}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Hi!
          <br />
          I'm CJ
        </h1>
        <h2>Web Designer/Developer</h2>
        <p className={styles.description}>
          I specialize in Salesforce support and front-end development using HTML, CSS, and JavaScript.
          I also enjoy the creative side—designing graphics and visual content for work and promotions.
          Always up for building useful things with both code and creativity!
        </p>

        <div className={styles.buttonGroup}>
          <button
            onClick={() => {
              playClickSound();
              setIsAboutOpen(true);
            }}
            className={styles.iconButton}
          >
            <img
              src={theme === 'light' ? infoLight : infoDark}
              alt="About Icon"
              className={styles.buttonImage}
            />
          </button>

          <button
            onClick={() => {
              playClickSound();
              setIsProjectsOpen(true);
            }}
            className={styles.iconButton}
          >
            <img
              src={theme === 'light' ? workLight : workDark}
              alt="Projects Icon"
              className={styles.buttonImage}
            />
          </button>

          <button
            onClick={() => {
              playClickSound();
              setIsSkillsOpen(true);
            }}
            className={styles.iconButton}
          >
            <img
              src={theme === 'light' ? linksLight : linksDark}
              alt="Skills Icon"
              className={styles.buttonImage}
            />
          </button>

          <button
            onClick={() => {
              playClickSound();
              setIsContactOpen(true);
            }}
            className={styles.iconButton}
          >
            <img
              src={theme === 'light' ? contactLight : contactDark}
              alt="Contact Icon"
              className={styles.buttonImage}
            />
          </button>
        </div>

        {/* Modals */}
        <WindowModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} title="About">
          <About />
        </WindowModal>

        <WindowModal isOpen={isWorkOpen} onClose={() => setIsProjectsOpen(false)} title="Work">
          <Work />
        </WindowModal>

        <WindowModal isOpen={isLinksOpen} onClose={() => setIsSkillsOpen(false)} title="Links">
          <Links />
        </WindowModal>

        <WindowModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} title="Contact">
          <Contact />
        </WindowModal>
      </div>
    </section>
  );
}

export default Hero;