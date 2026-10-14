import './Servicios.css'

const services = [
  'Desarrollo Full Stack',
  'Análisis de datos y BI',
  'Automatización de procesos',
  'Consultoría tecnológica',
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
