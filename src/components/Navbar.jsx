import { useState } from 'react'

const links = ['Home', 'Studio', 'Services', 'Contact', 'FAQs']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <a href="/" className="navbar__logo">Elementum</a>

        <ul className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          {links.map(link => (
            <li key={link}>
              <a href="#" onClick={() => setOpen(false)}>{link}</a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__burger${open ? ' navbar__burger--open' : ''}`}
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
