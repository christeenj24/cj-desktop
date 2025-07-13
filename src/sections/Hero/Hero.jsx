import { useState } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/CJM.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import clickSound from '../../assets/click.mp3';

import { useTheme } from '../../common/ThemeContext';

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
          alt="Color mode toggle"
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
          <button onClick={() => { playClickSound(); setIsAboutOpen(true); }}>About</button>
          <button onClick={() => { playClickSound(); setIsProjectsOpen(true); }}>Projects</button>
          <button onClick={() => { playClickSound(); setIsSkillsOpen(true); }}>Skills</button>
          <button onClick={() => { playClickSound(); setIsContactOpen(true); }}>Contact</button>
        </div>
      </div>

      {/* Modals */}
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