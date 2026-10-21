import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import './Contacto.css'

function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const nombre = formData.get('nombre')
    const email = formData.get('email')
    const tema = formData.get('tema')
    const mensaje = formData.get('mensaje')
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      await Swal.fire({
        title: 'Formulario no configurado',
        text: 'Por ahora, puedes escribirme directamente a Adolfo_dragon2005@hotmail.com.',
        icon: 'info',
        confirmButtonColor: '#00d8ff',
        background: '#111a2e',
        color: '#ffffff',
      })
      return
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          nombre,
          email,
          mensaje: `Tema: ${tema}\n\n${mensaje}`,
          reply_to: email,
        },
        { publicKey },
      )

      await Swal.fire({
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactarme. Te responderé a la brevedad.',
        icon: 'success',
        confirmButtonColor: '#00d8ff',
        background: '#111a2e',
        color: '#ffffff',
      })
      form.reset()
    } catch (error) {
      console.error('Error al enviar el mensaje:', error)
      await Swal.fire({
        title: 'No se pudo enviar el mensaje',
        text: 'Inténtalo de nuevo más tarde o escríbeme directamente por correo.',
        icon: 'error',
        confirmButtonColor: '#00d8ff',
        background: '#111a2e',
        color: '#ffffff',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-wrap">
        <div className="contacto-copy">
          <p className="eyebrow">Contacto</p>
          <h2>Hablemos de tu próximo proyecto</h2>
          <p>Cuéntame qué necesitas y te responderé a la brevedad.</p>

          <div className="contacto-links">
            <a href="mailto:Adolfo_dragon2005@hotmail.com">
              <span>Correo</span>
              Adolfo_dragon2005@hotmail.com
            </a>
            <a href="https://wa.me/591905296348" target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              905296348
            </a>
            <a href="https://github.com/15dragones" target="_blank" rel="noreferrer">
              <span>GitHub</span>
              github.com/15dragones
            </a>
          </div>
        </div>

        <form className="contacto-form" onSubmit={handleSubmit} aria-busy={isSubmitting}>
          <h3>Envíame una consulta</h3>

          <fieldset className="contacto-form-fields" disabled={isSubmitting}>
            <div className="contacto-form-row">
              <label>
                Nombre
                <input name="nombre" type="text" autoComplete="name" required />
              </label>
              <label>
                <span className="contacto-field-label">
                  Correo electrónico
                  <span className="contacto-help">
                    <button
                      type="button"
                      aria-label="Información sobre el correo electrónico"
                      aria-describedby="contacto-email-help"
                    >
                      <svg viewBox="0 0 20 20" aria-hidden="true">
                        <circle cx="10" cy="10" r="8" />
                        <path d="M10 9v5m0-8h.01" />
                      </svg>
                    </button>
                    <span id="contacto-email-help" className="contacto-tooltip" role="tooltip">
                      Escribe tu correo para que pueda responderte. Mi correo de destino está
                      configurado en la plantilla y no se cambia desde aquí.
                    </span>
                  </span>
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-describedby="contacto-email-help"
                  required
                />
              </label>
            </div>

            <label>
              Tema de consulta
              <select name="tema" defaultValue="" required>
                <option value="" disabled>Selecciona un tema</option>
                <option value="Bases de datos y SQL">Bases de datos y SQL</option>
                <option value="Análisis de datos">Análisis de datos</option>
                <option value="Programación con Python o Java">Programación con Python o Java</option>
                <option value="Hardware de computadoras">Hardware de computadoras</option>
                <option value="Arduino y electrónica">Arduino y electrónica</option>
                <option value="Aplicación Android con SQLite">Aplicación Android con SQLite</option>
                <option value="Sistema web de matrícula">Sistema web de matrícula</option>
                <option value="Otro tema">Otro tema</option>
              </select>
            </label>

            <label>
              Cuéntame qué necesitas
              <textarea name="mensaje" rows="5" required />
            </label>

            <button type="submit">
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </fieldset>
          <p className="contacto-form-note">
            También puedes escribirme directamente a{' '}
            <a href="mailto:Adolfo_dragon2005@hotmail.com">mi correo</a>.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contacto
