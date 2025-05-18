import React from 'react';
import Logo from '../components/Logo';
import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import TwitterIcon from '../assets/twitter.svg';

function Footer() {
  return (
    <footer
      className="bg-[#1F1F1F] text-white py-7 px-6 md:px-20"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* MOBILE */}
      <div className="block md:hidden">
        {/* Coluna 1 */}
        <div className="mt-4">
          <Logo variant="footer" />
          <p className="text-white mt-8 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus imperdiet.
          </p>
          <div className="flex space-x-4 mb-12">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src={TwitterIcon} alt="Twitter" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Colunas 2 e 3 lado a lado */}
        <div className="flex justify-between gap-6 mt-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Informação</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-pink-400">Sobre Drip Store</a></li>
              <li><a href="#" className="hover:text-pink-400">Segurança</a></li>
              <li><a href="#" className="hover:text-pink-400">Whishlist</a></li>
              <li><a href="#" className="hover:text-pink-400">Blog</a></li>
              <li><a href="#" className="hover:text-pink-400">Trabalhe Conosco</a></li>
              <li><a href="#" className="hover:text-pink-400">Meus Pedidos</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-pink-400">Camisetas</a></li>
              <li><a href="#" className="hover:text-pink-400">Calças</a></li>
              <li><a href="#" className="hover:text-pink-400">Bonés</a></li>
              <li><a href="#" className="hover:text-pink-400">Headphones</a></li>
              <li><a href="#" className="hover:text-pink-400">Tênis</a></li>
            </ul>
          </div>
        </div>

        {/* Coluna 4 */}
        <div className="mt-6 mt-10">
          <h3 className="text-lg font-semibold mb-4">Contato</h3>
          <p className="text-white mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus imperdiet.
          </p>
          <p className="text-white">(85) 3051-3411</p>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:grid md:grid-cols-4 gap-y-8 md:gap-x-20 max-w-7xl mx-auto">
        {/* Coluna 1 */}
        <div className="mt-4 md:mr-12">
          <Logo variant="footer" />
          <p className="text-white mt-8 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus imperdiet.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src={TwitterIcon} alt="Twitter" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Coluna 2 */}
        <div className="mt-4 ml-25 mb-3">
          <h3 className="text-lg font-semibold mb-4">Informação</h3>
          <ul className="space-y-2 text-white">
            <li><a href="#" className="hover:text-pink-400">Sobre Drip Store</a></li>
            <li><a href="#" className="hover:text-pink-400">Segurança</a></li>
            <li><a href="#" className="hover:text-pink-400">Whishlist</a></li>
            <li><a href="#" className="hover:text-pink-400">Blog</a></li>
            <li><a href="#" className="hover:text-pink-400">Trabalhe Conosco</a></li>
            <li><a href="#" className="hover:text-pink-400">Meus Pedidos</a></li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div className="mt-4 ml-15">
          <h3 className="text-lg font-semibold mb-4">Categorias</h3>
          <ul className="space-y-2 text-white">
            <li><a href="#" className="hover:text-pink-400">Camisetas</a></li>
            <li><a href="#" className="hover:text-pink-400">Calças</a></li>
            <li><a href="#" className="hover:text-pink-400">Bonés</a></li>
            <li><a href="#" className="hover:text-pink-400">Headphones</a></li>
            <li><a href="#" className="hover:text-pink-400">Tênis</a></li>
          </ul>
        </div>

        {/* Coluna 4 */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-4">Contato</h3>
          <p className="text-white mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus imperdiet.
          </p>
          <p className="text-white">(85) 3051-3411</p>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />
      <p className="text-center text-white text-sm">© 2025 Digital College</p>
    </footer>
  );
}

export default Footer;
