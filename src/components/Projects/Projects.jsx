import styles from './Projects.module.css';
const base = process.env.PUBLIC_URL || '';
const experienceData = [
  {
    title: 'Mobilik',
    meta: 'Python AI Developer · mar 2024 – presente',
    description:
      'APIs de alto rendimiento y optimización de bases de datos. Soluciones de IA con Azure OpenAI, Document Intelligence y Azure AI Search (RediSearch). Diseño de agentes LLM y agentes con herramientas OpenAI; microservicios en AKS. Stack Azure: OpenAI, Web Apps, ACR, Container Apps/Jobs, Functions, Service Bus, Cosmos DB y Storage. Front con Angular y TypeScript para interacción con agentes.',
    tags: ['Python', 'Azure', 'AKS', 'Angular', 'LLM'],
    link: 'https://www.mobiik.com/',
    image: `${base}/jobs/mobiik.png`
  },
  {
    title: 'Yuhu.mx',
    meta: 'LD Enterprise Solutions · oct 2021 – feb 2024',
    description:
      'Aplicaciones intermediarias con FastAPI, Python y PostgreSQL para integración NetSuite ERP (facturas, notas de crédito, etc.). Despliegue en AWS EC2, RDS y DynamoDB; Lambda para registro de interacciones. E-commerce con React, Next.js, TypeScript y TailwindCSS; mantenimiento de sistemas internos con Django y React. Gestión de proyectos con Agile/SCRUM y Jira.',
    tags: ['FastAPI', 'AWS', 'React', 'Next.js', 'NetSuite'],
    link: 'https://yuhu.mx/',
    image: `${base}/jobs/yuhu.png`
  },
  {
    title: 'High Technologies Analytics',
    meta: 'Fullstack Developer · mar 2021 – sep 2021',
    description:
      'Módulos estadísticos para CRM del grupo Heineken con Django, HTML, CSS, JavaScript, jQuery y Ajax. Desarrollo de módulos de envío de imágenes para una PWA.',
    tags: ['Django', 'JavaScript', 'jQuery', 'PWA'],
    link: 'https://htatec.com/',
    image: `${base}/jobs/hta.png`
  },
  {
    title: 'Altas Cumbres Applied Technologies',
    meta: 'Fullstack Developer · ago 2019 – mar 2021',
    description:
      'Módulos y reportes de CRM con Django y Python. App Android/Java para órdenes de servicio con Google Maps, notificaciones Firebase y cámara personalizada. App Android/Java para verificación de niveles de smog en zona fronteriza.',
    tags: ['Django', 'Android', 'Java', 'Firebase'],
    link: "https://www.altascumbresat.com/",
    image: `${base}/jobs/altas-cumbres.jpg`
  },
];

function Projects() {
  return (
    <section id="experience" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Experiencia profesional</h2>
        <div className={styles.grid}>
          {experienceData.map((item, index) => (
            <article key={index} className={styles.card}>
              <a
                href={item.link}
                className={styles.thumbLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir sitio de ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={`Vista previa de ${item.title}`}
                  className={styles.thumb}
                  loading="lazy"
                />
                <span className={styles.thumbOverlay}>Ver sitio en vivo</span>
              </a>
              <div className={styles.cardContent}>
                <h3>{item.title}</h3>
                <p className={styles.meta}>{item.meta}</p>
                <p>{item.description}</p>
                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                {item.link ? (
                  <a href={item.link} className={styles.cardLink}>
                    Ver detalle &rarr;
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
