import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/')
                  ? 'text-cyan-400 bg-cyan-400/10'
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
              }`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/projects')
                  ? 'text-cyan-400 bg-cyan-400/10'
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
              }`}
            >
              Projects
            </Link>
            <Link
              to="/job-simulations"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/job-simulations')
                  ? 'text-cyan-400 bg-cyan-400/10'
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
              }`}
            >
              Job Simulations
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-gray-800 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-md">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/')
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                }`}
              >
                Home
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/projects')
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                }`}
              >
                Projects
              </Link>
              <Link
                to="/job-simulations"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/job-simulations')
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                }`}
              >
                Job Simulations
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;