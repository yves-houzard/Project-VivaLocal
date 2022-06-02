// Import modules :
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// components
import Logo from '../icons/Logo';
import ButtonUI from '../ButtonUI';

// Import actions :
import { actionCountPro } from '../../actions/appLvl';

// Import style :
import './style.scss';

// image
import mainImage from '../../assets/images/fields-topview.jpg';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const count = useSelector((state) => state.appLvl.count);
  // const scrollVal = useSelector((state) => state.appLvl.scrollVal);
  const checkConnexion = useSelector((state) => state.authent.token);

  useEffect(() => {
    dispatch(actionCountPro());
    // /* add event listener on scrollbar event */
    // window.addEventListener('scroll', () => {
    //   /* get scrollbar value */
    //   let scrollValue = window.scrollY;
    //   /* calculate scrollbar amplitude (document length minus window height) */
    //   const maxAmplitude = document.body.scrollHeight - window.innerHeight;
    //   /* calculate percentage of position */
    //   scrollValue = (scrollValue * 100) / maxAmplitude;
    //   actionSetScrollValue(scrollValue);
    // });
  }, []);

  /* we handle animations */
  //   useEffect(() => {
  // if
  //   }, [scrollVal]);

  const handleGoRegister = () => {
    navigate('/register');
  };

  return (
    <div className="home">
      <div className="home__count__container">
        <div className="home__count__number">{count}</div>
        <div className="home__count"> producteurs nous ont déjà rejoints !</div>
      </div>
      <div className="home__wide-picture">
        <div className="home__details">
          <p>
            Notre plateforme vous permettra d’aller à la rencontre des producteurs à proximité
            de votre position, pour trouver les produits frais de vos envies.
          </p>
          <p className="--new-block">
            <strong>Pensons circuit court</strong>
          </p>
          <p>
            pour limiter ensemble notre impact écologique
            et payer le prix juste pour vous, pour les producteurs
          </p>
        </div>
        {
          checkConnexion ? null : <ButtonUI className="home__register-btn --user" type="button" onClick={handleGoRegister}>Inscrivez-vous</ButtonUI>
        }
        <img src={mainImage} alt="champs" />

      </div>
      <p className="home__catch-phrase" style={{}}>
        Avec<span className="animation__logo"><Logo /></span>
        <span className="app__name">ViveLocal,</span>
      </p>
      <ol className="home__catch-phrase__list">
        <li className="--part2">
          trouvez les producteurs autour de vous...
        </li>
        <li className="--part3">Rencontrez les,</li>
        <li className="--part4">et consommez local !</li>
      </ol>
      {
        checkConnexion ? null
          : (
            <div className="home__static-txt">
              Vous êtes producteur ?
              <p>Cette application est aussi la vôtre !</p>
              <ButtonUI className="home__register-btn --pro" type="button" onClick={handleGoRegister}>Inscrivez-vous</ButtonUI>
            </div>
          )
      }
    </div>
  );
}
