import styles from './HeroStyles.module.css';
import heroImg from '../../assets/CJ.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import clickSound from '../../assets/click.mp3';

function Hero() {
  const { theme, toggleTheme } = useTheme();
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
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Christee Joyce
          <br />
          Masongsong
        </h1>
        <h2>Web Design/Developer</h2>
        <p className={styles.description}>
          I specialize in application development in Salesforce, HTML, and Javascript programming. I also do graphic design and basic animation and video editing. 

        </p>
        <a href={CV} download onClick={playClickSound}>
          <button className="hover">CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
