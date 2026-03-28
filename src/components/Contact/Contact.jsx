import { useState } from 'react';
import styles from './Contact.module.css';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorText, setErrorText] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorText('');

    if (!ACCESS_KEY || ACCESS_KEY.trim() === '') {
      setStatus('error');
      setErrorText(
        'Falta la clave de envío. Crea un archivo .env.local en la raíz del proyecto con REACT_APP_WEB3FORMS_ACCESS_KEY=tu_clave (obtén la clave gratis en web3forms.com).'
      );
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `[Portfolio] Mensaje de ${formData.name}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorText(
          typeof data.message === 'string'
            ? data.message
            : 'No se pudo enviar el mensaje. Intenta de nuevo más tarde.'
        );
      }
    } catch {
      setStatus('error');
      setErrorText(
        'Error de red. Comprueba tu conexión e intenta de nuevo.'
      );
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contacto</h2>
        <p className={styles.subtitle}>
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        <div className={styles.direct}>
          <a href="tel:+528342154699" className={styles.directLink}>
            (+52) 834 215 46 99
          </a>
          <a
            href="mailto:mhernandezrdz96@gmail.com"
            className={styles.directLink}
          >
            mhernandezrdz96@gmail.com
          </a>
        </div>

        {status === 'success' ? (
          <p className={`${styles.feedback} ${styles.feedbackSuccess}`} role="status">
            Mensaje enviado. Te responderé pronto.
          </p>
        ) : null}
        {status === 'error' && errorText ? (
          <p className={`${styles.feedback} ${styles.feedbackError}`} role="alert">
            {errorText}
          </p>
        ) : null}

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
              disabled={status === 'loading'}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
              disabled={status === 'loading'}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntame sobre tu proyecto..."
              rows="5"
              required
              disabled={status === 'loading'}
            ></textarea>
          </div>
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
