
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, BookOpen, User, Search, LogOut } from 'lucide-react';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'sonner';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Você saiu com sucesso');
      navigate('/');
    } catch (error) {
      toast.error('Erro ao sair');
    }
  };

  return (
    <nav className="bg-white shadow-md py-2 fixed bottom-0 w-full md:top-0 md:bottom-auto z-50">
      <div className="w-full px-2 md:px-4">
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
          <Link to="/dashboard" className="flex flex-col items-center p-2 text-gray-500 hover:text-eduBlue-600">
            <User size={24} />
            <span className="text-xs mt-1">Perfil</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center px-0 py-2">
          {/* ESQUERDA */}
          <div className="flex items-center gap-4">
            <Link to="/" className="text-xl font-bold text-eduBlue-600">EduQualis</Link>
            <div className="flex items-center">
              <Link to="/" className="text-gray-700 hover:text-eduBlue-600 px-3 py-2 rounded-md text-sm font-medium">Feed</Link>
              <Link to="/tracks" className="text-gray-700 hover:text-eduBlue-600 px-3 py-2 rounded-md text-sm font-medium">Trilhas</Link>
              <Link to="/about" className="text-gray-700 hover:text-eduBlue-600 px-3 py-2 rounded-md text-sm font-medium">Sobre</Link>
            </div>
          </div>

          {/* DIREITA */}
          <div className="flex items-center gap-4">
            {user && (
              <button 
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-red-500"
              >
                <LogOut size={18} className="mr-1" />
                <span>Sair</span>
              </button>
            )}
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
