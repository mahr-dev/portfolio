import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hola, mi nombre es</p>
        <h1 className={styles.name}>Tu Nombre</h1>
        <h2 className={styles.title}>Desarrollador Full Stack</h2>
        <p className={styles.description}>
          Creo experiencias digitales excepcionales. Especializado en construir
          aplicaciones web modernas, accesibles y de alto rendimiento.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.btnPrimary}>
            Ver proyectos
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
