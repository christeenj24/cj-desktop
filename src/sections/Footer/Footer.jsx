import styles from './FooterStyles.module.css';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Footer() {
  const { theme } = useTheme();

  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="footer" className={styles.container}>
      <span>
        <a href="https://www.instagram.com/sejiii24/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram icon" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="Github icon" />
        </a>
        <a href="https://www.linkedin.com/in/cjmasongsong/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn icon" />
        </a>
      </span>
      <p>&copy; 2025 Christeen Joyce Masongsong</p>
    </section>
  );
}

export default Footer;