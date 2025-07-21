import { useState } from 'react';
import { useTheme } from '../../common/ThemeContext';
import styles from './HeroStyles.module.css';

// Assets
import heroImg from '../../assets/CJM.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import clickSound from '../../assets/click.mp3';

// Light & dark icons
import infoLight from '../../assets/info-light.png';
import infoDark from '../../assets/info-dark.png';
import workLight from '../../assets/work-light.png';
import workDark from '../../assets/work-dark.png';
import linksLight from '../../assets/links-light.png';
import linksDark from '../../assets/links-dark.png';
import contactLight from '../../assets/contact-light.png';
import contactDark from '../../assets/contact-dark.png';

// Components
import WindowModal from '../../WindowModal';
import About from '../../sections/About/About';
import Contact from '../../sections/Contact/Contact';
import Work from '../../sections/Work/Work';
import Links from '../../sections/Links/Links';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  const themeIcon = theme === 'light' ? sun : moon;

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
    <section id="hero" className={styles.container}>
      {/* <h2 className={styles.containerHeader}>Home</h2> */}
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
        <h2>IT / Graphic Designer</h2>

        <p className={styles.description}>
          I specialize in Salesforce support and front-end development using HTML, CSS, and JavaScript.
          I also enjoy the creative side—designing graphics and visual content for work and promotions.
          Always up for building useful things with both code and creativity!
        </p>

        <div className={styles.buttonGroup}>
          <IconButton
            onClick={() => {
              playClickSound();
              setIsAboutOpen(true);
            }}
            icon={theme === 'light' ? infoLight : infoDark}
            alt="About Icon"
          />

          <IconButton
            onClick={() => {
              playClickSound();
              setIsWorkOpen(true);
            }}
            icon={theme === 'light' ? workLight : workDark}
            alt="Work Icon"
          />

          <IconButton
            onClick={() => {
              playClickSound();
              setIsLinksOpen(true);
            }}
            icon={theme === 'light' ? linksLight : linksDark}
            alt="Links Icon"
          />

          <IconButton
            onClick={() => {
              playClickSound();
              setIsContactOpen(true);
            }}
            icon={theme === 'light' ? contactLight : contactDark}
            alt="Contact Icon"
          />
        </div>

        <WindowModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} title="About">
          <About />
        </WindowModal>

        <WindowModal isOpen={isWorkOpen} onClose={() => setIsWorkOpen(false)} title="Work">
          <Work />
        </WindowModal>

        <WindowModal isOpen={isLinksOpen} onClose={() => setIsLinksOpen(false)} title="Links">
          <Links />
        </WindowModal>

        <WindowModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} title="Contact">
          <Contact />
        </WindowModal>
      </div>
    </section>
  );
}

function IconButton({ onClick, icon, alt }) {
  return (
    <button onClick={onClick} className={styles.iconButton}>
      <img src={icon} alt={alt} className={styles.buttonImage} />
    </button>
  );
}

export default Hero;