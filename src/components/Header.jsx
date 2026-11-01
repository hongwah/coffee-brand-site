import { brand, nav } from '../content.js'

export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="#top">
        {brand.name}
        <span className="logo-en">{brand.nameEn}</span>
      </a>
      <nav aria-label="主导航">
        <ul className="nav-list">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
