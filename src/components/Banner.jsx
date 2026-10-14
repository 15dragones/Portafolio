import miFoto from '../assets/miFoto.png'
import './Banner.css'

function Banner() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-content">
        <div className="status-badge">
          <span className="status-dot" />
          Disponible para nuevos proyectos
        </div>

        <div className="profile-photo-container">
          <img src={miFoto} alt="Adolfo Choque Coque" className="profile-photo" />
        </div>

        <h1 className="hero-title">
          Adolfo
          <br />
          <span className="text-cyan">Choque Coque</span>
        </h1>

        <h2 className="hero-subtitle">
          Full Stack Developer | BI Analyst | Ingeniero de Sistemas
        </h2>

        <p className="hero-description">
          Desarrollador Full Stack con enfoque en soluciones web, análisis de datos y
          automatización de procesos para mejorar la productividad, la toma de decisiones y
          la experiencia digital de las personas y empresas.
        </p>

        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn btn-secondary">
            Contáctame
          </a>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        ↓
      </div>
    </section>
  )
}

export default Banner
