import styles from './Projects.module.css';

const projectsData = [
  {
    title: 'E-Commerce App',
    description: 'Tienda online completa con carrito de compras, pagos y panel de administración.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Task Manager',
    description: 'Aplicación de gestión de tareas con drag & drop, filtros y colaboración en tiempo real.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Dashboard meteorológico con datos en tiempo real, gráficos interactivos y pronósticos.',
    tags: ['React', 'API REST', 'Chart.js'],
    link: '#',
  },
  {
    title: 'Chat Application',
    description: 'App de mensajería en tiempo real con salas, emojis y compartición de archivos.',
    tags: ['Socket.io', 'Express', 'React'],
    link: '#',
  },
  {
    title: 'Blog Platform',
    description: 'Plataforma de blog con editor markdown, sistema de comentarios y SEO optimizado.',
    tags: ['Next.js', 'MDX', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Fitness Tracker',
    description: 'Seguimiento de ejercicios y nutrición con estadísticas y planes personalizados.',
    tags: ['React Native', 'Firebase', 'Redux'],
    link: '#',
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Proyectos</h2>
        <div className={styles.grid}>
          {projectsData.map((project, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.cardImage}>
                <span>Preview</span>
              </div>
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} className={styles.cardLink}>
                  Ver proyecto &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
