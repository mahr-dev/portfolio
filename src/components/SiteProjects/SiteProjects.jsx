import styles from './SiteProjects.module.css';

const base = process.env.PUBLIC_URL || '';

const portfolioProjects = [
  {
    title: 'Weather App',
    meta: 'Proyecto personal · desplegado en Vercel',
    description:
      'Aplicación web para consultar el clima de cualquier ciudad: búsqueda por nombre y presentación clara de la información meteorológica. Pensada como demo de interfaz simple y consumo de datos en tiempo real.',
    tags: ['React', 'API clima', 'Vercel'],
    url: 'https://weather-app-opal-six-59.vercel.app/',
    image: `${base}/projects/weather-app.jpg`,
  },
  {
    title: 'Generador de CV',
    meta: 'Proyecto personal · desplegado en Vercel',
    description:
      'Herramienta para armar un currículum en el navegador: datos personales, experiencia, educación, habilidades, contacto y preferencias de diseño (por ejemplo estilo clásico). Flujo guiado para añadir bloques y exportar o usar el resultado como referencia.',
    tags: ['React', 'UI', 'PDF / impresión'],
    url: 'https://cv-generator-zshf.vercel.app/',
    image: `${base}/projects/cv-generator.jpg`,
  },
  {
    title: 'ShopNow · eCommerce',
    meta: 'Proyecto personal · desplegado en Vercel',
    description:
      'Tienda demo con catálogo, destacados, registro e inicio de sesión, y flujo de compra con checkout. Incluye mensajes de confianza (envío, pago, historial) y exploración por productos; pensada como vitrina de un e-commerce moderno.',
    tags: ['Next.js', 'Auth', 'Stripe (test)'],
    url: 'https://e-commerce-txvg.vercel.app/',
    image: `${base}/projects/e-commerce.jpg`,
  },
];

function SiteProjects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Proyectos</h2>
        <div className={styles.grid}>
          {portfolioProjects.map((project) => (
            <article key={project.url} className={styles.card}>
              <a
                href={project.url}
                className={styles.thumbLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir ${project.title} en una pestaña nueva`}
              >
                <img
                  src={project.image}
                  alt={`Vista previa de ${project.title}`}
                  className={styles.thumb}
                  loading="lazy"
                />
                <span className={styles.thumbOverlay}>Ver sitio en vivo</span>
              </a>
              <div className={styles.body}>
                <h3>{project.title}</h3>
                <p className={styles.meta}>{project.meta}</p>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  className={styles.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar sitio &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SiteProjects;
