import React from 'react'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  // Navigation items
  const navItems = [
    { id: '00', label: 'Home', path: '/' },
    { id: '01', label: 'Destination', path: '/destination' },
    { id: '02', label: 'Crew', path: '/crew' },
    { id: '03', label: 'Technology', path: '/technology' }
  ]

  // Burger menu handler
  const [hamburgerActive, setHamburgerActive] = React.useState(false)

  const setHamburgerState = () => {
    setHamburgerActive((prev) => !prev)
  }

  // Rendered
  return (
    <header className="header">
      <svg
        className="header__logo"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        onClick={() => router.push('/')}
      >
        <g fill="none">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
      <nav>
        <button
          className="header__hamburger"
          onClick={() => setHamburgerState()}
        >
          <span
            className={
              hamburgerActive
                ? 'header__hamburger__item--active'
                : 'header__hamburger__item'
            }
          />
          <span
            className={
              hamburgerActive
                ? 'header__hamburger__item--active'
                : 'header__hamburger__item'
            }
          />
        </button>
        <ul className={hamburgerActive ? 'header__nav--active' : 'header__nav'}>
          {navItems.map((el) => (
            <li
              className={
                router.pathname == el.path
                  ? 'header__nav__item--active'
                  : 'header__nav__item'
              }
              key={el.id}
            >
              <a href={el.path}>
                <span className="header__nav__item__index">{el.id}</span>
                {el.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
