import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Sobre mí</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Me especializo en desarrollo full stack y en soluciones impulsadas
              por inteligencia artificial: APIs de alto rendimiento, integración
              con servicios cloud (Azure y AWS) y productos que conectan backend
              robusto con interfaces claras.
            </p>
            <p>
              He trabajado con equipos ágiles (SCRUM, Jira), integraciones ERP
              (NetSuite), microservicios en Kubernetes y agentes basados en LLM
              para automatización y análisis de información.
            </p>
            <p>
              <strong>Formación:</strong> Ingeniería en Tecnologías de la
              Información, Universidad Politécnica de Victoria (2015–2018).
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imageFrame}>
              <img
                src={`${process.env.PUBLIC_URL}/profile.jpg`}
                alt="Miguel Angel Hernandez Rodriguez"
                className={styles.profileImage}
                width={280}
                height={280}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
