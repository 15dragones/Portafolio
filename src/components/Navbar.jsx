import { useState } from 'react'
import './Navbar.css'

const navItems = [
  { label: 'Perfil', href: '#sobre-mi' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Certificados', href: '#certificados' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar" aria-label="Navegación principal">
          <div className="navbar-logo">
            <span className="text-cyan">Adolfo</span> Choque
      </div>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>

      <button
        type="button"
        className="navbar-toggle"
        aria-label="Abrir menú"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </nav>
  )
}

export default Navbar
