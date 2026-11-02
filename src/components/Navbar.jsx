'use client'

import { useState } from 'react'

function Navbar({ displayName, items }) {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="site-header">
      <a className="site-header__brand" href="#home">
        {displayName}
      </a>
      <button
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        className="site-header__menu-button"
        onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}
        type="button"
      >
        <span className="site-header__menu-icon" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span>{isOpen ? '關閉導覽' : '開啟導覽'}</span>
      </button>
      <nav
        aria-label="主要導覽"
        className={'site-header__nav' + (isOpen ? ' is-open' : '')}
        id="primary-navigation"
      >
        <ul className="site-header__nav-list">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
