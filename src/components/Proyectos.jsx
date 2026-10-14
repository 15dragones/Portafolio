import './Proyectos.css'

const projects = [
  {
    title: 'Dashboard corporativo',
    category: 'Power BI',
    description: 'Visualización de indicadores clave para seguimiento de ventas, rendimiento y tendencia del negocio.',
    tech: ['Power BI', 'DAX', 'SQL'],
  },
  {
    title: 'Portfolio personal',
    category: 'Full Stack',
    description: 'Portafolio moderno y responsivo para mostrar perfil profesional, proyectos y contacto.',
    tech: ['React', 'Vite', 'Bootstrap'],
  },
  {
    title: 'Automatización de procesos',
    category: 'Procesos',
    description: 'Solución enfocada en reducir tareas repetitivas, ahorrar tiempo y mejorar la operatividad.',
    tech: ['Python', 'Excel', 'Automatización'],
  },
]

function Proyectos() {
  return (
    <section id="proyectos" className="proyectos-section">
      <div className="section-header">
        <p className="eyebrow">Proyectos</p>
        <h2>Soluciones que generan impacto</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-top">
              <span className="project-category">{project.category}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-list">
              {project.tech.map((item) => (
                <span key={`${project.title}-${item}`} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Proyectos
