/* eslint-disable jsx-a11y/control-has-associated-label */

// data
import profils from './profils';

import './style.scss';

export default function AboutUS() {
  return (
    <div className="aboutus">
      <h1 className="aboutus__title">Qui somme-nous ?</h1>
      <div className="aboutus__container">
        {profils.map(({
          image, name, role, role2, role3, link,
        }) => (
          <div className="aboutus__card" key={name}>
            <img className="aboutus__avatar" src={image} alt={name} />
            <div className="aboutus__name">{name}</div>
            <div className="aboutus__role1">{role}</div>
            <div className="aboutus__role">{role2}</div>
            <div className="aboutus__role">{role3}</div>
            <div className="aboutus__link">
              <a href={link.linkedIn} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin aboutus__link--in" /></a>
              <a href={link.gitHub} target="_blank" rel="noopener noreferrer"><i className="fab fa-github aboutus__link--git" /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
