import './Proyectos.css'
import appSqliteImage from '../assets/proyecto-app-sqlite.png'
import tinkercadImage from '../assets/proyecto-arduino-tinkercad.png'
import matriculaImage from '../assets/proyecto-sistema-matricula.png'

const projects = [
  {
    title: 'Aplicación móvil con SQLite',
    category: 'Android',
    description: 'Aplicación Android que permite crear una base de datos local con SQLite directamente desde el dispositivo.',
    tech: ['Android', 'SQLite'],
    image: appSqliteImage,
    imageAlt: 'Vista de la aplicación móvil para crear una base de datos SQLite',
    link: '/descargas/app-sqlite.apk',
    linkLabel: 'Descargar APK',
    download: true,
  },
  {
    title: 'Circuito Arduino en Tinkercad',
    category: 'Electrónica',
    description: 'Circuito interactivo simulado en Tinkercad: un potenciómetro controla tres LEDs conectados a una placa Arduino.',
    tech: ['Arduino', 'Tinkercad'],
    image: tinkercadImage,
    imageAlt: 'Circuito Arduino con potenciómetro y tres LEDs en Tinkercad',
    link: 'https://www.tinkercad.com/things/fPPbmTqiI5B/editel?returnTo=%2Fdashboard&sharecode=ijNZqCQFUbVIe1cBY3qzchhYdkPNNAlmYFdz6XDZnvM',
    linkLabel: 'Ver proyecto',
  },
  {
    title: 'Sistema de Matrícula - SENATI',
    category: 'Aplicación web',
    description: 'Aplicación web para consultar el directorio de alumnos, cambiar estados de matrícula y gestionar alumnos seleccionados.',
    tech: ['Matrículas', 'Gestión de alumnos'],
    image: matriculaImage,
    imageAlt: 'Directorio de alumnos del Sistema de Matrícula SENATI',
    link: 'https://app-escuela-fesk-f4-7299.vercel.app/',
    linkLabel: 'Abrir aplicación',
  },
]

function Proyectos() {
  return (
    <section id="proyectos" className="proyectos-section">
      <div className="section-header">
        <p className="eyebrow">Proyectos</p>
        <h2>Desarrollo, electrónica y gestión académica</h2>
        <p className="projects-intro">
          Aplicaciones y proyectos prácticos de software, circuitos con Arduino y gestión de matrículas.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            {project.image && (
              <img
                className="project-preview"
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
              />
            )}
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
            {project.link && (
              <a
                className="project-link"
                href={project.link}
                target={project.download ? undefined : '_blank'}
                rel={project.download ? undefined : 'noreferrer'}
                download={project.download ? true : undefined}
              >
                {project.linkLabel}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Proyectos
