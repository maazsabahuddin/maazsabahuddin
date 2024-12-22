import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Projects', path: '/' },
  { label: 'Experience', path: '/experience' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contributions', path: '/contributions' },
  { label: 'Recommendations', path: '/recommendations' },
  { label: 'Licenses & certifications', path: '/licenses' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-black/20 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-8 py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-yellow-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;