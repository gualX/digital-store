// src/components/Logo.jsx
import logoHeader from '../assets/logo-header.svg';
import logoFooter from '../assets/logo-footer.svg';

function Logo({ variant = 'header', className = '' }) {
  const logo = variant === 'footer' ? logoFooter : logoHeader;

  return (
    <img
      src={logo}
      alt="Drip Store Logo"
      width="253"
      height="44"
      className={className}
    />
  );
}

export default Logo;
