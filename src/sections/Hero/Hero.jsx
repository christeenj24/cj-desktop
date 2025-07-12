import styles from './HeroStyles.module.css';
import heroImg from '../../assets/CJM.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';
import clickSound from '../../assets/click.mp3';
import { useState } from 'react';

import WindowModal from '../../WindowModal';
import About from '../../sections/About/About';
import Contact from '../../sections/Contact/Contact';
import Projects from '../../sections/Projects/Projects';
import Skills from '../../sections/Skills/Skills';

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
          alt="Profile picture of Cj Masongsong"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
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
          I specialize in application development in Salesforce, HTML, and Javascript programming. I also do graphic design and basic video editing.
        </p>

        <div className={styles.buttonGroup}>
          <button className="hover" onClick={() => { playClickSound(); setIsAboutOpen(true); }}>About</button>
          <button className="hover" onClick={() => { playClickSound(); setIsProjectsOpen(true); }}>Projects</button>
          <button className="hover" onClick={() => { playClickSound(); setIsSkillsOpen(true); }}>Skills</button>
          <button className="hover" onClick={() => { playClickSound(); setIsContactOpen(true); }}>Contact</button>
        </div>
      </div>

      <WindowModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} title="About">
  <About />
</WindowModal>

<WindowModal isOpen={isProjectsOpen} onClose={() => setIsProjectsOpen(false)} title="Projects">
  <Projects />
</WindowModal>

<WindowModal isOpen={isSkillsOpen} onClose={() => setIsSkillsOpen(false)} title="Skills">
  <Skills />
</WindowModal>

<WindowModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} title="Contact">
  <Contact />
</WindowModal>
    </section>
  );
}

export default Hero;