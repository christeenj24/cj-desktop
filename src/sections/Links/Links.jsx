import styles from './LinksStyles.module.css';

function Links() {
  return (
    <section id="links" className={styles.container}>
      <div className={styles.columns}>

        <div className={styles.column}>
          <h2>Development</h2>
          <ul>

          </ul>
        </div>

        <div className={styles.column}>
          <h2>Tools</h2>
          <ul>
            
          </ul>
        </div>

      </div>

      <hr className={styles.divider} />
    </section>
  );
}

export default Links;