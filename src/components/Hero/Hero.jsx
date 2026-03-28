import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hola, mi nombre es</p>
        <h1 className={styles.name}>Miguel Angel Hernandez Rodriguez</h1>
        <h2 className={styles.title}>Desarrollador Full Stack · Python &amp; IA</h2>
        <p className={styles.description}>
          Profesional altamente motivado con más de siete años de experiencia en
          desarrollo de software. Construyo soluciones con IA, aplicaciones móviles,
          web y de escritorio, llevando sistemas escalables y eficientes desde la
          idea hasta el despliegue.
        </p>
        <div className={styles.cta}>
          <a href="#experience" className={styles.btnPrimary}>
            Ver experiencia
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Contáctame
          </a>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span></span>
      </div>
    </section>
  );
}

export default Hero;
