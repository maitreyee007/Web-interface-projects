import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/profile', label: 'Student Profile' },
  { to: '/semester-1', label: 'Semester 1' },
  { to: '/semester-2', label: 'Semester 2' },
  { to: '/semester-3', label: 'Semester 3' },
  { to: '/semester-4', label: 'Semester 4' },
  { to: '/overall-performance', label: 'Overall Performance' },
]

function Navbar() {
  return (
    <nav className="top-nav">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
