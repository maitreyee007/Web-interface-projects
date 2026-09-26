import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/profile', label: 'Student Profile' },
  { to: '/semester-1', label: 'Semester 1' },
  { to: '/semester-2', label: 'Semester 2' },
  { to: '/semester-3', label: 'Semester 3' },
  { to: '/semester-4', label: 'Semester 4' },
  { to: '/overall-performance', label: 'Overall Performance' },
]

function Sidebar() {
  return (
    <aside className="sidebar no-print">
      <div className="sidebar-header">
        <span className="sidebar-badge">College Portal</span>
        <h2>Academic</h2>
      </div>

      <div className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
