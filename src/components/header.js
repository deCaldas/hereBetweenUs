"use client"
import styles from "../app/page.module.css"
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [activeLink, setActiveLink] = useState('')

  const handleLinkClick = (Link) => {
    setActiveLink(Link)
  }

  return (
    <>
      <header>
        <div className={styles.logo}>
          <h1>
            Acá Entre Nos
          </h1>
          {/* Aquí colocaría el logo de la empresa */}
{/*           <img src="/logo.png" alt="Logo de la empresa" /> */}
        </div>
        <nav>
          <ul>
            <li className={styles.card}>
              <Link href="/" onClick={() => handleLinkClick('/')}
                  className={activeLink === '/' ? 'active' : ''}
                  onMouseEnter={() => handleLinkClick('/')}
                  onMouseLeave={() => handleLinkClick('')}
                >
                  Inicio
                
              </Link>
            </li>
            <li className={styles.card}>
              <Link href="../pages/about" onClick={() => handleLinkClick('../pages/about')}
                  className={activeLink === '../pages/about' ? 'active' : ''}
                  onMouseEnter={() => handleLinkClick('../pages/about')}
                  onMouseLeave={() => handleLinkClick('')}
                >
                  Acerca de
              </Link>
            </li>
            <li className={styles.card}>
              <Link href="../pages/contact" onClick={() => handleLinkClick('../pages/contact')}
                  className={activeLink === '../pages/contact' ? 'active' : ''}
                  onMouseEnter={() => handleLinkClick('../pages/contact')}
                  onMouseLeave={() => handleLinkClick('')}
                >
                  Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          
        }

        .logo {
          display: flex;
          align-items: center;
        }

        nav {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        li {
          margin: 0 1rem;
        }
      `}</style>
    </>
  )
}
