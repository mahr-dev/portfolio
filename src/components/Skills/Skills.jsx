import styles from './Skills.module.css';

const skillCategories = [
  {
    category: 'Lenguajes',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'Java', level: 78 },
      { name: 'PHP', level: 70 },
    ],
  },
  {
    category: 'Frameworks y frontend',
    skills: [
      { name: 'Django / DRF', level: 90 },
      { name: 'FastAPI', level: 88 },
      { name: 'React / Next.js', level: 86 },
      { name: 'Angular / PrimeNG', level: 82 },
      { name: 'HTML / CSS / Tailwind', level: 90 },
    ],
  },
  {
    category: 'Cloud, datos e infra',
    skills: [
      { name: 'Azure (OpenAI, AKS, Cosmos…)', level: 88 },
      { name: 'AWS (EC2, Lambda, RDS…)', level: 85 },
      { name: 'PostgreSQL / Redis', level: 88 },
      { name: 'Docker / Kubernetes', level: 82 },
      { name: 'Git / GitHub Actions', level: 88 },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Habilidades</h2>
        <p className={styles.intro}>
          También trabajo con Flask, Vue.js, MongoDB, SQLite, NetSuite, Nginx,
          Digital Ocean, metodologías ágiles y principios SOLID. Idiomas: español
          (nativo) e inglés (avanzado).
        </p>
        <div className={styles.categories}>
          {skillCategories.map((cat) => (
            <div key={cat.category} className={styles.category}>
              <h3 className={styles.categoryTitle}>{cat.category}</h3>
              <div className={styles.skillsList}>
                {cat.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
