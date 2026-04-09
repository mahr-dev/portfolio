import styles from './Footer.module.css';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/mahr-dev',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/miguel-hern%C3%A1ndez-645a3418a/',
  },
  {
    name: 'Email',
    url: 'mailto:mhernandezrdz96@gmail.com',
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={link.name}
            >
              {link.name}
            </a>
          ))}
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Miguel Angel Hernandez Rodriguez.
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
