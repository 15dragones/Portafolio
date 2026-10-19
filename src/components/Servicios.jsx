import './Servicios.css'

const services = [
  'Diseño de bases de datos',
  'Consultas y programación SQL',
  'Análisis exploratorio de datos',
  'Prototipos básicos con Python y Java',
  'Orientación en hardware de computadoras',
]

function Servicios() {
  return (
    <section id="servicios" className="servicios-section">
      <div className="section-header">
        <p className="eyebrow">Servicios</p>
        <h2>Soluciones a medida</h2>
      </div>

      <div className="servicios-grid">
        {services.map((service) => (
          <div key={service} className="service-card">
            <span className="service-icon">✓</span>
            <p>{service}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Servicios
