import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../components/Logo';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import miniCart from '../assets/mini-cart.svg';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const items = [
    { label: 'Home', to: '/' },
    { label: 'Produtos', to: '/Produtos' },
    { label: 'Categorias', to: '/Categorias' },
    { label: 'Meus Produtos', to: '/Meus Pedidos' }
  ];

  useEffect(() => {
    const index = items.findIndex(item => item.to === location.pathname);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [location.pathname]);

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      navigate(`/products?filter=${searchQuery}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="bg-white shadow-md py-9" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto w-full px-4 md:px-9">
        {/* Linha superior */}
        <div className="relative flex items-center justify-between w-full md:justify-between">
          {/* Ícone do menu (mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* Logo centralizada (mobile) */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:flex-none text-center">
            <Logo variant="header" />
          </div>

          {/* Campo de busca (desktop) */}
          <div className="hidden md:flex items-center bg-[#F5F5F5] rounded-lg px-5 py-4 w-full max-w-xl ml-4">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="outline-none bg-transparent w-full"
            />
            <button onClick={handleSearch} className="text-gray-300 ml-2">
              <FaSearch size={20} />
            </button>
          </div>

          {/* Área de redirecionamento e carrinho */}
          <div className="flex items-center gap-4 ml-4">
            <div className="hidden md:flex items-center gap-6">
              <a
                href="/signup"
                className="text-[16px] text-gray-700 underline hover:text-gray-900 mr-3"
              >
                Cadastre-se
              </a>
              <a
                href="/login"
                className="w-[114px] h-[40px] bg-[#C92071] hover:bg-[#991956] transition-colors duration-200 rounded-lg text-white font-bold text-[14px] flex items-center justify-center mr-8"
              >
                Entrar
              </a>
            </div>

            {/* Lupa (mobile) */}
            <button
              className={`${showMobileSearch ? 'text-pink-600' : 'text-gray-400'} md:hidden`}
              onClick={() => setShowMobileSearch(!showMobileSearch)}
            >
              <FaSearch size={20} />
            </button>

            <img
              src={miniCart}
              alt="Carrinho de compras"
              className="w-6 h-6"
            />
          </div>
        </div>

        {/* Campo de busca (mobile expandido) */}
        {showMobileSearch && (
          <div className="md:hidden mt-3 flex items-center bg-gray-100 rounded-lg px-4 py-2 w-full">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="outline-none bg-transparent w-full"
            />
            <button onClick={handleSearch} className="text-gray-300">
              <FaSearch size={20} />
            </button>
          </div>
        )}

        {/* Menu de navegação (desktop) */}
        <nav className="hidden md:flex gap-4 mt-8 translate-y-2">
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 transition-all duration-150 ${
                  isActive
                    ? 'text-[#C92071] font-bold'
                    : 'text-gray-600 font-normal hover:text-[#991956]'
                }`
              }
              onClick={() => setActiveIndex(index)}
            >
              <span
                className={`transition-all duration-200 ${
                  location.pathname === item.to
                    ? 'border-b-2 border-[#C92071]'
                    : 'border-b-2 border-transparent hover:border-[#991956]'
                }`}
              >
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Menu suspenso lateral (mobile) com overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs bg-white shadow-md p-6 md:hidden flex flex-col"
            >
              {/* Botão fechar */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="self-end mb-4 text-gray-700"
              >
                <FaTimes size={20} />
              </button>

              {/* Título Páginas */}
              <h2 className="text-lg font-bold mb-4">Páginas</h2>

              {/* Navegação */}
              <nav className="flex flex-col gap-4 mb-6">
                {items.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.to}
                    className="text-gray-700 text-[16px] hover:text-pink-600"
                    onClick={() => {
                      setActiveIndex(index);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              {/* Entrar / Cadastre-se */}
              <div className="flex flex-col gap-3 mt-auto">
                <a
                  href="/login"
                  className="w-full text-center bg-[#C92071] hover:bg-[#991956] transition-colors duration-200 rounded-lg text-white font-bold text-[14px] py-2"
                >
                  Entrar
                </a>
                <a
                  href="/signup"
                  className="text-center text-[15px] text-gray-800 underline hover:text-[#991956]"
                >
                  Cadastre-se
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
