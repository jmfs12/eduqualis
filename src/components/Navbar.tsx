
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, User, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-2 fixed bottom-0 w-full md:top-0 md:bottom-auto z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile Bottom Navigation */}
        <div className="flex justify-around items-center md:hidden">
          <Link to="/" className="flex flex-col items-center p-2 text-eduBlue-600">
            <Home size={24} />
            <span className="text-xs mt-1">Feed</span>
          </Link>
          <Link to="/tracks" className="flex flex-col items-center p-2 text-gray-500 hover:text-eduBlue-600">
            <BookOpen size={24} />
            <span className="text-xs mt-1">Trilhas</span>
          </Link>
          <Link to="/search" className="flex flex-col items-center p-2 text-gray-500 hover:text-eduBlue-600">
            <Search size={24} />
            <span className="text-xs mt-1">Buscar</span>
          </Link>
          <Link to="/dashboard" className="flex flex-col items-center p-2 text-gray-500 hover:text-eduBlue-600">
            <User size={24} />
            <span className="text-xs mt-1">Perfil</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-eduBlue-600">EduQualis</span>
            </Link>
            <div className="ml-10 flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-eduBlue-600 px-3 py-2 rounded-md text-sm font-medium">Feed</Link>
              <Link to="/tracks" className="text-gray-700 hover:text-eduBlue-600 px-3 py-2 rounded-md text-sm font-medium">Trilhas</Link>
              <Link to="/search" className="text-gray-700 hover:text-eduBlue-600 px-3 py-2 rounded-md text-sm font-medium">Buscar</Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <Link to="/dashboard" className="button-primary">
              Meu Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
