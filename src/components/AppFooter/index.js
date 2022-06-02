// Import :
import { Link } from 'react-router-dom';

// Import local :
import './style.scss';

const AppFooter = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="footer__link">
        <Link
          className="footer__link footer__link__aboutus"
          to="/aboutus"
        >
          Qui sommes-nous ?
        </Link>
        <Link
          className="footer__link footer__link__sitepolicy"
          to="/sitepolicy"
        >
          Politique de confidentialité
        </Link>
        <Link
          className="footer__link footer__link__contact"
          to="/contact"
        >
          Page de contact
        </Link>
      </div>
      <div className="footer__copyright">
        Copyright {year} - ViveLocal - Tous droits réservés
      </div>
    </footer>
  );
};

export default AppFooter;
