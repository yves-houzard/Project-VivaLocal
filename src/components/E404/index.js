// import module
import { useNavigate } from 'react-router-dom';
// import component
import ButtonUI from '../ButtonUI';
// style
import './style.scss';

export default function E404() {
  const navigate = useNavigate();
  // Function Handle
  const handleClick404 = () => {
    navigate('/');
  };
  return (
    <div className="e404">
      <div className="e404__message">Oops, l<em>4</em> t<em>0</em>m<em>4</em>te ! </div>
      <ButtonUI type="button" className="e404__btn" onClick={handleClick404}>Accueil</ButtonUI>
    </div>
  );
}
