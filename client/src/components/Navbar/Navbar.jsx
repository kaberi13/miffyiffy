import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/categories/bouquet', label: 'Bouquets' },
    { path: '/categories/keychain', label: 'Keychains' },
    { path: '/categories/neckchain', label: 'Neckchains' },
    { path: '/categories/bracelet', label: 'Bracelets' },
    { path: '/categories/bagcharm', label: 'Bag Charms' },
    { path: '/categories/phonecharm', label: 'Phone Charms' }
  ];

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link 
              to={item.path}
              className={isActivePath(item.path) ? 'active' : ''}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;