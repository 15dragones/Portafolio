import './Perfil.css'

const skillsData = [
  {
    id: 'bi',
    titulo: 'Business Intelligence',
    descripcion: 'Diseño dashboards y modelos analíticos para transformar datos en decisiones estratégicas.',
    nivel: 'Especializado',
    estado: 'activo',
    botonTexto: 'Experto',
  },
  {
    id: 'web',
    titulo: 'Desarrollo Web',
    descripcion: 'Construyo interfaces modernas, funcionales y centradas en la experiencia del usuario.',
    nivel: 'Avanzado',
    estado: 'activo',
    botonTexto: 'Full Stack',
  },
  {
    id: 'automacion',
    titulo: 'Automatización',
    descripcion: 'Optimizo tareas repetitivas con procesos más ágiles, ordenados y eficientes.',
    nivel: 'Eficiente',
    estado: 'activo',
    botonTexto: 'Procesos',
  },
  {
    id: 'consultoria',
    titulo: 'Consultoría',
    descripcion: 'Acompaño a personas y empresas en la mejora de procesos digitales y soluciones prácticas.',
    nivel: 'Práctico',
    estado: 'activo',
    botonTexto: 'Soporte',
  },
]

function Perfil() {
  return (
    <section id="sobre-mi" className="perfil-section">
      <div className="section-header">
        <p className="eyebrow">Sobre mí</p>
        <h2>Perfil profesional</h2>
      </div>

      <div className="perfil-grid">
        <div className="perfil-copy">
          <p>
            Soy Adolfo Choque Coque, desarrollador con enfoque en soluciones web, análisis de
            datos y automatización de procesos. Me apasiona crear herramientas útiles que
            aporten valor real y mejoren la productividad.
          </p>
          <p>
            Mi trabajo combina tecnología, lógica y diseño para entregar experiencias digitales
            claras, eficientes y alineadas con las necesidades de cada proyecto.
          </p>
        </div>

        <div id="tech-stack" className="habilidades-grid">
          {skillsData.map((skill) => (
            <article key={skill.id} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">✦</div>
                <span className={`skill-badge ${skill.estado}`}>{skill.botonTexto}</span>
              </div>

              <div className="skill-body">
                <h3>{skill.titulo}</h3>
                <p>{skill.descripcion}</p>
                <span className="skill-level">{skill.nivel}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Perfil
