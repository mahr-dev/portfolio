import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Sobre mí</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Soy un desarrollador web apasionado por crear soluciones digitales
              que marquen la diferencia. Con experiencia en el desarrollo de
              aplicaciones web completas, desde el frontend hasta el backend.
            </p>
            <p>
              Me encanta aprender nuevas tecnologías y enfrentar desafíos
              técnicos. Siempre busco escribir código limpio, mantenible y
              escalable que resuelva problemas reales.
            </p>
            <p>
              Cuando no estoy programando, me gusta contribuir a proyectos
              open source, leer sobre nuevas tendencias tecnológicas y
              compartir conocimiento con la comunidad.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              <span>Tu Foto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
