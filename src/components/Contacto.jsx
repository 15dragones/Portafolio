import './Contacto.css'

function Contacto() {
  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-wrap">
        <div className="contacto-copy">
          <p className="eyebrow">Contacto</p>
          <h2>Hablemos de tu próximo proyecto</h2>
          <p>
            Estoy listo para apoyar con análisis de datos, automatización, desarrollo web y
            soluciones orientadas a resultados.
          </p>
        </div>

        <div className="contacto-links">
          <a href="mailto:Adolfo_dragon2005@hotmail.com">Adolfo_dragon2005@hotmail.com</a>
          <a href="https://github.com/15dragones/Portafolio" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://wa.me/591905296348" target="_blank" rel="noreferrer">
            905296348
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contacto
