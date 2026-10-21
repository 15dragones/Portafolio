import './Certificados.css'

const certificados = [
  {
    titulo: 'Computer Hardware Basics',
    area: 'Fundamentos de hardware',
    archivo: '/certificados/computer-hardware-basics.pdf',
  },
  {
    titulo: 'Introduction to Data Science',
    area: 'Ciencia de datos',
    archivo: '/certificados/introduction-to-data-science.pdf',
  },
  {
    titulo: 'Python Essentials 1',
    area: 'Programación con Python',
    archivo: '/certificados/python-essentials-1.pdf',
  },
  {
    titulo: 'Database Programming with SQL',
    area: 'Oracle Academy · Español',
    archivo: '/certificados/database-programming-with-sql.jpg',
    formato: 'JPG',
  },
  {
    titulo: 'Database Design',
    area: 'Oracle Academy · Español',
    archivo: '/certificados/database-design.jpg',
    formato: 'JPG',
  },
  {
    titulo: 'Java Foundations',
    area: 'Oracle Academy · Español',
    archivo: '/certificados/java-foundations.jpg',
    formato: 'JPG',
  },
  {
    titulo: 'Java Fundamentals',
    area: 'Oracle Academy · Español',
    archivo: '/certificados/java-fundamentals.jpg',
    formato: 'JPG',
  },
]

function Certificados() {
  return (
    <section id="certificados" className="certificados-section">
      <div className="section-header">
        <p className="eyebrow">Formación</p>
        <h2>Certificados</h2>
      </div>

      <div className="certificados-grid">
        {certificados.map((certificado) => (
          <article key={certificado.titulo} className="certificado-card">
            <div className="certificado-card-top">
              <span className="certificado-icon" aria-hidden="true">
                {certificado.formato ?? 'PDF'}
              </span>
              <span className="certificado-area">{certificado.area}</span>
            </div>
            {certificado.formato === 'JPG' && (
              <a
                className="certificado-preview-link"
                href={certificado.archivo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver imagen del certificado ${certificado.titulo}`}
              >
                <img
                  className="certificado-preview"
                  src={certificado.archivo}
                  alt={`Certificado Oracle Academy: ${certificado.titulo}`}
                  loading="lazy"
                />
              </a>
            )}
            {certificado.formato !== 'JPG' && (
              <iframe
                className="certificado-preview certificado-pdf-preview"
                src={`${certificado.archivo}#toolbar=0&navpanes=0`}
                title={`Vista previa del certificado ${certificado.titulo}`}
                loading="lazy"
              />
            )}
            <h3>{certificado.titulo}</h3>
            <div className="certificado-actions">
              <a href={certificado.archivo} target="_blank" rel="noreferrer">
                Ver certificado
              </a>
              <a href={certificado.archivo} download>
                Descargar
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certificados
