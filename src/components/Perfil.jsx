import './Perfil.css'

const skillsData = [
  {
    id: 'datos',
    titulo: 'Ciencia de datos',
    descripcion: 'Formación introductoria en conceptos y procesos de ciencia de datos.',
    nivel: 'Introducción al análisis de datos',
    estado: 'activo',
    botonTexto: 'Cisco',
  },
  {
    id: 'bases-datos',
    titulo: 'Bases de datos y SQL',
    descripcion: 'Conocimientos de diseño de bases de datos y programación de consultas SQL.',
    nivel: 'Diseño y consultas SQL',
    estado: 'activo',
    botonTexto: 'Oracle Academy',
  },
  {
    id: 'programacion',
    titulo: 'Programación',
    descripcion: 'Fundamentos de programación con Python y Java.',
    nivel: 'Python y Java',
    estado: 'activo',
    botonTexto: 'Cisco · Oracle',
  },
  {
    id: 'hardware',
    titulo: 'Hardware',
    descripcion: 'Conocimientos fundamentales sobre componentes y hardware de computadoras.',
    nivel: 'Fundamentos de hardware',
    estado: 'activo',
    botonTexto: 'Cisco',
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
            Soy Adolfo Choque Coque y me interesa la tecnología, la programación y el análisis
            de datos. Mi formación incluye cursos de ciencia de datos, Python, hardware,
            diseño de bases de datos, SQL y Java, realizados con Cisco Networking Academy y
            Oracle Academy.
          </p>
          <p>
            Busco aplicar estos conocimientos en soluciones prácticas, seguir desarrollándome
            en el área tecnológica y crear herramientas claras y útiles según las necesidades
            de cada proyecto.
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
